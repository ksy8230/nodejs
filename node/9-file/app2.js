const fs = require('fs').promises;

// read file
fs.readFile('./file.txt', 'utf8')
    .then(data => console.log(data))
    .catch(console.error);

// writing file
fs.writeFile('./file.txt', 'Hello node js')
    .catch(console.error);

// folder
fs.mkdir('sub-folder')
    .then(console.error);   

// 현재 경로 파일 전부 출력 array 형태
fs.readdir('./')
    .then(console.error);