import React, { useEffect, useState } from 'react'
import style from './ResultCards.module.scss'
import ResultCard from './ResultCard'

import db from '../../data/db.json'

import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'

import ReactPaginate from 'react-paginate'

const ResultCards = () => {
  const { searchquery } = useParams();
  const [products, setProducts] = useState(null);
  const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));
  const { car } = useSelector( el => el.selectedCar);
  const [fitsCar, setFitsCar] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);
  const qtyPerPage = 10;
  const pagesVisited = pageNumber * qtyPerPage;

  useEffect(() => {
    const splitQuery = searchquery.split('-');
    const ht = {};
    console.log(car, selectedCar)
    const newProducts = db.filter( product => {
        if (selectedCar){
          setFitsCar(true);

          return splitQuery.every( word => product.descripcion.includes(word) || product.properties.codigo === word ) && (selectedCar === product.carro || product.carro === 'universal') 
        }

        else if (!selectedCar){
          setFitsCar(false);

          if (splitQuery.every( word => product.descripcion.includes(word) || product.properties.codigo === word ) && !ht[product.properties.codigo]){
            ht[product.properties.codigo] = true;
            return true
          }
        } 
        
        return false
    })
    
    setPageNumber(0)
    setProducts(newProducts);
    
  }, [searchquery, car, selectedCar ]);

  const pageCount = products ? Math.ceil(products.length / qtyPerPage) : 0;

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }
  
  const renderProducts = () => {
    if (!products || !products.length){
      return (
        <div className={style.noProducts}>
            <h1>:(</h1>
            <h2>Could not find any part with that description</h2>
        </div>
      )
    }

    return (<>
              <h3 className={style.productLength}> Mostrando "{products.length}" producto(s)</h3>
              {
              products.slice(pagesVisited, pagesVisited+qtyPerPage).map(el => <ResultCard key={el.id} product={el} fits={fitsCar}/>)
              }
              <ReactPaginate 
                previousLabel='Anterior'
                nextLabel='Siguiente'
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={style.paginate}
                previousLinkClassName={style.changeBtn}
                nextLinkClassName={style.changeBtn}
                disabledClassName={style.disabled}
                activeClassName={style.currBtn}
              />
            </>
    )
  }
  
  return ( 
    <div className={style.container}>
        {
          renderProducts()
        }   
    </div>
  )
}

export default ResultCards