import React from 'react';
import fpsImage1 from '../assets/img1.png';
import fpsImage2 from '../assets/img2.png';
import fpsImage3 from '../assets/img3.png';
import fpsImage4 from '../assets/img4.png';
import fpsImage5 from '../assets/img5.png';
import fpsImage6 from '../assets/img6.png';

  
const Home = () => {
  return (
    <div>
      <ul>
      <li className="fps1">
        <a href="https://store.steampowered.com/category/action_fps/" target="_blank" rel="noopener noreferrer">First-person shooter</a>
        <br />
          <img src={fpsImage1} alt="First-person shooter" />
          </li>
        <li className="rts">
          <a href="https://store.steampowered.com/tags/en/RTS/" target="_blank" rel="noopener noreferrer">Real time strategy</a>
          <br />
          <img src={fpsImage2} alt="Real time strategy"/>
        </li>
        <li className="rpg">
        <a href="https://store.steampowered.com/category/rpg" target="_blank" rel="noopener noreferrer">Role-playing</a>
        <br />
          <img src={fpsImage3} alt="Real time strategy"/>
        </li>
        <li className="tbs">
        <a href="https://store.steampowered.com/category/strategy_turn_based/" target="_blank" rel="noopener noreferrer">Turned-based strategy</a>
        <br />
          <img src={fpsImage4} alt="Turn-based strategy"/>
        </li>
        <li className="sim">
        <a href="https://store.steampowered.com/tags/en/Simulation/" target="_blank" rel="noopener noreferrer">Simulations</a>
        <br />
          <img src={fpsImage5} alt="Simulations"/>
        </li>
        <li className="casual">
        <a href="https://store.steampowered.com/tags/en/Casual/" target="_blank" rel="noopener noreferrer">Casual</a>
        <br />
          <img src={fpsImage6} alt="Casual"/>
        </li>
      </ul>  
    </div>
  );
};
  
export default Home;