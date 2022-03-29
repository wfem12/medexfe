import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

import Private from './Components/UX/Private/Private';

import { store, persistor } from './Store';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/Signin/Signin';
import Login from './Components/Views/Login/LoginPage';
import Todo from './Components/Views/Todo/TodoPage';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signin" element={<Signin/>}/>

        <Route path="/Todo" element={<Private><Todo/></Private>}/>
      </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}


export default App;
