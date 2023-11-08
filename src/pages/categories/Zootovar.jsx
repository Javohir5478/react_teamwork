import './AllCategoris.scss';
import Slider from '@mui/material/Slider';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Zootovar() {
  const [value, setValue] = useState([25, 75]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}$`;
  }

  return (
    <div>
       <div className='Category'><br />
            <div className='pages'><a className='glavni-text' href='src/pages/HomePage/HomePage.jsx'>Главная</a> <img src="src/pages/categories/img/chevron-right.svg" alt="" /> <Link className='link' to="/"><p className='katalog-text-2'>Каталог</p></Link> <img src="src/pages/categories/img/chevron-right.svg" alt="" /><p className='katalog-text'>Зоотовары</p></div><br />
            <div className='page-name'><p>Зоотовары</p></div><br />
            <div className="all">
              <div className="filter">
              <div className="filter-t"><p>Фильтр</p></div>
              <div className="indekoator">
                <div className='filter-t2'>
                  <p>Цена</p>
                  <button className='clear-i'>Очистить</button>
                  </div><br />
                  <div>
                  <br /><br /><br /><br />
              <Slider className='slider'
              value={value}
              onChange={handleChange}
              valueLabelDisplay='auto'
              valueLabelFormat={valuetext}
              min={0}
              max={100}
            />
                  </div>
              </div>
              </div>
              <div className="product">
            
            <div className='card-all'>
              <div className="card">
                <img className='cart-img' src="src/pages/categories/img/image (7).png" alt="" />
                <p className='cart-price'>139,99 ₽</p>
                <p className='cart-name'>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                <img className='cart-rating' src="src/pages/categories/img/rating (2).png" alt="" />
                <button className='cart-button'>В корзину</button>
                <img className='cart-like' src="src/pages/categories/img/heart.png" alt="" />
              </div>
              <div className="card"> <img className='cart-img' src="src/pages/categories/img/image (8).png" alt="" />
                <p className='cart-price'>69,99 ₽</p>
                <p className='cart-name'>Молоко ПРОСТОКВАШИНО паст. питьевое</p>
                <img className='cart-rating' src="src/pages/categories/img/rating (2).png" alt="" />
                <button className='cart-button'>В корзину</button>
                <img className='cart-like' src="src/pages/categories/img/heart.png" alt="" /></div>
              <div className="card"> <img className='cart-img' src="src/pages/categories/img/image (9).png" alt="" />
                <p className='cart-price'>77,99 ₽</p>
                <p className='cart-name'>Молоко сгущенное РОГАЧЕВ Егорка, цельное</p>
                <img className='cart-rating' src="src/pages/categories/img/rating (2).png" alt="" />
                <button className='cart-button'>В корзину</button>
                <img className='cart-like' src="src/pages/categories/img/heart.png" alt="" /></div>
            </div>
            <br /><br />
            <div className='card-all'>
              <div className="card"> <img className='cart-img' src="src/pages/categories/img/image (10).png" alt="" />
                <p className='cart-price'>1992,99 ₽</p>
                <p className='cart-name'>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                <img className='cart-rating' src="src/pages/categories/img/rating (2).png" alt="" />
                <button className='cart-button'>В корзину</button>
                <img className='cart-like' src="src/pages/categories/img/heart.png" alt="" /></div>
              <div className="card"> <img className='cart-img' src="src/pages/categories/img/image (11).png" alt="" />
                <p className='cart-price'>139,99 ₽</p>
                <p className='cart-name'>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                <img className='cart-rating' src="src/pages/categories/img/rating (2).png" alt="" />
                <button className='cart-button'>В корзину</button>
                <img className='cart-like' src="src/pages/categories/img/heart.png" alt="" /></div>
              <div className="card"> <img className='cart-img' src="src/pages/categories/img/image (7).png" alt="" />
                <p className='cart-price'>139,99 ₽</p>
                <p className='cart-name'>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                <img className='cart-rating' src="src/pages/categories/img/rating (2).png" alt="" />
                <button className='cart-button'>В корзину</button>
                <img className='cart-like' src="src/pages/categories/img/heart.png" alt="" /></div>
            </div>
            <button className='more'>Показать ещё</button>
            <div className='next'>
              <button className='next-btnn'><img src="src/pages/categories/img/chevrons-left.png" alt="" /></button>
              <button className='next-btnn'><img src="src/pages/categories/img/chevron-left.png" alt="" /></button>
              <button className='next-btnn'>1</button>
              <button className='next-btnn'>2</button>
              <button className='next-btnn'>3</button>
              <button className='next-btnn'>4</button>
              <button className='next-btnn'>5</button>
              <button className='next-btnn'>6</button>
              <button className='next-btnn'>7</button>
              <button className='next-btnn'>8</button>
              <button className='next-btn'><img src="src/pages/categories/img/Button (1).png" alt="" /></button>
              <button className='next-btn'><img src="src/pages/categories/img/Button (2).png" alt="" /></button>
            </div>
          </div>
              
      

            </div>
        </div>
    </div>
  )
}