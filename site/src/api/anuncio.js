import axios from "axios";
const api =axios.create({
    baseURL:'http://localhost:5000'
})


export async function novoanuncio(usuario , nome , valor , tipo, contato , descricao ){
const resposta = await api.post ('/anuncio/publicar',  {
    usuario:usuario,
    nome: nome,
    valor:valor,
    tipo:tipo,
    telefone: contato,
    descricao: descricao
})  
return resposta.data
}

export async function enviarimage(id , imagem){
const formData= new FormData()
formData.append('capa', imagem) 
 
const resposta = await axios.put(`/anuncio/${id}/capa`, formData , {headers : {"Content-Type":"multipart/form-data"}})

return resposta.status
}






