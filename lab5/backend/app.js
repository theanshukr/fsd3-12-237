import express from 'express';

const app = express();

app.get('/', (req, res) => {
  //res.send('Hello, World!');
  //res.send("<h1>Hello Express</h1>");

  res.send(`
    <h1>Hello Express</h1>
    <h2></h2>Welcome to my Express app!</h2>
    <h3></h3>Enjoy your stay!</h3>
  `);

}); 
app.get('/about', (req, res) => {
  res.send(`
    <h1>About Page</h1>
    <p>This is the about page of my Express app.</p>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});