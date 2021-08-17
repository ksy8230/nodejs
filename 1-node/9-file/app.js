const fs = require('fs');

// 3
// rename(..., callback(error, data))
// try { renameSync(...) } catch (e) { }
// promises.rename().then().catch(0)


try {
    fs.renameSync('./file.txt', './file-new.txt');
} catch (error) {
    console.error(error);
}

// 선호
fs.rename('./file-new.txt', './file-new2.txt', (error) => {
    console.error(error)
});

// 선호
fs.promises
.rename('./file-new2.txt', './file.txt')
.then(() => console.log('done!'))
.catch(console.error);

console.log('test');