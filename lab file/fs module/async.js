const fs=require('fs');

// create file
fs.writeFile(
    'sample.txt','welcome to full stack development',(err)=>{
        if(err)
        {
            console.log('error creating file',err);
            return;
        }
        console.log('File created successfully');
    }
)

// read file
fs.readFile('sample.txt','utf-8',(err,data)=>{
    if(err){
        console.log('Error reading file',err)
        return;
    }
    console.log('File content: ',data);
}
)

// append
fs.appendFile('sample.txt','\nSemester: 3',(err)=>{
    if(err){
        console.log('Error updating file',err);
    }
    else{
        console.log('File updated successfully');
    }
})
// new file
fs.writeFile(
    'example.txt','welcome to CSE DS A',(err)=>{
        if(err)
        {
            console.log('error creating file',err);
            return;
        }
        console.log('NEW file created successfully');
    }
)

// delete
fs.unlink(
    'example.txt',(err)=>{
        if(err)
            console.log('Error deleting file:',err);
        else
             console.log('NEW file deleted successfully');     
    }
)
