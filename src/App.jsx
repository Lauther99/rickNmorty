import { useState } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Browser from './components/Browser'
import Card from './components/Card'

function App() {

  return (
    <div className='general-div'>
      <Header />
      <Browser />
      <footer className='footer'>
        <h3>By: Lauther Valladares</h3>
        <h2>Made with <i className="fa-solid fa-heart fa-beat"></i> in Academlo</h2>
        <div className='social-icons fa-bounce'>
          <i className="fa-brands fa-linkedin fa-xl"></i>
          <i className="fa-brands fa-github fa-xl"></i>
          <i className="fa-brands fa-instagram fa-xl"></i>
        </div>
      </footer>
    </div>
  )
}

export default App
