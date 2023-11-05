import { Link } from 'react-router-dom';
import './AllCategoris.scss';

export default function AllCategoris() {
  return (
    <div>
        <div className='Category'><br />
            <div className='pages'><a className='glavni-text' href='src/pages/HomePage/HomePage.jsx'>Главная</a> <img src="src/pages/categories/img/chevron-right.svg" alt="" /> <p className='katalog-text'>Каталог</p></div><br />
            <div className='page-name'><p>Каталог</p></div><br />
            <div className='page-cards'>
                <div className='card-1'>

                <div className="cardd-sir">
                <Link className='link' to="/moloko">  
                <div className="shadow"></div>
                 <p className='card-name'>Молоко, сыр, яйцо</p>
                 </Link> 
                </div>   

                <div className="card-xleb">
                     <div className="shadow"></div>
                    <p className='card-name'>Хлеб</p>
                </div>   

                
                <div className="card-frukt">
                     <div className="shadow"></div>
                    <p className='card-name'>Фрукты и овощи</p>
                </div>   

                </div>
                <br /><br />


                <div className='card-1'>
                <div className="card-muz">
                     <div className="shadow"></div>
                    <p className='card-name'>Замороженные продукты</p>
                </div>  

                <div className="card-napitki">
                     <div className="shadow"></div>
                    <p className='card-name'>Напитки</p>
                </div>  

                <div className="card-konditor">
                     <div className="shadow"></div>
                    <p className='card-name'>Кондитерские изделия</p>
                </div>  

                <div className="card-kofe">
                     <div className="shadow"></div>
                    <p className='card-name'>Чай, кофе</p>
                </div>  
                </div><br /><br />


                <div className='card-1'>

                <div className="card-bakaleya">
                     <div className="shadow"></div>
                    <p className='card-name'>Бакалея</p>
                </div> 
                
                <div className="card-pitanya">
                     <div className="shadow"></div>
                    <p className='card-name'>Здоровое питание</p>
                </div> 

                 <div className="cardd-zootovar">
                    <div className="shadow"></div>
                    <p className='card-name'>Зоотовары</p>
                 </div> 

                </div><br /><br />

                <div className='card-1'>

                <div className="card-detski">
                     <div className="shadow"></div>
                    <p className='card-name'>Детское питание</p>
                </div> 

                <div className="cardd-gosht">
                    <div className="shadow"></div>
                    <p className='card-name'>Мясо, птица, колбаса</p>
                 </div> 


              <div className="card-tozalash">
                     <div className="shadow"></div>
                    <p className='card-name'>Непродовольственные товары</p>
                </div> 
                </div>
                
            </div>
        </div>
        
    </div>
  )
} 
