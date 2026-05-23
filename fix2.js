const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'client', 'public');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix null checks for aadharNumber and adminId
    content = content.replace(/=== undefined/g, '== null');

    fs.writeFileSync(filePath, content, 'utf8');
}

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.html')) {
            replaceInFile(fullPath);
            console.log(`Processed null checks: ${fullPath}`);
        }
    }
}

processDirectory(dir);
console.log('Done!');
