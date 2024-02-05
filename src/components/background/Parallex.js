import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navigation from "../Navigation/Navigation";
import './Parallex.css'
import Aboutus from "../Aboutus/Aboutus";
function Parallex(){
  
    return (
      <>
       
      <div className="App">
        
        
        <Parallax pages={3} style={{ top: '0', left: '0' }} className="animation">
        
          <ParallaxLayer offset={0} speed={0.0}>
            <div className="animation_layer parallax" id="bg1"></div>
          </ParallaxLayer>
          
          
          
          
          
           
          
          
          
          <ParallaxLayer offset={0} speed={0.3}>
            <div className="nav"><Navigation /></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.1}>
            <div className="animation_layer parallax" id="bg3"></div>
          </ParallaxLayer>
          
          <ParallaxLayer offset={0}  speed={1.0}>
            <div className="animation_layer parallax" id="moon"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1}  speed={1.0}>
            <div className="about">
              <Aboutus />
            </div>
          </ParallaxLayer>
          
          
          
        </Parallax>
        
      </div>
      </>
    );
}
export default Parallex;