const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const WebSocket = require('ws');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:4200', // Asegúrate de que tu frontend esté permitido
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { to, subject, phone, guests, date, text } = req.body;  // Asegúrate de desestructurar todos los campos

  // Imprime todos los campos en la consola
  console.log('Teléfono:', phone);
  console.log('Asunto:', subject);
  console.log('Número de comensales:', guests);
  console.log('Fecha:', date);
  console.log('Observaciones:', text);

  // Configura el transporte de Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'javielafrikano@gmail.com', // Reemplaza con tu correo electrónico
      pass: 'nmlj ycqg qzqc mels', // Reemplaza con tu contraseña de aplicación de Gmail
    },
  });

  const mailOptions = {
    from: 'javielafrikano@gmail.com',
    to,
    subject,
    html: `
      <table style="width: 100%; border-collapse: collapse; background-color: #f4f4f4; padding: 20px;">
        <tr>
          <td style="font-family: Arial, sans-serif; padding: 20px;">
            <h1 style="color: #007BFF;">Su Reserva</h1>
            <p style="font-size: 16px; color: #333;">Gracias por elegirnos. Aquí están los detalles de su reserva:</p>
            <p style="font-size: 16px;"><strong>Teléfono:</strong> ${phone}</p>
            <p style="font-size: 16px;"><strong>Asunto:</strong> ${subject}</p>
            <p style="font-size: 16px;"><strong>Número de comensales:</strong> ${guests}</p>
            <p style="font-size: 16px;"><strong>Fecha:</strong> ${date}</p>
            <p style="font-size: 16px;"><strong>Observaciones:</strong> ${text}</p>
            <p style="font-size: 16px; color: #333;">¡Esperamos verlo pronto!</p>
            <p style="font-size: 14px; color: #777;">Este es un correo automático, por favor no responda.</p>
          </td>
        </tr>
      </table>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Correo enviado: ' + info.response);
  });
});

const wss = new WebSocket.Server({ port: 5500 });

wss.on('connection', (ws) => {
  console.log('Cliente conectado');

  ws.on('message', (message) => {
    console.log('Mensaje recibido:', message);
  });

  ws.send('Hola desde el servidor WebSocket');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});




