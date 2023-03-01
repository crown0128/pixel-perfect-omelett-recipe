import mobile from '../../img/mobile.jpg';
import leaf from '../../img/leaf.svg';
import { FaRegClock } from 'react-icons/fa';
import { FaSuperpowers } from 'react-icons/fa';
import Stars from '../Stars';


function Recommended() {
  return (
    <div className='sidebar'>
      <div className='sidebar__recommended__text'>
        <img className='icon__leaf' src={leaf} alt="leaf-icon" />
        <h2>BRUK OPP RESTENE!</h2>
        <p>Har du noe til overs fra du lagde denne retten? Prøv denne oppskriften!</p>
      </div>
      <div className='sidebar__recommended__img'>
        <img src={mobile} alt="Fajitas med biffstrimler" />
      </div>
      <div className='sidebar__recommended__stars'>
        <Stars />
      </div>
      <div className='sidebar__recommended__title'>
        <h2>Fajitas med biffstrimler</h2>
      </div>
      <div className='sidebar__recommended__time'>
        <div>
          <FaSuperpowers />
          <p>Enkel</p>
        </div>
        <div>
          <FaRegClock />
          <p>20-40 min</p>
        </div>
      </div>
    </div>
  )
}

export default Recommended