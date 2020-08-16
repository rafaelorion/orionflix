import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './components/pages/home/Index';
import CadastroVideo from './components/pages/cadastro/video';
import CadastroCategoria from './components/pages/cadastro/categoria';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

const Pagina404 = () => (<div>Pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} /> 
      <Route path="/cadastro/categoria" component={CadastroCategoria} /> 
      <Route path="/" component={Home} exact/>  
      <Route component={Pagina404} /> 
    </Switch>  

  </BrowserRouter>,
  document.getElementById('root')
);
