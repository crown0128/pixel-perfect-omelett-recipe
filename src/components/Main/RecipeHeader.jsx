import { FaRegClock } from 'react-icons/fa';
import Stars from '../Stars';
import { CommentIcon, ChefIcon, PrintIcon } from '../Icons';


function RecipeHeader() {
    return (
        <div className='maincontent__header'>
            <div className='maincontent__header__btns'>
                <button>Middagsrett</button>
                <button>Egg/eggeretter</button>
            </div>

            <div className='maincontent__header__title'>
                <h1>OMELETT MED KALKUN OG SALSA</h1>
                <div className='header__title__stars'>
                    <div>
                        <Stars />
                        <span>(3)</span>
                    </div>
                    <div>
                        <CommentIcon className='icon--comment' />
                        <span>(0)</span>
                    </div>
                    <div>
                        <PrintIcon className='icon--comment' />
                        <span>Skriv ut</span>
                    </div>
                </div>
            </div>

            <div className='maincontent__header__description'>
                <p>Omelett er super mat når du er på farten, og bare skal spise noe raskt. Godt trente omelettkokker trenger ikke særlig mer enn ett minutt fra røren helles i panna til omeletten er serveringsklar.</p>
            </div>

            <div className='maincontent__header__time'>
                <span>
                    <FaRegClock />
                    <p>Under 20 min</p>
                </span>
                <span>
                    <ChefIcon className='icon--cook' />
                    <p>Enkel</p>
                </span>
            </div>

        </div>
    )
}

export default RecipeHeader