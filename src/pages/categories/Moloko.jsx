import './AllCategoris.scss';
export default function Moloko() {
 
  return (
    <div>
        <div className='Category'><br />
            <div className='pages'><a className='glavni-text' href='src/pages/HomePage/HomePage.jsx'>Главная</a> <img src="src/pages/categories/img/chevron-right.svg" alt="" /> <p className='katalog-text-2'>Каталог</p> <img src="src/pages/categories/img/chevron-right.svg" alt="" /><p className='katalog-text'>Молоко, сыр, яйцо</p></div><br />
            <div className='page-name'><p>Молоко, сыр, яйцо</p></div><br />
            <div className="all">
              <div className="filter">
              <div className="filter-t"><p>Фильтр</p></div>
              <div className="indekoator">
                <div className='filter-t2'>
                  <p>Цена</p>
                  <button className='clear-i'>Очистить</button>
                  </div><br />
                  <div className="s-i">
                    <input type="number" placeholder='1'/>
                    <img src="src/pages/categories/img/minus.png" alt="" />
                    <input type="number" placeholder='100'/>
                  </div>
              </div>
              </div>
              <div className="product">
              <div className='card-all'>
                <div className="card">

                </div>

                <div className="card">

                </div>

                <div className="card">

                </div>
                
              </div>
              <br /><br />
              <div className='card-all'>

                <div className="card">

                </div>

                <div className="card">

                </div>

                <div className="card">

                </div>
                
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

