// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result); 
    // })
    
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((results) => {
    //     console.log(results);
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    
    // deleteMany
    // db.collection('Users').deleteMany({name: 'Jordan'}).then((result) => {
    //     console.log(result); 
    // })
    
    // deleteOne
    db.collection('Users').deleteOne({_id: ObjectID("5afd80651b1ec001fd246b37")}).then((results) => {
        console.log(results);
    })


    // db.close()
});