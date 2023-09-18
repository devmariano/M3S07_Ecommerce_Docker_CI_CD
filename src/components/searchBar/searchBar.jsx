import React, { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './searchBar.css';
import fetchProducts from '../../api/fetchProdutcs';
import AppContext from '../../context/AppContext';

function SearchBar() {

  const[ searchValue, setSearchValue ] = useState('');

  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async(event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input 
        type="search" 
        value={searchValue}
        className="searh__input" 
        placeholder="Buscar Produtos"
        onChange={ ({target}) => setSearchValue(target.value) }
        required
      />
      <button type="submit" className="search__button">
        <BsSearch/>
      </button>
    </form>
  );
}

export default SearchBar;
