import { FaRegClock } from 'react-icons/fa';
import { FaSuperpowers } from 'react-icons/fa';
import commentCloudIcon from '../../img/comment-cloud-icon.svg';
import Stars from '../Stars';


function RecipeHeader() {
    return (
        <div className='header'>
            <div className='header__btns'>
                <button>Middagsrett</button>
                <button>Egg/eggeretter</button>
            </div>

            <div className='header__title'>
                <h1>OMELETT MED KALKUN OG SALSA</h1>
                <div className='header__title__stars'>
                    <div>
                        <Stars />
                        <span>(3)</span>
                    </div>
                    <div>
                        <img src={commentCloudIcon} alt="comment-cloud-icon" />
                        <span>(0)</span>
                    </div>
                </div>
            </div>

            <div className='header__description'>
                <p>Omelett er super mat når du er på farten, og bare skal spise noe raskt. Godt trente omelettkokker trenger ikke særlig mer enn ett minutt fra røren helles i panna til omeletten er serveringsklar.</p>
            </div>


            <div className='header__time'>
                <span>
                    <FaRegClock />
                    <p>Under 20 min</p>
                </span>
                <span>
                    <FaSuperpowers />
                    <p>Enkel</p>
                </span>
            </div>

        </div>
    )
}

export default RecipeHeader