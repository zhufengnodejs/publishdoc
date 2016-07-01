#!/usr/bin/env node

var filename = process.argv[2];
var outfile = process.argv[3];
var marked = require('marked');
var fs = require('fs');
if (filename) {
    fs.readFile('./' + filename, 'utf8',function (err, data) {
        var result = marked(data);
        if(outfile){
            fs.writeFile('./'+outfile,result,'utf8',function(err){
                console.log('输出完毕');
            })
        }else{
            console.log(result);
        }
    })
} else {
    console.log('无输入文件');
}
