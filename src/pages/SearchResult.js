import React from 'react'
import style from './SearchResult.module.scss'

import ResultHeader from '../components/SearchResult/ResultHeader'
import ResultCards from '../components/SearchResult/ResultCards'
import ResultInfo from '../components/SearchResult/ResultInfo'

const SearchResult = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
          <ResultHeader />

          <div className={style.flex}>
              <div className={style.left}>
                  <ResultInfo />
              </div>

              <div className={style.right}>
                  <ResultCards />
              </div>
          </div>
      </div>
    </div>
  )
}

export default SearchResult
