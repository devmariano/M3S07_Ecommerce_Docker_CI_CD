import React, { useEffect, useContext, useState } from 'react';
import './Home.css';
import fetchPromoProducts from '../../api/fetchPromoProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';
import banner from '../../images/bannergamer.png';



function Home() {
  const { loading, setLoading } = useContext(AppContext);

  // Configurações de busca para as promoções
  const promoSearchConfigs = [
    { searchTerm: 'NOTEBOOKS GAMER', title: 'NOTEBOOKS GAMER' },
    { searchTerm: 'HEADSETS GAMER', title: 'HEADSETS GAMER' },
    { searchTerm: 'TECLADOS GAMER', title: 'TECLADOS GAMER' },
  ];

  const [promoProducts, setPromoProducts] = useState([]);

  useEffect(() => {
    const fetchPromoProductsAsync = async () => {
      setLoading(true);

      const products = await Promise.all(
        promoSearchConfigs.map(async (config) => {
          const response = await fetchPromoProducts(config.searchTerm);
          return { title: config.title, products: response };
        })
      );

      setPromoProducts(products);
      setLoading(false);
    };

    fetchPromoProductsAsync();
  }, []);

  return (
    (loading && <Loading />) || (
      <section className="promo-home">
        <div className="banner-container container">
          <img src={banner} alt="Banner" className="banner-image" />
        </div>
        {promoProducts.map(({ title, products }) => (
          <div key={title} className="promo-section">
            <h2 className="promo-title">{title}</h2>
            <div className="productsHome container">
              {products.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
          </div>
        ))}
      </section>
    )
  );
}

export default Home;



