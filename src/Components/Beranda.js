import  React  from "react";
import Karya from "./karya";
import Kontak from "./kontak";
import TentangSaya from "./tentangsaya";

class Beranda extends React.Component{
    render(){
        return(
        <div>
        <TentangSaya/>
        <Karya/>
        <Kontak/>
        </div>
        )
    }
}

export default Beranda;