const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, from, to) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let result = content.replace(new RegExp(from, 'g'), to);
    fs.writeFileSync(filePath, result, 'utf8');
}

function processDirectory(dir, from, to) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath, from, to);
        } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css')) {
            replaceInFile(fullPath, from, to);
        }
    });
}

const targetDir = path.join(__dirname, 'cpanel_build');
const oldName = '_next';
const newName = 'next_assets';

console.log(`Renaming ${oldName} to ${newName} in ${targetDir}...`);

// 1. Rename the folder
const oldPath = path.join(targetDir, oldName);
const newPath = path.join(targetDir, newName);

if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log('Folder renamed.');
} else {
    console.log('Folder _next not found in cpanel_build.');
}

// 2. Update references in files
processDirectory(targetDir, '/_next/', `/${newName}/`);
processDirectory(targetDir, '_next/', `${newName}/`);

console.log('References updated.');
