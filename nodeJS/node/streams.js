/* Streams
when the data is large, and reading it takes a lot of time and we can't wait for it and want to start using data, before it has finished loading. we can use streams. so small chunks of data are packaged up into buffers. every time the buffer fills, we can start using it.
*/
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'}); //utf8 change the bunary to string
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//.on is an eventListener, and here we are listening to a data event. it means every time we get a chunk of data, we can call the callback function and use that chunk of data
readStream.on('data', chunk => { 

  console.log('---- NEW CHUNK ----');
  //console.log(chunk.toString());
  //or instead of using toString(), we can use { encoding: 'utf8'} like we did above and just log it to the console
  console.log(chunk);

  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk); //every time we get that chunk, write it in the new file
});

// another way to read and write stream is using pipe, which is way simpler. whenever a chunck of data has been read, it will be written to the stream
// piping
readStream.pipe(writeStream);