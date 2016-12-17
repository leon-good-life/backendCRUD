// Under development

const assert = require('assert');
const db = require('./db').db;

const contact1 = {
  firstName: 'Leon',
  lastName: 'Gilyadov'
}

db.createNewContact(contact1, (status)=>{
  assert(status === 'ok');
  db.getContacts((response)=>{
    assert(response.status === 'ok');
    console.log(response.contacts);
    assert(response.contacts.length === 1);
    assert(response.contacts[0].firstName === contact1.firstName);
    db.deleteContact(contact1, (status)=>{
      assert(status === 'ok');
      db.getContacts((response)=>{
        assert(response.status === 'ok');
        console.log(response.contacts);
        assert(response.contacts.length === 0);
      });
    });
  });
});
