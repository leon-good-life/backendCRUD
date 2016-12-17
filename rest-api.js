// Under development

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db').db;

const restAPI = express();

restAPI.use(express.static('client'));
restAPI.use(bodyParser.json()); // for parsing application/json


restAPI.post('/contact/', (req, res)=>{
  const contact = req.body;
  if(!contact) {
    res.sendStatus(400);
    return;
  }
  db.createNewContact(contact, (response)=>{
    if (response == 'ok') {
      res.sendStatus(201);
    } else {
      res.sendStatus(500);
    }
  });
});

restAPI.delete('/contact/', (req, res)=>{
  const filter = req.params['contactId'];
  db.deleteContact(filter, (response)=>{
    if (response == 'ok') {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  });
});

restAPI.get('/contacts/', (req, res)=>{
  db.getContacts((response)=>{
    if (response.status === 'ok') {
      res.status(200).json(response.contacts);
    } else {
      res.sendStatus(500);
    }
  });
});

restAPI.listen(8080, () => {
  console.log('Server running at http://127.0.0.1:8080/');
});
