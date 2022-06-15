import { Link } from "react-router-dom";
import './index.scss'
import { useState } from 'react';
import { novoanuncio , enviarimage } from "../../api/anuncio.js";
import storage from 'local-storage'


export default function index() {
    document.title = 'Publicar'
    const [nome ,setnome ]=useState('')
    const [valor , setvalor ]=useState(0)
    const [tipo ,settipo ]=useState('')
    const [contato ,setcontato ]=useState('')
    const [descricao , setdescricao ]=useState('')
    const [image ,setimage ]=useState('')

async function salvarclick(){
    try {
        const usuario = storage('usuario-logado').id
        const r = await novoanuncio(usuario , nome, valor , tipo , contato , descricao )
        
        alert('anuncio publicado')
        } catch (err) {
        alert(err.message)
    }

}




return(
        <div className="mae-publicar">
        <div className="cabeçalho">
            <img src="../../assets/image/logo1.svg" className="log" alt=""/>
            <div className="btns">
          
              <Link  className="btn1" style={{textDecoration: 'none'}} to="/">
                 INICIO
              </Link> 
              <Link 
               className="btn2" style={{textDecoration: 'none'}} to="/usuario">
                HOME
             </Link> 
        </div>
    </div>
    <div className="body">
        <div className="faixa">
        <div className="org">
        <h1 className="text">Coloque uma foto do seu produto</h1>
        <button className="btn-f1" type="submit">TROCAR FOTO</button>
        <p className="text">Atenção essa foto será publica </p>
        <h3 className="text">Telefone para contato :</h3>
        <input className="te" type="text" value={contato} onChange={e => setcontato(e.target.value)}/>
        </div>
        <div className="quad">
          TROQUE A FOTO
        </div>
        </div>
        <div className="faixa-2">
            <div>   
                <h3>Digite o nome do produto:</h3>
                <input className="te-2" type="text" value={nome} onChange={e => setnome(e.target.value)}/>
                <h3>Digite o valor do produto:</h3>
                <input className="te-2" type="text"  value={valor} onChange={e => setvalor(e.target.value)}/>
                <h3>Qual o tipo do seu Produto</h3>
                <input className="te-2" type="text"  value={tipo} onChange={e => settipo(e.target.value)}/>
            </div>
            <div className="org-2">
                <h3>Coloque a descrição do produto:</h3>
                <textarea className="te-3" type="text" value={descricao} onChange={e => setdescricao(e.target.value)}/>
                <div>
                </div>
                <button className="btn-f1" onClick={salvarclick}>PRONTO</button>
            </div>
        </div>
    </div>

</div>  
    )
}