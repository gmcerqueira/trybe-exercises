// src/App.js
import React from 'react';
import Albums from './components/Albums'
import Image from './components/Image.js';
import Orders from './components/Orders.js';
import UserProfiles from './components/UserProfiles.js';
import './App.css';

function App() {
  return (
    <div>
      <header class='App-header'>
        <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring'/>
        <h1>Albums</h1>
        <Albums/>
        <h1>Users</h1>
        <UserProfiles/>
        <h1>Orders recently created</h1>
        <Orders/>
      </header>
    </div>
  );
}

export default App;
