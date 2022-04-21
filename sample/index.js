const app = require ('./app');

app.listen(process.env.PORT,() => {
    console.log('Server starts at',process.env.PORT);
});