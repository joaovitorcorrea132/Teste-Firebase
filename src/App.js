import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import React, { useState } from 'react';
import './App.css';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';


function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyB97mPfrzfnDl0yZds1FDdULWafkECqTNE",
    authDomain: "chat-gertel.firebaseapp.com",
    databaseURL: "https://chat-gertel-default-rtdb.firebaseio.com",
    projectId: "chat-gertel",
    storageBucket: "chat-gertel.appspot.com",
    messagingSenderId: "321918378253",
    appId: "1:321918378253:web:6b2029f9e1ae44014bd044"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();

  
function teste(param) {
  const db = getDatabase();
  set(ref(db, '/GrupoId'), {
    teste: param
  });
}

teste('Teste')


  return (
    <div className="App">
      <header className="App-header">
      <div>
        <h1>teste</h1>
      </div>
      </header>
    </div>
  );
}


export default App;
