const fs=require("fs")
fs.writeFileSync('student.txt', 'This is the experiment no. 2 in FSD workshop','utf-8');
console.log('file is written successfully');

// read file
const data= fs.readFileSync('student.txt','utf-8');
console.log('File content is given as: ', data);

// update file
fs.appendFileSync('student.txt','\nThis file contains details of section A');
console.log('File is updated')

const data1=fs.readFileSync('student.txt','utf-8');
console.log('File content is given as: ',data1,'\n');

// delete
// fs.writeFileSync('file.txt','this file is created for deletion purpose','utf-8');
// fs.unlink('file.txt');
// console.log('file deleted successfully');

// folder create
 fs.mkdirSync('sample');
 console.log('New folder created successfully');

// remove folder
fs.rmdirSync('sample');
console.log('Folder deleted successfully');

// check existence
if(fs.existsSync('student.txt')){
console.log('File exists');
}
else{
    console.log('File not found, need to create another file');
}
