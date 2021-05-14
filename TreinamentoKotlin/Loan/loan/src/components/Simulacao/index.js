import { useState, useEffect } from 'react';
import Header from '../Header'
import * as api from '../../service/endpoints';


function Simulacao(props) {
    const document = props.location.state

    useEffect(() => {
        handleSimulacao()

    })


    async function handleSimulacao(){

        try{
            const response = await api.getById(document)
            console.log(response)


        }catch(err){
            alert('Erro no cadastro, tente novamente');
            console.log(err)
        }
        
    }


    return (
        <>
        <Header/>
            <main>
                <section className="garantias">
                    <h1>Use sua casa ou apartamento para ter as <b>menores taxas de juros</b></h1>
                    <h2>Só com a Creditas você tem juros a partir de 0,85% ao mês + IPCA, até 240 meses para pagar e uma consultoria financeira personalizada.</h2>            
                </section>
            </main>
        </>

    );
  }
  
  export default Simulacao;
  