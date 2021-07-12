import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./components/Home"
import GarantiaImovel from "./components/GarantiaImovel";
import GarantiaVeiculo from "./components/GarantiaVeiculo";
import InformacoesComplementares from './components/Solicitacao/InformacoesComplementares'
import InformacoesImovel from './components/Solicitacao/InformacoesImovel'
import Simulacao from './components/Simulacao'
import Login from './components/Login'
import Documentos from './components/Documentos'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/emprestimo/garantia-imovel" component={GarantiaImovel}/>
                <Route path="/emprestimo/garantia-veiculo" component={GarantiaVeiculo}/>
                <Route path="/emprestimo/solicitacao/informacoes-complementares"  component={InformacoesComplementares}/>
                <Route path="/emprestimo/solicitacao/informacoes-imovel" component={InformacoesImovel}/>
                <Route path="/emprestimo/solicitacao/simulacao" component={Simulacao}/>
                <Route path="/emprestimo" component={Login}/>
                <Route path="/emprestimo/documentos" component={Documentos}/>

            </Switch>
        </BrowserRouter>
    );
}