import './App.css';
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'
function App(){
  return (
   <div id='maindiv'>
    <Header/>
    <SideBar/>
    <Body/>
    <Footer/>
   </div>
  )
}
export default App;
