import image from '../../assets/background.webp'
import {Link, useHistory} from 'react-router-dom';
import Header from '../Header'

function Home() {
    return (
        <>
        <Header/>
            <main>
                <section className="garantias">
                    <h1>Empréstimo com a <b>menor taxa</b> do mercado</h1>
                    <h2>Use seu apartamento, casa, carro ou salário como garantia e tenha até 240 meses para pagar.</h2>            
                    <div className="container-plano">

                        <Link className="garantia" to="/emprestimo/garantia-veiculo">
                            <a href="">
                                <h3>Carro em garantia</h3>
                                <div>De R$ 5 mil a R$ 150 mil. Juros a partir de 0,99% ao mês.</div>
                                    <div>
                                        <p>Simule</p>
                                    </div>
                            </a>
                        </Link>
                        
                        <Link className="garantia" to="/emprestimo/garantia-imovel">
                            <a href="">
                                <h3>Imovel em garantia</h3>
                                <div>De R$ 30 mil a R$ 3 milhões. Juros a partir de 0,85% ao mês + IPCA.</div>
                                    <p>Simule</p>
                            </a>
                        </Link>
                    </div>
                </section>
                <div>
                    <img src={image} className="image" alt=""/>
                </div>
            </main>
        </>

    );
  }
  
  export default Home;
  