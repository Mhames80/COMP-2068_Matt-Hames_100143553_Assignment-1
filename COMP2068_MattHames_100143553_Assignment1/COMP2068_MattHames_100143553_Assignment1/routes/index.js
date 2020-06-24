'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Home' });
});
router.get('/about/', function (req, res) {
    res.render('about', { title: 'About Me' });
});
router.get('/projects/', function (req, res) {
    res.render('projects', { title: 'Projects' });
});
router.get('/service/', function (req, res) {
    res.render('service', { title: 'Service' });
});
router.get('/contact/', function (req, res) {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router;