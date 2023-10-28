<template>
    <div>
      <button @click="sendEmail">Envoyer l'email</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    methods: {
      async sendEmail() {
        const SENDGRID_API_KEY = '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';
        const SENDGRID_ENDPOINT = 'https://api.sendgrid.com/v3/mail/send';
  
        const headers = {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        };
  
        const data = {
          personalizations: [{ to: [{ email: 'test@example.com' }] }],
          from: { email: 'test@thecoinhub.xyz' },
          subject: 'Sending with SendGrid is Fun',
          content: [{ type: 'text/plain', value: 'and easy to do anywhere, even with cURL' }]
        };
  
        try {
          const response = await axios.post(SENDGRID_ENDPOINT, data, { headers });
          console.log(response.data);
        } catch (error) {
          console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        }
      }
    }
  }
  </script>
  