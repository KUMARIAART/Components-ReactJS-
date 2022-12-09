import React from "react"
import './App.css';
import { TbBuildingPavilon } from "react-icons/tb";
function Body(){
    return (
        <div id="body">
            <div id="heading">
                <p>Name <span>*</span><br/>Business Development Executive</p>
                <hr id="hr1"/>
            </div>
            <div>
                <h2><TbBuildingPavilon/>    Interview Process Rounds</h2>
                <table>
                    <tr>
                        <td>
                        <p>Level<span>*</span><br/>1</p> 
                        <hr id="hr2"/> 
                        </td>
                        <td>
                        <p>Name <span>*</span><br/>Telephonic Round</p> 
                        <hr id="hr3"/> 
                        </td>
                        <td>
                        <p>Select Interviewer <span>*</span><br/>AARTI KUMARI</p> 
                        <hr id="hr4"/> 
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <p>Level <span>*</span><br/>2</p>
                        <hr id="hr5"/> 
                        </td>
                        <td>
                        <p>Name <span>*</span><br/>Telephonic Round</p> 
                        <hr id="hr6"/> 
                        </td>
                        <td>
                        <p>Select Interviewer <span>*</span><br/>SHEETAL MALVIYA</p> 
                        <hr id="hr7"/> 
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Body;