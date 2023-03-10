import nøkkelhullet from '../../img/nøkkelhullet.jpg';
import { BulbIcon } from '../Icons';

export default function Advice() {
    return (
        <a href="#" className='section-link'>

            <div className='maincontent__advice'>
                <BulbIcon className='icon--bulb' />
                <img src={nøkkelhullet} alt="Se etter Nøkkelhullet" />
                <div className='maincontent__advice__text'>
                    <h2>Se etter Nøkkelhullet</h2>
                    <p>Det finnes etter hvert mange ulike matmerker og mye informasjon på matvarer. Nøkkelhullet er en merkeord... </p>
                </div>
            </div>
        </a>
    )
}
