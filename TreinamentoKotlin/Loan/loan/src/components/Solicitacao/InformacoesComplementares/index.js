import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../../../UserContext';


export default function InformacoesComplementares(props){
    const valorEmprestimo = props.location.state
    
    const [informationCustomer, setInformationCustomer] = useState({
        valor: valorEmprestimo,
        nomeCompleto: "",
        email: "",
        cpf: "",
        dataDeNascimento: "",
        rendaMensal: 0,
        telefone: "",
        atividadeProfissional: "",
        objetivoEmprestimo: "",
        
    })


    return(
        <UserContext.Provider value={informationCustomer}>
            <main className="register-container">
                <div className="content">
                    <section>
                        <h1>Conte um pouco sobre você</h1>
                        <p>Essas informações vão acelerar a liberação do valor na sua conta.</p>

                    </section>
                    <form>
                        <div>
                            <label for="customerValor">De quanto você precisa?</label>
                            <input 
                                id="customerValor"
                                placeholder="R$ 50.000"
                                value={informationCustomer.valor}
                                onChange={e => setInformationCustomer({...informationCustomer, valor: e.target.value})}
                            />
                        </div>
                        <div>
                            <label for="customerNomeCompleto">Qual seu Nome Completo?</label>

                            <input 
                                id="customerNomeCompleto"
                                placeholder="Eduardo Gomes Silva"
                                value={informationCustomer.nomeCompleto}
                                onChange={e => setInformationCustomer({...informationCustomer, nomeCompleto: e.target.value})}
                            />
                        </div>
    
                        <div>
                            <label for="customerEmail">Qual seu Email?</label>
                                <input 
                                    id="customerEmail"
                                    placeholder="eduardo_gomes@gmail.com"
                                    type="email" 
                                    value={informationCustomer.email}
                                    onChange={e => setInformationCustomer({...informationCustomer, email: e.target.value})}
                                />
                        </div>

                        <div>
                            <label for="customerCpf">Qual seu CPF?</label>
                                <input 
                                    id="customerCpf"
                                    placeholder="554.345.388-50"
                                    value={informationCustomer.cpf}
                                    onChange={e => setInformationCustomer({...informationCustomer, cpf: e.target.value})}
                                />
                        </div>

                        <div>
                            <label for="customerDataDeNascimento">Quando você nasceu?</label>

                                <input 
                                    id="customerDataDeNascimento"
                                    placeholder="25/10/1962"
                                    value={informationCustomer.dataDeNascimento}
                                    onChange={e => setInformationCustomer({...informationCustomer, dataDeNascimento: e.target.value})}
                                />
                        </div>

                        <div>
                            <label for="customerRendaMensalq">Qual é a renda mensal da sua familia?</label>                  
                                <input 
                                    id="customerRendaMensal"
                                    placeholder="R$ 7000"
                                    value={informationCustomer.rendaMensal}
                                    onChange={e => setInformationCustomer({...informationCustomer, rendaMensal: e.target.value})} 
                                />
                        </div>  

                        <div>
                            <label for="atividadeProfissional">Qual seu tipo de atividade Profissional?</label>                  
                                <input 
                                    id="atividadeProfissional"
                                    placeholder="Programador"
                                    value={informationCustomer.atividadeProfissional}
                                    onChange={e => setInformationCustomer({...informationCustomer, atividadeProfissional: e.target.value})} 
                                />
                        </div>  


                        <div>
                            <label for="motivoEmprestimo">Como esse emprestimo vai ajudar você?</label>                  
                                <input 
                                    id="motivoEmprestimo"
                                    placeholder="Divida"
                                    value={informationCustomer.objetivoEmprestimo}
                                    onChange={e => setInformationCustomer({...informationCustomer, objetivoEmprestimo: e.target.value})} 
                                />
                        </div>  

                        <div>
                            <label for="customerTelefone">Qual seu contato de Celular?</label>                  
                                <input 
                                    id="customerTelefone"
                                    placeholder="(13)991281829"
                                    value={informationCustomer.telefone}
                                    onChange={e => setInformationCustomer({...informationCustomer, telefone: e.target.value})} 
                                />
                        </div>  

                            <Link className="button" to={{     
                                pathname: "/emprestimo/solicitacao/informacoes-imovel",
                                state: informationCustomer
                            }}>
                            Continuar   
                        </Link>
                    </form>
                </div>
            </main>
    </UserContext.Provider>

    );
}