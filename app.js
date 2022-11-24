const express = require('express');
const app = express();

app.get('/',(req,res)=>{
   
   const blog = {id:1,title:'Blog Title',description:'Blog Description'};

   res.send(blog);
   
   
    res.send('index sayfası');
})

const port = 3000;

app.listen(port,()=>{
    console.log('sunucu 3000 port ile başlatıldı...');
})