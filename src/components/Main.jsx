import bulb from '../img/bulb.svg';
import RecipeHeader from './Main/RecipeHeader';
import { BsInfo } from 'react-icons/bs';
import Stars from './Stars';
import nøkkelhullet from '../img/nøkkelhullet.jpg';


function Main() {
    return (
        <div className='main'>
            <RecipeHeader />
            <div className='main__list'>
                <h2>SLIK GJØR DU</h2>
                <ul>
                    <li>
                        <label htmlFor="">
                            <input type="checkbox" />
                            <span>
                                <strong>1. </strong>
                                Finhakk alle ingrediensene til salsaen og bland sammen.
                            </span>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="">
                            <input type="checkbox" />
                            <span>
                                <strong>2. </strong>
                                Visp sammen egg, vann og salt.Finhakk alle ingrediensene til salsaen og bland sammen.</span>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="">
                            <input type="checkbox" />
                            <span>
                                <strong>3. </strong>
                                Ha margarin i pannen og la det bli varmt. Hell i sammenvispede egg, og skyv eggene inn mot midten, slik at det som er flytende flyter ut til sidene.</span>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="">
                            <input type="checkbox" />
                            <span>
                                <strong>4. </strong>
                                Legg kalkunpålegg og ost på den ene halvparten når eggeblandingen er nesten stivnet. La omeletten steke noen sekunder før den andre halvparten brettes over. Hvelv den over på en tallerken. Omeletten er ferdig på ca. ett minutt</span>
                        </label>
                    </li>
                </ul>
                <p>Server omeletten med salsaen.</p>
            </div>
            <div className='main__info'>
                <BsInfo className='icon__info' />
                <p>Denne retten kan gjerne serveres med grovt brød. Dette vil øke kalori- og næringsinnholdet.</p>
            </div>
            <div>
                <iframe className='video'
                    src="https://www.youtube.com/embed/b7htm6pQARY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
            </div>
            <div className='main__tips'>
                <img className='icon__bulb' src={bulb} alt="bulb-icon" />
                <div className='main__tips__text'>
                    <img src={nøkkelhullet} alt="Se etter Nøkkelhullet" />
                    <div>
                        <h2>Se etter Nøkkelhullet</h2>
                        <p>Det finnes etter hvert mange ulike matmerker og mye informasjon på matvarer. Nøkkelhullet er en merkeord... </p>
                    </div>
                </div>
            </div>
            <div className='main__bigstars'>
                <h2>VURDER OPPSKRIFTEN</h2>
                <div className='main__bigstars__stars'>
                    <Stars />
                </div>
            </div>
        </div>
    )
}

export default Main