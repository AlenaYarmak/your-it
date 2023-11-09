const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware to parse JSON and form data
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors()); // Use the cors middleware

const smtpConfig = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
};

const transporter = nodemailer.createTransport(smtpConfig);

// Object to store IP addresses and the last email sent time.
const ipAddresses = {};

app.post('/api/send', async (req, res) => {
    const ipAddress = req.ip;
    const currentTime = new Date().getTime();
    const lastEmailTime = ipAddresses[ipAddress] || 0;
    const oneDayInMs = process.env.SEND_EMAIL_PERIOD_HOURS * 60 * 60 * 1000; // Milliseconds in a day
    
    if (currentTime - lastEmailTime < oneDayInMs) {
        return res.status(429).json({ message: 'You can send only one email per day' });
    }

    const message_data = req.body;

    try {
        await sendEmail(message_data);
        // Update the last email time for the IP address
        ipAddresses[ipAddress] = currentTime;
        res.json({ message: 'Data received and email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

async function sendEmail(message_data) {
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'Contact form submitted',
        text: `You've received a new message from the contact form on your website.
            Here are the details:
            Name: ${message_data.name}
            Email: ${message_data.email}
            Message: ${message_data.message}`
    };

    return transporter.sendMail(mailOptions);
}

app.listen(Number(3000), () => {
    console.log('Server is running on :', 3000);
});
