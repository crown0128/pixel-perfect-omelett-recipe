//sidebar
import Favorites from './Sidebar/Favorites';
import Ingredients from './Sidebar/Ingredients';
import Recommended from './Sidebar/Recommended';

//main
import RecipeHeader from './Main/RecipeHeader';
import RecipeDescription from './Main/RecipeDescription';
import Video from './Main/Video';
import Advice from './Main/Advice';
import Rating from './Main/Rating';

function RecipeContent() {
  return (
    <main className='recipe__content grid grid--twocolumns'>

      <div className='recipe__content sidebar'>
        <Favorites />
        <Ingredients />
        <Recommended />
      </div>

      <div className='recipe__content maincontent'>
        <RecipeHeader />
        <RecipeDescription />
        <Video />
        <Advice />
        <Rating />
      </div>
    </main>
  )
}

export default RecipeContent