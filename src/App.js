import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './Views/Home.jsx';
import Nav from './components/Nav/Nav.jsx';
import  Footer from './components/Footer/Footer.jsx';
import Produtos from './Views/Produtos.jsx';
import Lojas from './Views/Lojas.jsx';
import Mensagem from './Views/Mensagem.jsx';
function App() {
  return (
    <>
    <Router>
      <Nav/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path= "/produtos" component={Produtos}  />
       <Route path= "/lojas" component={Lojas} />
       <Route path= "/mensagem" component={Mensagem} />
    </Switch>
     <Footer/>
  </Router>
   </>
  );
}

export default App;
