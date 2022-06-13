import storage from 'local-storage'
import { Link , useNavigate} from "react-router-dom"
import './index.scss'
import  { useEffect, useState } from 'react';


export default function index (){
    document.title = 'Menu do usuario'
    const [usuario,setusuario]= useState('')

    const navigate = useNavigate()
    useEffect(()=>{
        if(!storage('usuario-logado')){
            navigate('/')
        }else{
            const usuarioLogado = storage('usuario-logado')
            
            setusuario(usuarioLogado.nome)
        }
    },[])



    function sairclick (){
        storage.remove('usuario-logado')
        navigate('/')
    }


    return(
        <div className="mae-usuario">
        <div className="cabeçalho">
            <div className="cbl_org">
            <img  src="../../assets/image/foto-usuario.svg" className="img" alt=""/>
            <div className="tl-1">
                {usuario}
                <div className="linha"></div>
            </div>
            </div>
            <div className="btns">
              <Link  className="btn1" style={{textDecoration: 'none'}} to="/publicar">
                PUBLICAR PRODUTO
              </Link> 
              <Link  className="btn2" style={{textDecoration: 'none'}} to="/">
                INICIO
            </Link>
            <Link style={{textDecoration: 'none'}} className="btn2" to="/" onClick={sairclick}>
               <p className="text"> SAIR </p>
            </Link> 
            </div>
    </div>
    <div className="body">
        <div className="tl">
           MEUS PRODUTOS
            <div className="linha"></div>
        </div>
        <div className="faixa-1">
            <div className="anuncio">
                <img className="imag" src="../../assets/image/console-exe1.png" alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço: <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration: 'none'}} to="/publicar">Nintendo Switch </Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-2">
                <img className="imag" src="../../assets/image/console-exe1.png" alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço: <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration: 'none'}} to="/publicar">Nintendo Switch </Link> 
                </div>
                </div>
            </div>
            <div className="anuncio-5">
                <img className="imag" src="../../assets/image/console-exe1.png" alt=""/>
                <div className="ali">
                <div className="quad">
                    <p> Preço: <br/>
                        2.374,90</p>
                </div>
                <div className="quad-2">
                    <Link className="a1" style={{textDecoration: 'none'}} to="/publicar">Nintendo Switch </Link> 
                </div>
                </div>
            </div>
        </div>
            <div className="faixa-2">
                <div className="anuncio-2">
                    <img className="imag" src="../../assets/image/celular-exe.svg" alt=""/>
                    <div className="ali">
                    <div className="quad">
                        <p> Preço: <br/>
                            2.374,90</p>
                    </div>
                    <div className="quad-2">
                        <Link className="a1" style={{textDecoration: 'none'}} to="/publicar">Nintendo Switch </Link> 
                    </div>
                    </div>
                </div>
                <div className="anuncio-2">
                    <img className="imag" src="../../assets/image/celular-exe.svg" alt=""/>
                    <div className="ali">
                    <div className="quad">
                        <p> Preço: <br/>
                            2.374,90</p>
                    </div>
                    <div className="quad-2">
                        <Link className="a1" style={{textDecoration: 'none'}} to="/publicar">Nintendo Switch </Link> 
                    </div>
                    </div>
                </div>
                <div className="anuncio-5">
                    <img className="imag" src="../../assets/image/celular-exe.svg" alt="" />
                    <div className="ali">
                    <div className="quad">
                        <p> Preço: <br/>
                            2.374,90</p>
                    </div>
                    <div className="quad-2">
                        <Link className="a1" style={{textDecoration: 'none'}} to="/publicar">Nintendo Switch </Link> 
                    </div>
                    </div>
                </div>
                </div>
    </div>
    </div>
    );
}