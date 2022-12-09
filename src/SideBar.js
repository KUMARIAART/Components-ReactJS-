import React from "react"
import './App.css';
import {AiTwotoneHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BsPersonCheck} from "react-icons/bs";
import { IoMan } from "react-icons/io5";
import { FaCcAmazonPay,FaCogs} from "react-icons/fa";
import { BsBriefcaseFill ,BsFillCalendar2XFill} from "react-icons/bs";
import {TfiStatsUp } from "react-icons/tfi";
import { VscChevronLeft,VscChevronDown } from "react-icons/vsc";
function SideBar(){
    return (
        <div id="sidebar">
            <h4> <AiTwotoneHome/> Dashboard</h4>
            <h4> <AiOutlineUser/> Employee<VscChevronLeft/></h4>
            <h4> <BsPersonCheck/> Attendance<VscChevronLeft/></h4>
            <h4> <IoMan/> Site/Field Track<VscChevronLeft/></h4>
            <h4> <FaCcAmazonPay/> Payroll<VscChevronLeft/></h4>
            <h4> <BsBriefcaseFill/> Statuatory Compl<VscChevronLeft/></h4>
            <h4> <BsFillCalendar2XFill/> Leaves<VscChevronLeft/></h4>
            <h4> <FaCogs/> Assent Managment<VscChevronLeft/></h4>
            <h4> <TfiStatsUp/>Goals & Performance<VscChevronLeft/></h4>
            <h4> <AiOutlineUser/> Recruitment<VscChevronDown/></h4>
            <h5>Openings</h5>
            <h5>Candidates</h5>
            <h5>Interview Process</h5>
        </div>
    )
}
export default SideBar;