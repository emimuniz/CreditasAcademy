import React, { useState, useContext, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import * as api from '../../../service/endpoints';


export default function InformacoesImovel(props){
    const [informationCustomerImovel, setInformationCustomerImovel] = useState({
        cepImovel: "",
        complementoImovelnumeroImovel: 0,
        complementoImovel: "",
        tipoImovel: "",
        valorEstimadoImovel: 0,
        imovelQuitado: false,
        contemMatriculaImovel: false,
    })

    
    const informationCustomer = props.location.state
    const cpf = informationCustomer.cpf
    const document = cpf.replace(/\.|\-/g, '')
    let history = useHistory();
    
    
    async function handleRegister(e){
        e.preventDefault()

        const data = {...informationCustomerImovel, ...informationCustomer, document: document};
        console.log(data)   

        try{
            const response = await api.create(data)

        }catch(err){
            alert('Erro no cadastro, tente novamente');
            console.log(err)
        }

        history.push({
            pathname: "/emprestimo/solicitacao/simulacao",
            state: { document: document }
        })
            
    }


    return(
        <main className="register-container">
            <div className="content">
                <section>
                    <h1>Conte um pouco sobre você</h1>
                    <p>Essas informações vão acelerar a liberação do valor na sua conta.</p>

                </section>
                <form>
                    <div>
                        <label for="cepImovel">Qual o cep do seu imovel?</label>
                        <input 
                            id="cepImovel"
                            placeholder="11460-280"
                            value={informationCustomerImovel.cepImovel}
                            onChange={e => setInformationCustomerImovel({...informationCustomerImovel, cepImovel: e.target.value})}
                        />
                    </div>
                    <div>
                        <label for="numeroImovel">Qual é o numero do Imovel?</label>

                        <input 
                            id="numeroImovel"
                            placeholder="10"
                            value={informationCustomerImovel.numeroImovel}
                            onChange={e => setInformationCustomerImovel({...informationCustomerImovel, numeroImovel: e.target.value})}
                        />
                    </div>
 
                    <div>
                        <label for="complementoImovel">Complemento (Opcional)</label>
                            <input 
                                id="complementoImovel"
                                placeholder="Sobrado"
                                value={informationCustomerImovel.complementoImovel}
                                onChange={e => setInformationCustomerImovel({...informationCustomerImovel, complementoImovel: e.target.value})}
                            />
                    </div>

                    <div>
                        <label for="tipoImovel">Qual é o tipo do Imovel?</label>
                            <input 
                                id="tipoImovel"
                                placeholder="Apartamento"
                                value={informationCustomerImovel.tipoImovel}
                                onChange={e => setInformationCustomerImovel({...informationCustomerImovel, tipoImovel: e.target.value})}

                            />
                    </div>

                    <div>
                        <label for="valorEstimadoImovel">Qual é o valor estimado do Imovel?</label>

                            <input 
                                id="valorEstimadoImovel"
                                placeholder="R$ 300.000"
                                value={informationCustomerImovel.valorEstimadoImovel}
                                onChange={e => setInformationCustomerImovel({...informationCustomerImovel, valorEstimadoImovel: e.target.value})}

                            />
                    </div>

                    <div>
                        <label for="imovelQuitado">O Imovel esta quitado?</label>                  
                            <input 
                                id="imovelQuitado"
                                placeholder="SIM"
                                value={informationCustomerImovel.imovelQuitado}
                                onChange={e => setInformationCustomerImovel({...informationCustomerImovel, imovelQuitado: e.target.value})}

                            />
                    </div>  

                    <div>
                        <label for="matriculaImovel">Você tem matricula do Imovel?</label>                  
                            <input 
                                id="matriculaImovel"
                                placeholder="NÃO"
                                value={informationCustomerImovel.contemMatriculaImovel}
                                onChange={e => setInformationCustomerImovel({...informationCustomerImovel, contemMatriculaImovel: e.target.value})}

                            />
                    </div>  

                    
                    <button onClick={handleRegister} className="button" type="submit">Simulação</button>
                </form>
            </div>
        </main>
    );
}