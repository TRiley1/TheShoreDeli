import './SplashPage.css'
import StarIcon from './icons/StarIcon';
import HalfStarIcon from './icons/HalfStarIcon';
import Sandwich from './icons/Sandwich';
import Drink from './icons/Drink';
import Coffee from './icons/Coffee';


const SplashPage = () => {
    return ( 
    
            <div class = "homepage-container">
                <div class = "homepage-title">
                    <h2>The Shore Deli</h2>
                    <hr></hr>
                    <div class = "homepage-rating">
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <HalfStarIcon/>
                    </div>
                    <div class = "homepage-food">
                        <Sandwich fill = {"#dab8ac"} height = {"80px"} width = {"80px"}/>
                        <Drink fill = {"#dab8ac"} height = {"80px"} width = {"80px"}/>
                        <Coffee fill = {"#dab8ac"} height = {"80px"} width = {"80px"}/>
                    </div>
                    <h2>52 Shore, Edinburgh</h2>
                </div>
            </div>
       
     );
}
 
export default SplashPage;