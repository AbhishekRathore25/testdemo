const express = require('express');


const app = express();

const admin = require("firebase-admin");
const credentials = require(".//key.json");

const newNote = { title: "My New Note", content: "This is a sample note." };
const docRef = db.collection('notes').add(newNote);

const customDocId = 'custom-document-id';
const customDocRef = db.collection('notes').doc(customDocId);
customDocRef.set(newNote);

const notesCollection = db.collection('notes');
notesCollection.get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((error) => {
    console.error('Error getting documents: ', error);
  });


const query = notesCollection.where('title', '==', 'My New Note');
query.get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((error) => {
    console.error('Error querying documents: ', error);
  });
  const docToUpdate = db.collection('notes').doc('document-id-to-update');

  const updateData = {
    title: 'Updated Title',
    content: 'Updated content for the note.'
  };
  
  docToUpdate.update(updateData)
    .then(() => {
      console.log('Document updated successfully');
    })
    .catch((error) => {
      console.error('Error updating document: ', error);
    });
    const docToDelete = db.collection('notes').doc('document-id-to-delete');

    docToDelete.delete()
      .then(() => {
        console.log('Document deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting document: ', error);
      });
      