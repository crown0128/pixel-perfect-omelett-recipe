import { FaRegHeart } from 'react-icons/fa';
import addSquareTrolley from '../../img/add-square-trolley.svg';
import plannerIcon from '../../img/planner-icon.svg';



function Favorites() {
    return (
        <div className='sidebar sidebar__favorites'>
            <button>
                <FaRegHeart className='icon__favorites'/>
                <span>Lagre</span>
            </button>
            <button>
                <img className='icon__favorites' src={addSquareTrolley} alt="add-square-trolley-icon" />
                <span>Legg i handlelisten</span>
            </button>
            <button>
                <img className='icon__favorites' src={plannerIcon} alt="planner-icon" />
                <span>Legg i ukeplanen</span>
            </button>
        </div>
    )
}



export default Favorites