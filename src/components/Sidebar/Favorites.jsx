//icons
import { FaRegHeart } from 'react-icons/fa';
import { AddSquereTrolleyIcon, PlannerIcon } from '../Icons';

function Favorites() {
    return (
        <div className='sidebar__favorites'>
            <button className='btn--heart'>
                <FaRegHeart className='icon--favorites' />
                <span>Lagre</span>
            </button>
            <button className='btn--shopping'>
                <AddSquereTrolleyIcon className='icon--favorites' />
                <span>Legg i handlelisten</span>
            </button>
            <button className='btn--plan'>
                <PlannerIcon className='icon--favorites' />
                <span>Legg i ukeplanen</span>
            </button>
        </div>

    )
}

export default Favorites