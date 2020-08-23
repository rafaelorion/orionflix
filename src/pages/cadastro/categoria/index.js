import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {

    const valoresIniciais = { nome: '', descricao: '', cor: '#000' };
    const [values, setValues] = useState(valoresIniciais);
    const [categorias, setCategorias] = useState([]);

    function setValue(key, value ){
        setValues({ ...values, [key]: value });
    } 

    function handleChange(args)
    {
        let obj = args.target;
        setValue(
            obj.getAttribute('name'), 
            obj.value
        );
    }

    function handleSubmit(args)
    {
      args.preventDefault();
        setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
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
            <h1>Cadastro de Categoria: { values.nome }</h1>
            
            <form onSubmit={handleSubmit}>
              <FormField label="Nome da Categoria" type="text" name="nome" value={values.nome} onChange={handleChange} />
              <FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange} />
              <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange} />
              <Button>Cadastrar</Button>
            </form>            

            {categorias.length == 0 && (
              <div>....Loading....</div>
            )}

            <ul>
                {categorias.map((categoria, index) => { 
                    return  (
                        <li key={`${categoria}${index}`}> {categoria.nome} </li>
                    )
                 })}
            </ul>

            <Link to="/">Ir para home</Link>
    </PageDefault>
  )
}

export default CadastroCategoria;