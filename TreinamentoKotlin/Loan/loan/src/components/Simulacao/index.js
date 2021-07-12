import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header'
import {Link} from 'react-router-dom';
import * as api from '../../service/endpoints';


function Simulacao(props) {
    const [valorPagar, setValorPagar] = useState([])
    const location = useLocation();
    const document = location.state.document

    useEffect(() => {
        handleSimulacao()
    },[document])

    const handleSimulacao = async () => {
        try{
            const response = await api.getById(document);
            const body = await response.json();
            setValorPagar(body.valorfinal)
            console.log("Data", body.valorfinal)
            console.log(valorPagar)

        }catch(ex){
            console.error(ex)
        }
    }

   const convertBrazilianCurrent = Object.keys(valorPagar).map((keyName, i) => (
       <div> 
           <p style={{fontSize:"16px"}}>{keyName} meses: {valorPagar[keyName].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        </div>)
    )
            
    

    return (
        <>
        <Header/>
            <main>
                <section className="garantias">
                    <h1>Use sua casa ou apartamento para ter as <b>menores taxas de juros</b></h1>
                    <h2>Só com a Creditas você tem juros a partir de 0,85% ao mês + IPCA, até 240 meses para pagar e uma consultoria financeira personalizada.</h2>     
                    <h3>Valor a Pagar: </h3>  
                    {convertBrazilianCurrent}
                    <Link className="button" 
                        to={{     
                            pathname: "/emprestimo",
                        }}>
                        Continuar   
                    </Link>
                </section>
            </main>
        </>


    );
  }
  
  export default Simulacao;
  