import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '.././../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo()
{
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const sugestoesDeCategoria = categorias.map(({titulo}) => titulo );
  const { handleChange, values } = useForm({ titulo: '', url: '', categoria: '',});

  useEffect(() => {
    categoriasRepository
    .getAll()
    .then((categorias) => {
       setCategorias(categorias);
    }); 
  }, []);

  return(
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event)=>{ 
          event.preventDefault();

          const categoriaEscolhida = categorias.find((categoria) => { return categoria.titulo === values.categoria; });

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          }).then(() => {
            history.push('/');
          });
        }}>
        
          <FormField label="Titulo do Video" type="text" name="titulo" value={values.titulo} onChange={handleChange} />
          <FormField label="Url do Video" type="text" name="url" value={values.url} onChange={handleChange} />
          <FormField label="Categoria" type="text" name="categoria" value={values.categoria } suggestions={sugestoesDeCategoria} onChange={handleChange} />
          
          <Button type="submit">Cadastrar</Button>
      </form>

    <Link to="/cadastro/categoria">
        Cadastrar Categoria
    </Link>

    </PageDefault>
  ) 
}

export default CadastroVideo;