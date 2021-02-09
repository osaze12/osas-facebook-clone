
import './App.css';
import React, {useState} from 'react';
import Nav from './components/nav/Nav';
import Main from './components/Main';
import {createStore} from 'redux';
import Login from './components/login/Login';
import {Provider} from 'react-redux';
// import LoginScreen from './components/loginScreen/LoginScreen';
import rootReducer from './components/rootReducer/rootReducer';

function App() {
  const [loginSuccess, setLoginSuccess] = useState(localStorage.getItem('username') ? true : false);

  const store = createStore(rootReducer);
  store.subscribe(()=>{
    let getName = store.getState();
    if (getName.name !== ''){
      localStorage.setItem("username", getName.name)
      setLoginSuccess(true);
    }
  })

  return (
    <Provider store={store}>
    <div className="App">
        {loginSuccess ?
          <>
            <Nav />
            <Main />
          </>
        :
        <Login />
          
        }
      
    </div>
    </Provider>
  );
}

export default App;
