import { ImStarEmpty } from 'react-icons/im';

function Rating() {
    return (
        <div className='maincontent__rating'>
            <h2>VURDER OPPSKRIFTEN</h2>
            <div className='maincontent__rating__stars'>
                <span className='stars'>
                    <ImStarEmpty className='icon--star--big' />
                    <ImStarEmpty className='icon--star--big' />
                    <ImStarEmpty className='icon--star--big' />
                    <ImStarEmpty className='icon--star--big' />
                    <ImStarEmpty className='icon--star--big' />
                </span>
            </div>
        </div>
    )
}

export default Rating