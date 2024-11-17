import './App.css';
// import { Button } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage.js';
import ChatPage from './pages/ChatPage.js';

function App() {
  return (
    <div className="App">
      
        <Route path='/' component={Homepage} exact/>
        <Route path='/chats' component={ChatPage}/>
      
    </div>
  );
}

export default App;
