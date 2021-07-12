import {Link} from 'react-router-dom';

const Login = () => {
    return(
        <>
        <section  className="container">
            <h1>Simulação aprovada</h1>
            <h2>Complete já o seu cadastro e receba mais rapido sua analise de credito totalmente personalizada</h2>
            <Link className="button" 
            to={{     
                    pathname: "/emprestimo/documentos",
            }}>Envie seus documentos para agilizar seu processo   
            </Link>
        </section>
      </>
    )
}

export default Login