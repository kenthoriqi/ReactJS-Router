import React from "react";
import { Switch, Route } from "react-router-dom";

import Beranda from './Beranda';
import Karya from './karya';
import Kontak from './kontak';
import TentangSaya from './tentangsaya';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda}/>
        <Route path="/tentangsaya" component={TentangSaya}/>
        <Route path="/kontak" component={Kontak}/>
        <Route path="/karya" component={Karya}/>
    </Switch>
)

export default Utama;