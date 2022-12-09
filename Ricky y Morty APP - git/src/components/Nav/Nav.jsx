import React from 'react'
import SearchBar from '../SearchBar'
import { Link } from 'react-router-dom'
import styled from './Nav.module.css'

export default function Nav(props) {
  return (
    <div className={styled.Nav}>

      <h1 className={styled.h1}>Rick y Morty</h1>
      <Link className={styled.Link} to='/Home'><h1>Home</h1></Link>
      <Link className={styled.Link} to='/About'><h1>About</h1></Link>
      <Link className={styled.Link} to='/Favorites'><h1>Favorites</h1></Link>
      <SearchBar className={styled.SearchBar} onSearch={props.onSearch} />
    </div>
  )
}
