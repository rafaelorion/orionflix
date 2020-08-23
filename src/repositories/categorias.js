import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAllWithVideos()
{
    return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async(response) => {
        if(response.ok) {
            const responseData = await response.json();
            return responseData;
        }
        throw new Error('Não foi possivel obter os dados');
    });   
}

export default {getAllWithVideos};