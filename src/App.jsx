import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Valentine from './pages/Valentine'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyAtlx6ANf15fZJELt3syw8HmALu1oItmQQ",
    authDomain: "valentines-e6657.firebaseapp.com",
    projectId: "valentines-e6657",
    storageBucket: "valentines-e6657.appspot.com",
    messagingSenderId: "52097000791",
    appId: "1:52097000791:web:4ab62cb159e5684d4a0a12",
    measurementId: "G-Y58F3EB16L"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <Routes>
      <Route path='/' index element={<Landing/>}/>
      <Route path='/valentine' element={<Valentine/>}/>
    </Routes>
     
  )
}

export default App
