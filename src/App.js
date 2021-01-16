import React from "react";
import Utama from "./Components/utama";
import { Link } from "react-router-dom";


class App extends React.Component{
  render(){
    return(
      <div>
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase " id="mainNav">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item mx-0 mx-lg-1"><Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Beranda</Link> </li>
                <li class="nav-item mx-0 mx-lg-1"><Link to="/tentangsaya" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">TentangSaya</Link></li> 
                <li class="nav-item mx-0 mx-lg-1"><Link to="/karya" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Karya</Link> </li>
                <li class="nav-item mx-0 mx-lg-1"><Link to="/kontak" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Kontak</Link> </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      < Utama/>
      </div>
    );
  }
}

export default App;