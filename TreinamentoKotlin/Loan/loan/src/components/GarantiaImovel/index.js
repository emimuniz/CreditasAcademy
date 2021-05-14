import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header'

function Home() {
    const [valor, setValor] = useState(0)
    return (
        <>
        <Header/>
            <main>
                <section className="garantias">
                    <h1>Use sua casa ou apartamento para ter as <b>menores taxas de juros</b></h1>
                    <h2>Só com a Creditas você tem juros a partir de 0,85% ao mês + IPCA, até 240 meses para pagar e uma consultoria financeira personalizada.</h2>            
                </section>
                <div>
                    <div className="container-plano">
                        <div className="garantia-imovel">
                                    <h3>Eu preciso de</h3>
                                <div>
                                    <input 
                                        placeholder="Valor"
                                        value={valor}
                                        onChange={e => setValor(e.target.value)}
                                    />
                                </div>                         
                                <Link  className="button" to={{     
                                    pathname: "/emprestimo/solicitacao/informacoes-complementares",
                                    state: valor
                                }}>
                                    <p>Simule agora</p>
                                </Link>
                                
                        </div>
                    </div>
                </div>
            </main>
        </>

    );
  }
  
  export default Home;
  