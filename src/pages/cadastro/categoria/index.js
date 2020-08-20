import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

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

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: { values.nome }</h1>
            
            <form onSubmit={handleSubmit} style={{background: values.cor}}>
              <FormField label="Nome da Categoria" type="text" name="nome" value={values.nome} onChange={handleChange} />
              <FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange} />
              <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange} />
              <button>Cadastrar</button>
            </form>            

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