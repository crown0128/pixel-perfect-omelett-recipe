import Favorites from './Sidebar/Favorites';
import Ingredients from './Sidebar/Ingredients';
import Recommended from './Sidebar/Recommended';


function Sidebar() {
  return (
    <div>
        <Favorites />
        <Ingredients />
        <Recommended />
    </div>
  )
}

export default Sidebar