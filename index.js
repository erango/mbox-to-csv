import Mbox from 'node-mbox';
import mailparser from 'mailparser';

const arguments = process.argv.slice(2);
assert.ok(arguments.length == 1, "You must input file name");

const filename = arguments[0];
assert.ok(filename, "File name cannot be empty");

const mbox = new Mbox(filename, {
    /* options */ });

mbox.on('message', function (msg) {
    // `msg` is a `Buffer` instance
    console.log('got a message', msg.toString());
});

mbox.on('error', function (err) {
    console.log('got an error', err);
});

mbox.on('end', function () {
    console.log('done reading mbox file');
});