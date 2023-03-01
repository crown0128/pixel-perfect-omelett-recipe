import plus from '../../img/plus.svg';
import minus from '../../img/minus.svg';
import iconInfo from '../../img/icon-info.svg';

import link from '../../img/link.svg';
import email from '../../img/email.svg';
import sms from '../../img/sms.svg';


function Ingredients() {
    return (
        <div className='sidebar'>
            <div className='sidebar__ingredients__portions'>
                <h2>INGREDIENSER</h2>
                <div className='portions__counter'>
                    <img className='icon__portions' src={minus} alt="minus" />
                    <input type="text" value={1} />
                    <img className='icon__portions' src={plus} alt="plus" />
                </div>
                <h2>PORSJONER</h2>
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
                    <img src={iconInfo} alt="info-icon" />
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
                    <div>
                        <img className='icon__share' src={link} alt="link-icon" />
                        Kopier lenke
                    </div>
                    <div>
                        <img className='icon__share' src={email} alt="email-icon" />
                        Send e-post
                    </div>
                    <div>
                        <img className='icon__share' src={sms} alt="sms-icon" />
                        Send SMS
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ingredients