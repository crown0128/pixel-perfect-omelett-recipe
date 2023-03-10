// icons plus and minus
import plus from '../../img/plus.svg';
import minus from '../../img/minus.svg';
// import iconInfo from '../../img/icon-info.svg';

import { EmailIcon, LinkIcon, SmsIcon } from '../Icons';


function Ingredients() {
    return (
        <div className='sidebar__ingredients'>

            <div className='sidebar__ingredients__portions counter'>
                <h2 className='counter__text'>
                    INGREDIENSER
                </h2>
                <div className='counter__input'>
                    <img className='icon--portions' src={minus} />
                    <input type="text" value={1} />
                    <img className='icon--portions' src={plus} />
                </div>
                <h2 className='counter__text'>
                    PORSJONER
                </h2>
            </div>

            <div className='sidebar__ingredients__list'>
                <ul>
                    <li>2 stk. egg</li>
                    <li>2 ss vann</li>
                    <li>1 ss flytende margarin</li>
                    <li>4 skiver naturell kalkunpålegg</li>
                    <li>20 g revet hvitost</li>
                </ul>
                <h3>Salsa:</h3>
                <ul>
                    <li>1 stk. vårløk</li>
                    <li>5 stk. cherrytomat</li>
                    <li>0,25 stk. oransje paprika</li>
                    <li>0,5 stk. jalapeño</li>
                    <li>2 ss finhakket frisk koriander</li>
                </ul>
            </div>
            <div className='sidebar__ingredients__values'>
                <div className='sidebar__ingredients__values__title'>
                    <h2>NÆRINGSINNHOLD</h2>
                    <div className='icon--infos'></div>
                </div>
                <div className='sidebar__ingredients__values__container'>
                    <div className='values__text'>
                        <p className='values__text__bold'>374 kcal</p>
                        <p>ENERGI</p>
                    </div>
                    <div className='values__text'>
                        <p className='values__text__bold'>25.5 g</p>
                        <p>FETT</p>
                    </div>
                    <div className='values__text'>
                        <p className='values__text__bold'>30 g</p>
                        <p>PROTEIN</p>
                    </div>
                    <div className='values__text'>
                        <p className='values__text__bold'>4.8 g</p>
                        <p>KARBOHYDRATER</p>
                    </div>
                    <div className='values__text'>
                        <p className='values__text__bold'>3.1 mg</p>
                        <p>JERN</p>
                    </div>
                </div>
            </div>
            <div className='sidebar__ingredients__share'>
                <h2>DEL</h2>
                <div className='sidebar__ingredients__share__links'>
                    <button >
                        <LinkIcon className='icon--share' />
                        <p>Kopier lenke </p>
                    </button>
                    <button >
                        <EmailIcon className='icon--share' />
                        <p>Send e-post</p>
                    </button>
                    <button >
                        <SmsIcon className='icon--share' />
                        <p>Send SMS</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Ingredients