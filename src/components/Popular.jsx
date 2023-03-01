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

import { FaRegClock } from 'react-icons/fa';
import { FaSuperpowers } from 'react-icons/fa';
import Stars from './Stars';
import { FaHeart } from 'react-icons/fa';


function Popular() {
  return (
    <div className='popular'>
      <h2>POPULÆRT AKKURAT NÅ</h2>
      <div className='popular-grid'>

        <article className='popular-grid__article'>
          <div>
            <img src={pannekaker} alt="Pannekaker" />
          </div>
          <div>
            <div className='icon__heart'>
              <FaHeart />
            </div>
            <h3>Pannekaker</h3>
            <div className='popular-grid__article__stars'>
              <Stars />
            </div>
            <div className='popular-grid__article__time'>
              <span>
                <FaSuperpowers />
                <p>Middels</p>
              </span>
              <span>
                <FaRegClock />
                <p>40-60 min</p>
              </span>
            </div>
          </div>

        </article>

        <article className='popular-grid__article'>
          <div>
            <img src={vafler} alt="Vafler" />
          </div>
          <div>
            <div className='icon__heart'>
              <FaHeart />
            </div>
            <h3>Vafler</h3>
            <div className='popular-grid__article__stars'>
              <Stars />
            </div>
            <div className='popular-grid__article__time'>
              <span>
                <FaSuperpowers />
                <p>Enkel</p>
              </span>
              <span>
                <FaRegClock />
                <p>20-40 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular-grid__article'>
          <div>
            <img src={pølsegrateng} alt="Pølsegrateng" />
          </div>
          <div>
            <div className='icon__heart'>
              <FaHeart />
            </div>
            <h3>Pølsegrateng</h3>
            <div className='popular-grid__article__stars'>
              <Stars />
            </div>
            <div className='popular-grid__article__time'>
              <span>
                <FaSuperpowers />
                <p>Enkel</p>
              </span>
              <span>
                <FaRegClock />
                <p>40-60 min</p>
              </span>
            </div>
          </div>

        </article>

        <article className='popular-grid__article'>
          <div>
            <img src={brownies} alt="Brownies" />
          </div>
          <div>
            <div className='icon__heart'>
              <FaHeart />
            </div>
            <h3>Brownies</h3>
            <div className='popular-grid__article__stars'>
              <Stars />
            </div>
            <div className='popular-grid__article__time'>
              <span>
                <FaSuperpowers />
                <p>Middels</p>
              </span>
              <span>
                <FaRegClock />
                <p>20-40 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular-grid__article'>
          <div>
            <img src={chilliconcarne} alt="Chili con carne" />
          </div>
          <div>
            <div className='icon__heart'>
              <FaHeart />
            </div>
            <h3>Chili con carne</h3>
            <div className='popular-grid__article__stars'>
              <Stars />
            </div>
            <div className='popular-grid__article__time'>
              <span>
                <FaSuperpowers />
                <p>Enkel</p>
              </span>
              <span>
                <FaRegClock />
                <p>20-40 min</p>
              </span>
            </div>

          </div>
        </article>

        <article className='popular-grid__article'>
          <div>
            <img src={focaccia} alt="Focaccia" />
          </div>
          <div>
            <div className='icon__heart'>
              <FaHeart />
            </div>
            <h3>Focaccia</h3>
            <div className='popular-grid__article__stars'>
              <Stars />
            </div>
            <div className='popular-grid__article__time'>
              <span>
                <FaSuperpowers />
                <p>Middels</p>
              </span>
              <span>
                <FaRegClock />
                <p>Over 60 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular-grid__article'>
          <div>
            <img src={kanelboller} alt="Kanelknuter" />
          </div>
          <div>
            <div className='icon__heart'>
              <FaHeart />
            </div>
            <h3>Kanelknuter</h3>
            <div className='popular-grid__article__stars'>
              <Stars />
            </div>
            <div className='popular-grid__article__time'>
              <span>
                <FaSuperpowers />
                <p>Enkel</p>
              </span>
              <span>
                <FaRegClock />
                <p>Over 60 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular-grid__article'>
          <div>
            <img src={fiskegrateng} alt="Fiskegrateng" />
          </div>
          <div>
            <div className='icon__heart'>
              <FaHeart />
            </div>
            <h3>Fiskegrateng</h3>
            <div className='popular-grid__article__stars'>
              <Stars />
            </div>
            <div className='popular-grid__article__time'>
              <span>
                <FaSuperpowers />
                <p>Enkel</p>
              </span>
              <span>
                <FaRegClock />
                <p>20-40 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular-grid__article'>
          <div>
            <img src={finnbiff} alt="finnbiff" />
          </div>
          <div>
            <div className='icon__heart'>
              <FaHeart />
            </div>
            <h3>Finnbiff</h3>
            <div className='popular-grid__article__stars'>
              <Stars />
            </div>
            <div className='popular-grid__article__time'>
              <span>
                <FaSuperpowers />
                <p>Enkel</p>
              </span>
              <span>
                <FaRegClock />
                <p>20-40 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular-grid__article'>
          <div>
            <img src={potetmos} alt="Potetmos" />
          </div>
          <div>
            <div className='icon__heart'>
              <FaHeart />
            </div>
            <h3>Potetmos</h3>
            <div className='popular-grid__article__stars'>
              <Stars />
            </div>
            <div className='popular-grid__article__time'>
              <span>
                <FaSuperpowers />
                <p>Middels</p>
              </span>
              <span>
                <FaRegClock />
                <p>20-40 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular-grid__article'>
          <div>
            <img src={blomkalsuppe} alt="Blomkalsuppe" />
          </div>
          <div>
            <div className='icon__heart'>
              <FaHeart />
            </div>
            <h3>Blomkalsuppe</h3>
            <div className='popular-grid__article__stars'>
              <Stars />
            </div>
            <div className='popular-grid__article__time'>
              <span>
                <FaSuperpowers />
                <p>Middels</p>
              </span>
              <span>
                <FaRegClock />
                <p>Under 20 min</p>
              </span>
            </div>
          </div>
        </article>

        <article className='popular-grid__article'>
          <div>
            <img src={lasagne} alt="Lasagne" />
            <div className='icon__heart'>
              <FaHeart />
            </div>
          </div>
          <div>
            <h3>Lasagne</h3>
            <div className='popular-grid__article__stars'>
              <Stars />
            </div>
            <div className='popular-grid__article__time'>
              <span>
                <FaSuperpowers />
                <p>Middels</p>
              </span>
              <span>
                <FaRegClock />
                <p>Over 60 min</p>
              </span>
            </div>

          </div>
        </article>

      </div>

    </div>
  )
}

export default Popular