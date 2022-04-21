import { Link } from "react-router-dom";
import { ReactComponent as YourSvg } from '../../assets/logo-light.svg';
import './Menu.css';
function Menu() {
  return (
    <>        
    {/*--==================== HEADER ====================--> */}
      <div className="nav">
        <div className="left">
        <Link to="/home"><YourSvg/></Link>
        </div>
        <div claclassNamess="middle">
           <Link to="/home" className="item">Home</Link>
           <Link to="/markets" className="item">Markets</Link>
           <Link to="/capitalization" className="item">Capitalization</Link>
           <Link to="/about" className="item">About</Link>
        </div>
        <div className="right">
          <button class="material-symbols-outlined notification" >notifications</button> 
          <button class="material-symbols-outlined hamburger">menu</button>
        </div>
      </div>
      
    </>
  )
}

export default Menu