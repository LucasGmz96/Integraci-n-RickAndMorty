import './App.css'
import Cards from './components/Cards.jsx'
import styled from './components/card.module.css'
import Nav from './components/Nav/Nav'
import React from 'react'
import { useState, useEffect} from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './form/Form'
import Favorites from './components/Favoritos/Favorites'



function App() {

  const [access, setAccess] = useState(false)
  const navigate = useNavigate();
  const username = 'email@henry.com'
  const password = 'Henry123'

  function login(userData) {
    if(userData.password === password && userData.username === username){
      setAccess(true)
      navigate('/home')
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const [characters, setCharacters] = useState([])
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }
  function onClose(id) {
    setCharacters(characters.filter((characters) => characters.id !== id))
  }
  const location = useLocation()
  
  if (location.pathname === '/') {
    return (
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
      </Routes>
    )
  }else{
    return (
      <div className='App' style={{ padding: '25px' }}>
        <Nav onSearch={onSearch} />
        <div className={styled.divPadre}>
          <Routes>
            
            <Route path="/home" element={<Cards onClose={onClose} characters={characters}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:detailId' element={<Detail />} />
            <Route path='/favorites' element={<Favorites character={characters}/>}/>

          </Routes>
  
        </div>
      </div>
    )
  }


  
}

export default App