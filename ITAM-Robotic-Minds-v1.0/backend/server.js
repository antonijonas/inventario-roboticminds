require('dotenv').config();
const express=require('express');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(express.json());

app.get('/api/status',(req,res)=>{
res.json({
sistema:'ITAM Robotic Minds',
estado:'operativo'
});
});

app.listen(process.env.PORT || 3000,()=>{
console.log('API ITAM ejecutándose');
});