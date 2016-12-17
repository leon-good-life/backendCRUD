// Under development

const MongoClient = require('mongodb').MongoClient;

const dbAPI = {}; // exports.db

const connCallback = (callback)=>{
  const dbName = 'contacts';
  const url = 'mongodb://localhost:27017/' + dbName;
  const collectionName = 'contact';

  const connErr = (err) => {
    console.error(`Error: ${err.message}.`);
    console.error(`Please make sure you are running "mongod" in other terminal window or tab.`);
  };

  MongoClient.connect(url, (err, db)=>{
    // Connection error:
    if (err) {
      connErr(err);
      return;
    }
    // Connected successfully:
    console.log("Connected successfully to server");
    let collection = db.collection(collectionName);
    callback(collection);
    db.close();
  });
};

dbAPI.createNewContact = (contact, callback)=>{
  connCallback((collection)=>{
    collection.insertOne(contact, (error, result)=>{
      callback(error ? 'error' : 'ok');
    });
  });
};

dbAPI.updateContact = (filter, contact, callback)=>{
  connCallback((collection)=>{
    collection.updateOne(filter, contact, (error, result)=>{
      callback(error ? 'error' : 'ok');
    });
  });
};

dbAPI.deleteContact = (filter, callback)=>{
  connCallback((collection)=>{
    collection.deleteOne(filter, (error, result)=>{
      callback(error ? 'error' : 'ok');
    });
  });
};

dbAPI.updateContact = (filter, contact, callback)=>{
  connCallback((collection)=>{
    collection.updateOne(filter, contact, (error, result)=>{
      callback(error ? 'error' : 'ok');
    });
  });
};

dbAPI.getContacts = (callback)=>{
  connCallback((collection)=>{
    collection.find().toArray((err, docs)=>{
      callback({
        status: err ? 'error' : 'ok',
        contacts: docs
      });
    });
  });
};

exports.db = dbAPI;
