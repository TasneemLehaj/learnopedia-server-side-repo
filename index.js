const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const courseDetails = require('./data/courseDetails.json');

app.get('/', (req, res) => {
    res.send('learnopedia running');
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course => course.id == id);
    res.send(course);
})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseDetails.find(details => details.id == id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('leanopedia running on port', port);
})
