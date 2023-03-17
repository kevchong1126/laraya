import React, { useState } from 'react'
import style from './Search.module.scss'

import { useNavigate } from 'react-router-dom';

import { FaSearch } from "react-icons/fa";

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  
  const queryHandler = e => {
    setQuery(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim().length) return 

    const newQuery = query.trim().toUpperCase().split(' ').join('-');

    navigate(`searchresult/${newQuery}`);

    setQuery('');
  }

  return (
    <div className={style.formContainer} >
        <form className={style.form} onSubmit={handleSearch}>
            <input className={style.input} type='text' value={query} onChange={queryHandler} placeholder='Buscar por pieza o código...'></input>
            <button className={style.btn}><FaSearch className={style.icon} /></button>
        </form>
    </div>
  )
}

export default Search