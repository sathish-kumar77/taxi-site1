const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const pages = [
    { route: '/', view: 'index', title: 'Home' },
    { route: '/about', view: 'about', title: 'About Us' },
    { route: '/booking', view: 'booking', title: 'Booking'},
    { route: '/header', view: 'header', title: 'Header'},
    { route: '/footer', view: 'footer', title: 'Footer'},
    { route: '/service', view: 'service', title: 'Services'},
    { route: '/vehicles', view: 'vehicles', title: 'Vehicles'},
    { route: '/cities', view: 'cities', title: 'Cities'},
    { route: '/tariff', view: 'tariff', title: 'Tariff'},
    { route: '/contact', view: 'contact', title: 'Contact'}
  ];


  
  pages.forEach(page => {
    app.get(page.route, (req, res) => {
      res.render(`pages/${page.view}`, { title: page.title });
    });
  });


  app.use((req, res) => {
    console.warn(`404 - Page not found: ${req.originalUrl}`);
    res.status(404).render('pages/error');
  });
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
