import React from "react"
import './App.css';
import { BsFillXCircleFill} from "react-icons/bs";
import { TfiUser } from "react-icons/tfi";
function Header(){
    return (
        <div id="header">
            <h3><TfiUser/>  INTERVIEW PROCESS  < BsFillXCircleFill id="crose"/></h3>
        </div>
    )
}
export default Header;