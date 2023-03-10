import RecipeImg from '../components/RecipeImg';
import RecipeContent from '../components/RecipeContent';
import Popular from '../components/Popular';

function Recipe() {
    return (
        <body>
            <section className='recipe'>
                <RecipeImg />
                <RecipeContent />
            </section>
            <Popular />
        </body>
    )
}

export default Recipe;