const OPENAI_API_KEY = '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'; // Replace with your OpenAI API key

const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');
const fileList = document.getElementById('fileNames');
const analysisOutput = document.getElementById('analysis-output');
let selectedFiles = [];

// Handle file selection and drag-drop functionality
dropArea.addEventListener('click', () => fileInput.click());

dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.classList.add('highlight');
});

dropArea.addEventListener('dragleave', () => dropArea.classList.remove('highlight'));

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.classList.remove('highlight');
    const files = event.dataTransfer.files;
    handleFiles(files);
});

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    handleFiles(files);
});

function handleFiles(files) {
    selectedFiles = [...files];
    updateFileList();
}

function updateFileList() {
    fileList.innerHTML = '';
    selectedFiles.forEach((file) => {
        const li = document.createElement('li');
        li.textContent = file.name;
        fileList.appendChild(li);
    });
}

// Handle file processing and GPT API call
document.getElementById('submit-files').addEventListener('click', async () => {
    if (selectedFiles.length > 0) {
        analysisOutput.value = 'Loading... Please wait while the contract is being analyzed.';

        try {
            const fileTexts = await extractTextFromFiles(selectedFiles);

            // Send text to OpenAI API for contract analysis
            const analysisText = await analyzeContract(fileTexts);
            
            // Display the analysis results
            analysisOutput.value = analysisText;
        } catch (error) {
            // Display error details in the UI and log them to the console
            analysisOutput.value = `An error occurred: ${error.message}`;
            console.error('Error details:', error); // Log the detailed error
        }
    } else {
        alert('Please upload at least one document.');
    }
});

// Extract text from uploaded files (PDF, DOCX, TXT)
async function extractTextFromFiles(files) {
    const fileTexts = [];
    
    for (const file of files) {
        if (file.type === 'application/pdf') {
            const text = await extractTextFromPDF(file);
            fileTexts.push(text);
        } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            const text = await extractTextFromDOCX(file);
            fileTexts.push(text);
        } else if (file.type === 'text/plain') {
            const text = await file.text();
            fileTexts.push(text);
        } else {
            alert('Unsupported file type: ' + file.type);
        }
    }

    return fileTexts;
}

// Extract text from PDF files using pdf-lib
async function extractTextFromPDF(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
    const pages = pdfDoc.getPages();
    let text = '';

    for (const page of pages) {
        text += page.getTextContent().text;
    }

    return text;
}

// Extract text from DOCX files using mammoth.js
async function extractTextFromDOCX(file) {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer: arrayBuffer });
    return result.value;
}

// Send data to OpenAI and analyze contract for fairness
async function analyzeContract(fileTexts) {
    const prompt = `
        The following are sections of a construction contract from Australia:
        ${fileTexts.join('\n\n')}
        Please analyze this contract and detect any unfair terms, deceptive clauses, or anything that may be legally questionable in the context of Australian construction law. Highlight any problematic sections and explain why they may be unfair or misleading.
    `;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo', // or 'gpt-4' depending on your plan
            messages: [
                { role: 'system', content: 'You are an AI contract analyst specialized in Australian construction law.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: 1500,
            temperature: 0.5
        })
    });

    if (!response.ok) {
        // Throw an error with detailed information
        const errorData = await response.json();
        throw new Error(`API Error: ${response.statusText}. Details: ${JSON.stringify(errorData)}`);
    }

    // Parse the response
    const data = await response.json();
    
    // Extract and return the analysis text
    const analysisText = data.choices[0].message.content;
    return analysisText;
}
