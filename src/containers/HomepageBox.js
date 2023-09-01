import NavBar from "../components/navbar/NavBar";
import SplashPage from "../components/splashpage/SplashPage";
import ContentBar from "../components/contentBar/ContentBar";
import "./HomepageBox.css"
import Menu from "../components/menu/Menu";

const HomepageBox = () => {
    return (  
        <>
            <NavBar/>
            <SplashPage/>
            <h2 class = "home-hook">Have a look at what we have to offer!</h2>
            <ContentBar/>
            <Menu/>
        </>
    );
}
 
export default HomepageBox;