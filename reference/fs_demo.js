/*
 * @Author: Yepeng Zhang
 * @LastEditors: Yepeng Zhang
 */
// fs = file system
const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw err;
//     console.log('created files')
// })

// Create and write a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world', (err) => {
//     if (err) throw err;
//     console.log('Created and writen to...')
//     // Append and write a file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love node Js', (err) => {
//         if (err) throw err;
//         console.log('Created and writen to...')
//     })
// })

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// Rename file
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hellomaomao.txt'), (err) => {
//     if (err) throw err;
//     console.log('Created and writen to...')
// })
