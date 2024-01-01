import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/setcookie', (req, res) => {
    res.cookie('name cookie', 'cookie-valor', {
        maxAge: 10000,
        httpOnly: true,
        secure: true,
        sameSite: 'strict' // lax
        //expires: new Date("2024-03-31"),
    })
    res.send('hello cookie');
})

app.get('/getcookies', (req, res) => {
    console.log(req.cookies);
    res.send('reading cookies');
})

app.get('/deletecookie', (req, res) => {
    console.log(req.cookies);
    res.clearCookie('name cookie');
    res.send('deleting cookies');
})

app.listen(3000);
console.log(`server running on http://localhost:3000`);
