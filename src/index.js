import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./index.css";
import Home from "./pages/Home";
import CadastroVideo from "./pages/Cadastro/Video"
import CadastroCategoria from "./pages/Cadastro/Categoria";


const Pagina404 = () => (<div>Página 404</div>)


ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>

  </BrowserRouter>,


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  document.getElementById("root")
);
