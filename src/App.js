import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import store from './Store';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/Signin/Signin';
import Login from './Components/Views/Login/LoginPage';
import Todo from './Components/Views/Todo/TodoPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Todo" element={<Todo/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
