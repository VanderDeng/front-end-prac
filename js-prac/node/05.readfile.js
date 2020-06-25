// 通过模块的名字fs对模块进行引用

const fs = require('fs');


fs.readFile('./helloworld.js', 'utf8', (err,doc) => {
    console.log(err);
    console.log(doc);
    
    
});