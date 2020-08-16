import React from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria()
{
  return(
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

    <Link to="/">
        Voltar para Home
    </Link>

    </PageDefault>
  ) 
}

export default CadastroCategoria;