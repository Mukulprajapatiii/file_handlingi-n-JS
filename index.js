const { error } = require("console");
const fs = require("fs");

//This was synchronus call...
fs.writeFileSync("./text.txt","Hey");

//This is async call ...
fs.writeFile("./test.txt","Hey.. This is async call", (error)=>{

});


//Sync call...

// const result = fs.readFileSync("./read_file.txt","utf-8");
// console.log(result);


//Async call ...

fs.readFile("./read_file.txt","utf-8", (error, result)=>{
    if(error){
        console.log("Error came");
    }
    else{
        console.log(result);
    }
});