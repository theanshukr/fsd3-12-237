import express from 'express';
import path from 'path';
const app = express();
const PORT = 3000;

const filename= fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/pages/contact.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})