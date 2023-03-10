//icons
import mobile from '../../img/mobile.jpg';
import { FaRegClock } from 'react-icons/fa';
import { FaSuperpowers } from 'react-icons/fa';
import Stars from '../Stars';
import { LeafIcon, ChefIcon } from '../Icons';

function Recommended() {
  return (
    <div className='sidebar__recommended'>
      <a href="#" className='section-link'>
        <div className='recommended__header'>
          <LeafIcon className='icon--leaf' />
          <h2>BRUK OPP RESTENE!</h2>
          <p>Har du noe til overs fra du lagde denne retten? Prøv denne oppskriften!</p>
        </div>

        <div className='recommended__article article--reco'>
          <div className='article__img--reco'>
            <img src={mobile} alt="Fajitas med biffstrimler" />
          </div>

          <div className='article__description'>
            <div className='stars'>
              <Stars />
            </div>
            <h3 className='recipe-title'>
              <a href="/Fajitas">Fajitas med biffstrimler
              </a>
            </h3>
            <div className='level--reco'>
              <span className='level--cook'>
                <ChefIcon className='icon--cook'/>
                <p>Enkel</p>
              </span>
              <span className='level--time'>
                <FaRegClock />
                <p>20-40 min</p>
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Recommended