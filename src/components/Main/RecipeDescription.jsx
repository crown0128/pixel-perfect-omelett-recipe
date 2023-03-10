import { BsInfo } from 'react-icons/bs';

function RecipeDescription() {
    return (
        <div className='maincontent__list'>
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
                            Visp sammen egg, vann og salt.Finhakk alle ingrediensene til salsaen og bland sammen.
                        </span>
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

            <div className='maincontent__info'>
                <BsInfo className='icon--info' />
                <p>Denne retten kan gjerne serveres med grovt brød. Dette vil øke kalori- og næringsinnholdet.</p>
            </div>
        </div>


    )
}

export default RecipeDescription