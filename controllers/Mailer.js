const nodemailer = require('nodemailer');
const {google} = require('googleapis');
require('dotenv').config();
const {CLIENT_SECRET, CLIENT_ID, REFRESH_TOKEN} = process.env;
const OAuth2 = google.auth.OAuth2;

const sendMail = userInfo => {
  return new Promise((resolve, reject) => {
    const {email, username, temp_password} = userInfo;

    const oauth2Client = new OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      'https://developers.google.com/oauthplayground',
    );

    oauth2Client.setCredentials({
      refresh_token: REFRESH_TOKEN,
    });
    const accessToken = oauth2Client.getAccessToken();

    const smtpTransport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'getfitwebapp@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    let message = {
      from: 'GetFitApp <no-reply@gmail.com>',
      to: `<${email}>`,
      subject: `GetFit password reset request for ${username}`,
      text: `To log into your GetFit account, use this temporary password: ${temp_password} `,
      html: `<p>To log into your GetFit account, use this <b>temporary password</b>: ${temp_password}</p>`,
    };

    smtpTransport.sendMail(message, (error, response) => {
      error ? console.log(error) : resolve(response);
      smtpTransport.close();
    });
  });
};

exports.sendMail = sendMail;
