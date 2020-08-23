import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import UseForm from '../../../hooks/useForm';
import URL from '../../../config';


function CadastroCategoria() {

    const valoresIniciais = { titulo: '', descricao: '', cor: '#000' };
    const [categorias, setCategorias] = useState([]);
    const {handleChange, values, clearForm} = UseForm(valoresIniciais);

    function handleSubmit(args)
    {
      args.preventDefault();
        setCategorias([
            ...categorias,
            values
          ]);

          clearForm()
    }

    useEffect(() =>  { 
      const URL_LOCAL  = 'http://localhost:8080/categorias';
      const URL_HEROKU = 'https://orionflix.herokuapp.com/categorias';
      const URL = window.location.hostname.includes('localhost') ? URL_LOCAL : URL_HEROKU;
      
      fetch(URL).then(async(response) => {
        const responseData = await response.json();
        setCategorias([
          ...responseData,
        ]);
      });
    }, [] );

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: { values.titulo }</h1>
            
            <form onSubmit={handleSubmit}>
              <FormField label="Nome da Categoria" type="text" name="titulo" value={values.titulo} onChange={handleChange} />
              <FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange} />
              <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange} />
              <Button>Cadastrar</Button>
            </form>            

            {categorias.length == 0 && (
              <div>....Loading....</div>
            )}

            <ul>
                {categorias.map((categoria, index) => { 
                    return (<li key={`${categoria}${index}`}> {categoria.titulo} </li>)
                 })}
            </ul>

            <Link to="/">Ir para home</Link>
    </PageDefault>
  )
}

export default CadastroCategoria;