const fetchPromoProducts = async (query) => {

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}&offset=3&limit=5`);
  const data = await response.json();

  return data.results;
};


export default fetchPromoProducts;
