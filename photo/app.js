// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다.
// 2. 그 폴더 안에 video, captured, duplicated 폴더를 만든다
// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 비디오(mp4, mov) ->movie , 이미지 확장자(png, aae) -> img, E로 시작하는 파일

const path = require('path');
const os = require('os');
const fs = require('fs');

console.log(process.argv[2]);

const folder = process.argv[2];
const workingDir = path.join(os.homedir(), 'Pictures', folder); // 운영체제 홈디렉터리 + Pictures 폴더 안에 사용자가 입력한 폴더명 경로

if(!folder || !fs.existsSync(workingDir)) {
    console.error('홈 디렉터리 > 사진 안에 있는 폴더 이름을 입력하라', workingDir);
    return;
}

console.log(workingDir);