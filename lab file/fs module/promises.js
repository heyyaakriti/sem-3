const fs=require('fs').promises;
 async function writeFile() {
    try{
        await fs.writeFile("promise.txt","ABES-EC :");
        console.log("File created and data written successfully: ");
    }catch (error){
        console.log("Erroe: ", error);
    }
 }
 writeFile();

 async function renameFile(){
    try{
        await fs.rename("promise.txt","promises.txt");
        console.log('File renamed successfully');
    }catch(error){
        console.log("Error: ",error);
    }
 }
 renameFile();

 async function appendFile(){
    try{
        await fs.appendFile("promise.txt",'\nWelcome to fsd training');
        console.log('Data appended successfully');
    }catch(error){
        console.log("Error :",error);
    }
 }
 appendFile();

 async function deleteFile() {
    try{
        await fs.unlink("deletion.txt");
        console.log("File deleted successfully");
    }catch(error){
        console.log("Error :",error);
    }
 }
 deleteFile();