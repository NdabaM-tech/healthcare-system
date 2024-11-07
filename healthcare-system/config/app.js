const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

app.use(session({
    secret: 'your-secret-key', // Change this to a secure key
    resave: false,
    saveUninitialized: true,
}));

// Sample route for login
app.get('/login', (req, res) => {
    res.render('login');
});

// Sample route for registration
app.get('/register', (req, res) => {
    res.render('patient/register');
});

// Sample route for patient dashboard
app.get('/patient/dashboard', (req, res) => {
    const appointments = [
        { doctor_name: 'Dr. Smith', date: '2024-11-10', time: '10:00 AM' },
        { doctor_name: 'Dr. Jones', date: '2024-11-12', time: '2:00 PM' }
    ];
    res.render('patient/patientDashboard', { firstName: 'John', appointments });
});

// Sample route for admin dashboard
app.get('/admin/dashboard', (req, res) => {
    const doctors = [
        { first_name: 'Jane', last_name: 'Doe', specialization: 'Cardiology' },
        { first_name: 'John', last_name: 'Smith', specialization: 'Neurology' }
    ];
    res.render('admin/adminDashboard', { doctors });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
