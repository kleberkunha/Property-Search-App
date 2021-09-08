import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { categoriesFetch } from 'services/apiManager';

const Jumbotron = ({ filter }) => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.categories)

  useEffect(() => {
    dispatch(categoriesFetch())
  }, [])
  
  const createFilter = (e) => {
    e.preventDefault()
    let keyword = document.querySelector('.keyword').value
    let category_id = document.querySelector(".filter-select").value;
    filter(keyword,category_id)
  }

  return (
    <div className="home-header jumbotron bg-cover d-flex align-items-center justify-content-center">
      <section className="hero jumbotron-content d-flex row justify-content-center">
        <div className="">
          <h1 className="py-3 d-flex justify-content-center text-center">
            Le meilleur site pour toutes vos annonces immobilières
          </h1>
          <h3 className="py-3 d-flex justify-content-center">
            C'est gratuit, et c'est facile
          </h3>
        </div>
        <form className="filter" onSubmit={(e)=>createFilter(e)}>
          <input type="text" placeholder="Mots clés ..." className="keyword" />
          <select className="filter-select">
            <option className="filter-option" value="">-- Catégories --</option>
            {categories &&
              categories.map((categorie) => {
                return (
                  <option className="filter-option" value={categorie.id}>
                    {categorie.name}
                  </option>
                );
              })}
          </select>
          <input type="submit" value="Chercher" className="filter-btn" />
        </form>
      </section>
    </div>
  );
};

export default Jumbotron;