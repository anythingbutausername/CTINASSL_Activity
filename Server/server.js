const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.status(200).send('Hello world');
});

app.listen(8000, error => {
    if (error) {
        console.log("Error starting server!", error);
        process.exit(1);
    }
    console.log("Server is running at port: ", 8000);
});

app.post('/greetings', (request, response) => {
    const { name, course, section } = request.body;
    response.status(200).json({
        name: name,
        course: course,
        section: section,
        message: `Hej ${name}! Vallkommen till ${course} kursen och du ar i ${section}!`
    });
});