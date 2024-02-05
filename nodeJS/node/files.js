// for small data, we use these approaches
// first import the fs module that is built in node
const fs = require('fs');
// the followings are async tasks that take some time to execute, so we use callback functions
// reading files
fs.readFile('./docs/bog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    //console.log(data); //this will return buffer so we need to change it to string
    console.log(data.toString());
});
// writing files
fs.writeFile('./docs/blog1.txt', 'Hello World', () => {
    console.log('file was written'); //it will replace 'Hello Samaneh' with 'Hello World'
});

//if the text file does not exist, it will create a new file and then put the text in it
fs.writeFile('./docs/blog2.txt', 'Hello Again', () => {
    console.log('file was written');
});
// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}
// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}