import React from 'react'
import hero from '../assets/hero.svg';
import {MdOutlineDoubleArrow} from 'react-icons/md';
import { categories } from '../backend/db/categories';
import { CategoryCard } from '../components';
import { Link } from 'react-router-dom';

export function Home() {  
  return (
    <div >
      <div className='hero-section'>
        <div className='hero-content'>
            <h6 className='h4 primary'>Master your photography skills</h6>
            <p className='text-md gray2-text'>
            Learn everything you need to know about photography from professionals with
            real-world experience. Explore our courses and tutorials and start
            taking your photography skills to the next level today!
            </p>
            <Link to='videos'>
            <button className='button explore'>
              Explore <span className='arrow'><MdOutlineDoubleArrow size='1rem'/></span>
            </button>
            </Link>
        </div>
        <div className='media'>
          <img src={hero} alt='youtube' className='hero-img'/>
        </div>
      </div>
        {/* categories */}
        <div className='categories'>
          <h6 className='h4 center-text primary'>Featured Categories</h6>
          <div className='categories-container'>
            {
              categories.map(category=>(
                <Link to='videos' className='link-to' key={category._id}>
                  <CategoryCard category={category} key={category._id}/>
                </Link>
              ))
            }
          </div>
        </div>
    </div>
  )
}
