import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import Carrosel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((response)=>{
        setDadosIniciais(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },[]);
 
  return (
    <PageDefault paddingAll={0 }>
      <Menu />
      
      {dadosIniciais.length == 0 && (<div>...Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {

          return (
            <div key={categoria.Id} >
              <BannerMain videoTitle={dadosIniciais[0].videos[0].titulo} url={dadosIniciais[0].videos[0].url} videoDescription={"Bla bla bla"} />
              <Carrosel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );

        }
      
        return (
          <Carrosel key={categoria.Id} category={categoria} />
        );

      })}
    </PageDefault>
  );
}

export default Home;
