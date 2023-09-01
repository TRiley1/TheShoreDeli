import "./NavBar.css"
import FacebookIcon from "./icons/FacebookIcon";
import TripAdvisor from "./icons/TripAdvisor";
import TwitterIcon from "./icons/TwitterIcon";

const NavBar = () => {
    return ( 
        <div class = "NavBar">
            {/* <img src="/images/logo2.png" class = "NavBar-logo" alt="" /> */}
            <h1 class = "NavBar-logo">The Shore Deli</h1>
            <div class = "NavBar-options">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            </div>

            <div class = "NavBar-socials">
                <div><TwitterIcon/></div>
                <div><TwitterIcon/></div>
                <div><TwitterIcon/></div>
            </div>
        </div>
     );
}
 
export default NavBar;