import React, { useState } from 'react';
import AuthComponent from './components/AuthComponent';
import List from './components/List';
import DragAndDrop from './components/DragAndDrop';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Implement authentication state management and API calls here

  return (
    <div className="App">
      {!loggedIn ? (
        <AuthComponent setLoggedIn={setLoggedIn} setUser={setUser} />
      ) : (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <List />
          <DragAndDrop />
        </div>
      )}
    </div>
  );
}

export default App;
