import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
app.get('/', (req,res) => {
    res.send('hello world');
})

app.listen(3000);
console.log(`server running on http://localhost:3000`);
