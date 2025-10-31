//fs -> file system
const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname,"data");
console.log(__dirname);
console.log(__filename);
console.log(dataFolder);
if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("Data folder created : ")
}

const filePath = path.join(dataFolder,"example.txt");
//sync way of creating file
fs.writeFileSync(filePath,"hello, Im Nguyen Le Huynh Duy!!");
console.log("File created susscessfully!!");

const readContentFromFile = fs.readFileSync(filePath,'utf-8');
console.log("File content : ",readContentFromFile);

// Thêm một dòng mới
fs.appendFileSync(filePath,"\n Tôi đang sống ở Hàn Quốc~");
console.log("Đã thêm nội dung mới !");

//async way of  creating the file
const asyncFilePath = path.join(dataFolder,"async-example.txt");
fs.writeFile(asyncFilePath,"Hello Async node js",(err)=>{
    if(err){
        throw err;
    }
    console.log("Async file created successfully!");

    fs.readFile(asyncFilePath,'utf-8',(err,data)=>{
        if(err){
            throw err;
        }
        console.log("Async file content : ",data);

        fs.appendFile(asyncFilePath,"\n Them mot dong moi",(err)=>{
            if(err){
                throw err;
            }
            console.log("New line added to async  " );

            fs.readFile(asyncFilePath,'utf-8',(err,updateData)=>{
                  if(err){
                    throw err;
                }
                console.log("Async updateData file content : ",updateData);
            })
        })
    })
})