import recipeS from '../img/mainimg/omelett_med_kalkun_og_salsa_s.jpg';
import recipeM from '../img/mainimg/omelett_med_kalkun_og_salsa_m.jpg';
import recipeL from '../img/mainimg/omelett_med_kalkun_og_salsa_l.jpg';
import recipeXL from '../img/mainimg/omelett_med_kalkun_og_salsa_xl.jpg';


function Recipeimg() {
  return (
    <div className='recipe-img'>
      <picture>
        <source media="(max-width: 480px)" src={recipeS} alt="omelett med kalkun og salsam" />
        <source media="(max-width: 960px)" srcset={recipeM} alt="omelett med kalkun og salsam"/>
        <source media="(max-width: 961px)" srcset={recipeL} alt="omelett med kalkun og salsam"/>
        <img srcset={recipeXL} alt="omelett med kalkun og salsam"/>
      </picture>
    </div>
  )
}

export default Recipeimg