import express from 'express';
import path from 'path'; // Import path module
import { fileURLToPath } from 'url'; // Import to work with __dirname in ES modules

const app = express();
const PORT = 3000;

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route for home page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        headerContent: 'home page',
        mainContent: 'hi',
        footerContent: 'hi'
    });
});

// Route page 2
app.get('/about', (req, res) => {
    res.render('index', {
        title: 'About',
        headerContent: 'hi',
        mainContent: 'hi',
        footerContent: 'hey'
    });
});
// middleware
app.use((err, req, res, next) => {
    console.error(err.stack);  // Log the error stack trace for debugging
    res.status(500).render('error', { 
        title: 'Error',
        message: 'you done messed up',
        error: err.message  // You can customize this to show less or more info based on the environment
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
