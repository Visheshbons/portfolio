// import express from "express";
import express from "express";

// set up variables
let openedHome = 1;
let openedAbout = 1;
let openedContact = 1;
const app = express();
const port = 3000;
const portForward = true;

// set up other stuff
app.use(express.static("public"));

// function to detect mobile device should be moved to client side


// set up req,res
app.get("/", (req, res) => {
    res.render("index.ejs", {
        name: "Vishesh Kudva",
        age: 13,
    });
    console.log(`Home page loaded. (${openedHome})`);
    openedHome++;
});

app.get("/index.ejs", (req, res) => {
    res.redirect("/")
    console.log(`Redirected from "/index.ejs" to home page. ("/")`)
})

app.get("/about.ejs", (req, res) => {
    res.render("about.ejs", {
        name: "Vishesh Kudva",
        age: 13,
    });
    console.log(`About page loaded. (${openedAbout})`)
    openedAbout++;
})

app.get("/contact.ejs", (req, res) => {
    res.render("contact.ejs")
    console.log(`Contact page loaded. (${openedContact})`)
    openedContact++;
})

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com',
        subject: `Contact form submission from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Something went wrong.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Message sent successfully!');
        }
    });
});

app.post('/contact-log', (req, res) => {
    const feedback = req.body['console.log'];

    // Log the feedback to the console
    console.log(`Feedback: ${feedback}`);
    res.status(200).send('Feedback logged to console!');
});


// listen to port
app.listen(port, () => {

    // get current date
    let date_time = new Date();

    // adjust 0 before single digit date
    let date = ("0" + date_time.getDate()).slice(-2);

    // get current month
    let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

    // get current year
    let year = date_time.getFullYear();

    // get current hours
    let hoursRaw = date_time.getHours();
    if (hoursRaw > 12) {
        var hours24 = hoursRaw - 12;
    } else {
        var hours24 = hoursRaw;
    };
    
    if (hours24 < 10) {
        var hours = "0" + hours24;
    } else {
        var hours = hours24;
    };

    // get current minutes
    let minutesRaw = date_time.getMinutes();
    if (minutesRaw < 10) {
        var minutes = "0" + minutesRaw;
    } else {
        var minutes = minutesRaw;
    };

    // get current seconds
    let secondsRaw = date_time.getSeconds();
    if (secondsRaw < 10) {
        var seconds = "0" + secondsRaw;
    } else {
        var seconds = secondsRaw;
    };

    // get AM or PM
    if (hoursRaw > 12) {
        var time = "PM";
    } else if (hoursRaw == 12) {
        var time = "PM";
    } else {
        var time = "AM";
    }

    
    // log server start
    console.log(`Server running on port ${port}.`);
    console.log(``);

    // log date and time
    console.log(`Date of start: ${date}-${month}-${year}`);
    console.log(`Time of start: ${hours}:${minutes}:${seconds} ${time}`);
    console.log(``);

    // log website info
    console.log(`Go to http://localhost:${port} to view the website.`);
    if (portForward) {
        console.log(`Go to https://p9npwlmh-${port}.aue.devtunnels.ms/ to view the website.`);
    };
    console.log(``);

    // log server commands
    console.log(`Type "rs" to restart the server.`);
    console.log(`Press CTRL + C to kill the server.`);
    console.log(``);

    // log info usage log details
    console.log(`Pages that are loaded are logged underneath.`)
    console.log(``);
})