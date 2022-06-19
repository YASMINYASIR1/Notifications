import './App.css';
// import firebase from 'firebase';
import React from 'react';
import Notifications from './Notifications';
  
function App() {
  
  React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token",data)
    })
  })
  return (
    <div className="App">
       <Notifications/>
    </div>
  );
}

export default App;
