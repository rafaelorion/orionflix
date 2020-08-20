import React from 'react';
import Menu from '../../components/Menu';
import Carrosel from '../../components/Carousel';
import Footer from '../../components/Footer';
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div>
      <Menu />
      
      <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo} 
                  url={dadosIniciais.categorias[0].videos[0].url}
                  videoDescription={"Bla bla bla"} />
        
      <Carrosel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carrosel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
      <Carrosel ignoreFirstVideo category={dadosIniciais.categorias[3]} />
      <Carrosel ignoreFirstVideo category={dadosIniciais.categorias[4]} />
      <Carrosel ignoreFirstVideo category={dadosIniciais.categorias[5]} />

    </div>
  );
}

export default Home;
