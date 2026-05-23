const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'client', 'public');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Node modules replacements
    content = content.replace(/\/node_modules\/bootstrap-icons\/font\/bootstrap-icons\.css/g, 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css');
    content = content.replace(/\/node_modules\/bootstrap\/dist\/css\/bootstrap\.css/g, 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css');
    content = content.replace(/\/node_modules\/jquery\/dist\/jquery\.js/g, 'https://code.jquery.com/jquery-3.6.0.min.js');
    content = content.replace(/\/node_modules\/jquery\.cookie\/jquery\.cookie\.js/g, 'https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js');

    // Cookie replacements
    content = content.replace(/\$\.cookie\("aadhar_number",\s*aadharNumber\)/g, 'localStorage.setItem("aadhar_number", aadharNumber)');
    content = content.replace(/\$\.cookie\('aadhar_number',\s*aadharNumber\)/g, 'localStorage.setItem("aadhar_number", aadharNumber)');
    
    content = content.replace(/\$\.cookie\("admin_id",\s*adminId\)/g, 'localStorage.setItem("admin_id", adminId)');
    content = content.replace(/\$\.cookie\('admin_id',\s*adminId\)/g, 'localStorage.setItem("admin_id", adminId)');

    content = content.replace(/\$\.cookie\("aadhar_number"\)/g, 'localStorage.getItem("aadhar_number")');
    content = content.replace(/\$\.cookie\('aadhar_number'\)/g, 'localStorage.getItem("aadhar_number")');
    
    content = content.replace(/\$\.cookie\("admin_id"\)/g, 'localStorage.getItem("admin_id")');
    content = content.replace(/\$\.cookie\('admin_id'\)/g, 'localStorage.getItem("admin_id")');

    content = content.replace(/\$\.removeCookie\('aadhar_number'\)/g, 'localStorage.removeItem("aadhar_number")');
    content = content.replace(/\$\.removeCookie\("aadhar_number"\)/g, 'localStorage.removeItem("aadhar_number")');
    
    content = content.replace(/\$\.removeCookie\('admin_id'\)/g, 'localStorage.removeItem("admin_id")');
    content = content.replace(/\$\.removeCookie\("admin_id"\)/g, 'localStorage.removeItem("admin_id")');

    // Fix /aadhardetails typo to /aadharDetails
    content = content.replace(/\/aadhardetails/g, '/aadharDetails');

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
            console.log(`Processed: ${fullPath}`);
        }
    }
}

processDirectory(dir);
console.log('Done!');
