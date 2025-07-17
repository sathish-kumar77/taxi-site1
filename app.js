const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Define page routes
const pages = [
    { route: '/', view: 'index', title: 'Home' },
    { route: '/about', view: 'about', title: 'About Us' },
    { route: '/booking', view: 'booking', title: 'Booking' },
    { route: '/service', view: 'service', title: 'Services' },
    { route: '/vehicles', view: 'vehicles', title: 'Vehicles' },
    { route: '/cities', view: 'cities', title: 'Cities' },
    { route: '/tariff', view: 'tariff', title: 'Tariff' },
    { route: '/contact', view: 'contact', title: 'Contact' }
];

// Set up routes
pages.forEach(page => {
    app.get(page.route, (req, res) => {
        res.render(`pages/${page.view}`, { title: page.title });
    });
});

// 404 handler
app.use((req, res) => {
    console.warn(`404 - Page not found: ${req.originalUrl}`);
    res.status(404).render('pages/error');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
