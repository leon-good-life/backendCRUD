// Under development

let url = 'http://127.0.0.1:8080';

const contact1 = {
  firstName: 'Leon',
  lastName: 'Gilyadov'
};

const getContacts = ()=>{
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url + '/contacts/');
  xhr.addEventListener('readyStatechange', (e)=>{
    console.log(e);
  });
  xhr.send();
}
const createNewContact = ()=>{
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url + '/contact/');
  xhr.addEventListener('readyStatechange', (e)=>{
    console.log(e);
  });
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(JSON.stringify(contact1));
}
const deleteContact = ()=>{
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', url + '/contact/');
  xhr.addEventListener('readyStatechange', (e)=>{
    console.log(e);
  });
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(JSON.stringify(contact1));
}
