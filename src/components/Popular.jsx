// popular dishes img
import pannekaker from '../img/popular/pannekaker.jpg';
import vafler from '../img/popular/vafler.jpg';
import pølsegrateng from '../img/popular/pølsegrateng.jpg';
import brownies from '../img/popular/brownies.jpg';
import chilliconcarne from '../img/popular/chilli_con_carne.jpg';
import focaccia from '../img/popular/focaccia.jpg';
import kanelboller from '../img/popular/kanelboller.jpg';
import fiskegrateng from '../img/popular/fiskegrateng.jpg';
import finnbiff from '../img/popular/finnbiff.jpg';
import potetmos from '../img/popular/potetmos.jpg';
import blomkalsuppe from '../img/popular/blomkalsuppe.jpg';
import lasagne from '../img/popular/lasagne.jpg';

//icons
import Stars from './Stars';
import { FaRegClock } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { ChefIcon } from './Icons';



function Popular() {
  return (
    <section className='popular'>
      <div className='popular__title'>
        <h2>POPULÆRT AKKURAT NÅ</h2>
      </div>

      <div className='popular__articles grid grid--fourcolumns'>

        <article className='popular__article article'>
          <div className='article__img'>
            <div className='icon--heart'>
              <FaHeart />
            </div>
            <img src={pannekaker} alt="Pannekaker" />

          </div>
          <div className='article__description'>
            <div className='stars'>
              <Stars />
            </div>
            <h3>
              <a href="/Pannekaker">Pannekaker
              </a>
            </h3>
            <div className='level'>
              <span className='level--cook'>
                <ChefIcon className='icon--cook' />
                <p>Middels</p>
              </span>
              <span className='level--time'>
                <FaRegClock />
                <p>40-60 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular__article article'>
          <div className='article__img'>
            <div className='icon--heart'>
              <FaHeart />
            </div>
            <img src={vafler} alt="Vafler" />
          </div>
          <div className='article__description'>
            <div className='stars'>
              <Stars />
            </div>
            <h3>
              <a href="/Vafler">Vafler
              </a>
            </h3>
            <div className='level'>
              <span className='level--cook'>
                <ChefIcon className='icon--cook' />
                <p>Enkel</p>
              </span>
              <span className='level--time'>
                <FaRegClock />
                <p>20-40 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular__article article'>
          <div className='article__img'>
            <div className='icon--heart'>
              <FaHeart />
            </div>
            <img src={pølsegrateng} alt="Pølsegrateng" />
          </div>
          <div className='article__description'>
            <div className='stars'>
              <Stars />
            </div>
            <h3>
              <a href="/Pølsegrateng">Pølsegrateng
              </a>
            </h3>
            <div className='level'>
              <span className='level--cook'>
                <ChefIcon className='icon--cook' />
                <p>Enkel</p>
              </span>
              <span className='level--time'>
                <FaRegClock />
                <p>40-60 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular__article article'>
          <div className='article__img'>
            <div className='icon--heart'>
              <FaHeart />
            </div>
            <img src={brownies} alt="Brownies" />
          </div>
          <div className='article__description'>
            <div className='stars'>
              <Stars />
            </div>
            <h3>
              <a href="/Brownies">Brownies
              </a>
            </h3>
            <div className='level'>
              <span className='level--cook'>
                <ChefIcon className='icon--cook' />
                <p>Middels</p>
              </span>
              <span className='level--time'>
                <FaRegClock />
                <p>20-40 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular__article article'>
          <div className='article__img'>
            <div className='icon--heart'>
              <FaHeart />
            </div>
            <img src={chilliconcarne} alt="Chili con carne" />
          </div>
          <div className='article__description'>
            <div className='stars'>
              <Stars />
            </div>
            <h3>
              <a href="/Chiliconcarne">Chili con carne
              </a>
            </h3>
            <div className='level'>
              <span className='level--cook'>
                <ChefIcon className='icon--cook' />
                <p>Enkel</p>
              </span>
              <span className='level--time'>
                <FaRegClock />
                <p>20-40 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular__article article'>
          <div className='article__img'>
            <div className='icon--heart'>
              <FaHeart />
            </div>
            <img src={focaccia} alt="Focaccia" />
          </div>
          <div className='article__description'>
            <div className='stars'>
              <Stars />
            </div>
            <h3>
              <a href="/Focaccia">Focaccia
              </a>
            </h3>
            <div className='level'>
              <span className='level--cook'>
                <ChefIcon className='icon--cook' />
                <p>Middels</p>
              </span>
              <span className='level--time'>
                <FaRegClock />
                <p>Over 60 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular__article article'>
          <div className='article__img'>
            <div className='icon--heart'>
              <FaHeart />
            </div>
            <img src={kanelboller} alt="Kanelknuter" />
          </div>
          <div className='article__description'>
            <div className='stars'>
              <Stars />
            </div>
            <h3>
              <a href="/Kanelknuter">Kanelknuter
              </a>
            </h3>
            <div className='level'>
              <span className='level--cook'>
                <ChefIcon className='icon--cook' />
                <p>Enkel</p>
              </span>
              <span className='level--time'>
                <FaRegClock />
                <p>Over 60 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular__article article'>
          <div className='article__img'>
            <div className='icon--heart'>
              <FaHeart />
            </div>
            <img src={fiskegrateng} alt="Fiskegrateng" />
          </div>
          <div className='article__description'>
            <div className='stars'>
              <Stars />
            </div>
            <h3>
              <a href="/Fiskegrateng">Fiskegrateng
              </a>
            </h3>
            <div className='level'>
              <span className='level--cook'>
                <ChefIcon className='icon--cook' />
                <p>Enkel</p>
              </span>
              <span className='level--time'>
                <FaRegClock />
                <p>20-40 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular__article article'>
          <div className='article__img'>
            <div className='icon--heart'>
              <FaHeart />
            </div>
            <img src={finnbiff} alt="finnbiff" />
          </div>
          <div className='article__description'>
            <div className='stars'>
              <Stars />
            </div>
            <h3>
              <a href="/Finnbiff">Finnbiff
              </a>
            </h3>
            <div className='level'>
              <span className='level--cook'>
                <ChefIcon className='icon--cook' />
                <p>Enkel</p>
              </span>
              <span className='level--time'>
                <FaRegClock />
                <p>20-40 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular__article article'>
          <div className='article__img'>
            <div className='icon--heart'>
              <FaHeart />
            </div>
            <img src={potetmos} alt="Potetmos" />
          </div>
          <div className='article__description'>
            <div className='stars'>
              <Stars />
            </div>
            <h3>
              <a href="/Potetmos">Potetmos
              </a>
            </h3>
            <div className='level'>
              <span className='level--cook'>
                <ChefIcon className='icon--cook' />
                <p>Middels</p>
              </span>
              <span className='level--time'>
                <FaRegClock />
                <p>20-40 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular__article article'>
          <div className='article__img'>
            <div className='icon--heart'>
              <FaHeart />
            </div>
            <img src={blomkalsuppe} alt="Blomkalsuppe" />
          </div>
          <div className='article__description'>
            <div className='stars'>
              <Stars />
            </div>
            <h3>
              <a href="/Blomkalsuppe">Blomkalsuppe
              </a>
            </h3>
            <div className='level'>
              <span className='level--cook'>
                <ChefIcon className='icon--cook' />
                <p>Middels</p>
              </span>
              <span className='level--time'>
                <FaRegClock />
                <p>Under 20 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular__article article'>
          <div className='article__img'>
            <div className='icon--heart'>
              <FaHeart />
            </div>
            <img src={lasagne} alt="Lasagne" />
          </div>
          <div className='article__description'>
            <div className='stars'>
              <Stars />
            </div>
            <h3>
              <a href="/Lasagne">Lasagne
              </a>
            </h3>
            <div className='level'>
              <span className='level--cook'>
                <ChefIcon className='icon--cook' />
                <p>Middels</p>
              </span>
              <span className='level--time'>
                <FaRegClock />
                <p>Over 60 min</p>
              </span>
            </div>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Popular