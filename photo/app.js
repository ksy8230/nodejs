// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다.
const path = require('path');
const os = require('os');
const fs = require('fs');

console.log(process.argv);

const folder = process.argv[2];
const workingDir = path.join(os.homedir(), 'Pictures', folder); // 운영체제 홈디렉터리 + Pictures 폴더 안에 사용자가 입력한 폴더명 경로
// C:\Users\두궁\Pictures\test\

if(!folder || !fs.existsSync(workingDir)) {
    console.error('홈 디렉터리 > 사진 안에 있는 폴더 이름을 입력하라', workingDir);
    return;
}

// 2. 그 폴더 안에 video, captured, duplicated 폴더를 만든다
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');
console.log(videoDir);
console.log(capturedDir);
console.log(duplicatedDir);

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 비디오(mp4, mov) ->movie , 이미지 확장자(png, aae) -> img, E로 시작하는 파일
fs.promises.readdir(workingDir)
    .then(processFiles) // file => { processFiles(file) } 의 생략형
    .catch(console.log);


function processFiles(files) {
    files.forEach(file => {
        if(isVidoeFile(file)){
            move(file, videoDir);
        }
        if(isCapturedFile(file)){
            move(file, capturedDir);
        }
        if(isDuplicatedFile(files, file)){
            move(file, duplicatedDir);
        }
    });
}

function isVidoeFile(file) {
    const regExp = /(mp4|mov)$/gm;
    const match = file.match(regExp);
    return !!match; // math되면 true, 아니면 false 반환
}

function isCapturedFile(file) {
    const regExp = /(png|aae)$/gm;
    const match = file.match(regExp);
    return !!match;
}

function isDuplicatedFile(files, file) {
    if(!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
        return false;
    }

    const edited = `IMG_E${file.split('_')[1]}`;
    const found = files.find(f => f.includes(edited));

    return !!found;
}

function move(file, targetDir) {
    console.info(`move ${file} to ${path.basename(targetDir)}`);
    const oldPath = path.join(workingDir, file);
    const newPath = path.join(targetDir, file);
    fs.promises
    .rename(oldPath, newPath)
    .catch(console.error);
}