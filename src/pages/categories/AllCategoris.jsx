
import { Link } from 'react-router-dom';

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
                <Link className='link' to="/xleb">
                     <div className="shadow"></div>
                    <p className='card-name'>Хлеб</p>
                    </Link> 
                </div>   
               
                
                <div className="card-frukt">
                <Link className='link' to="/fruct">
                     <div className="shadow"></div>
                    <p className='card-name'>Фрукты и овощи</p>
                    </Link> 
                </div>   

                </div>
                <br /><br />


                <div className='card-1'>
                <div className="card-muz">
                <Link className='link' to="/zamarojinnie">
                     <div className="shadow"></div>
                    <p className='card-name'>Замороженные продукты</p>
                    </Link> 
                </div>  

                <div className="card-napitki">
                <Link className='link' to="/napitki">
                     <div className="shadow"></div>
                    <p className='card-name'>Напитки</p>
                    </Link> 
                </div>  

                <div className="card-konditor">
                <Link className='link' to="/kontiterski">
                     <div className="shadow"></div>
                    <p className='card-name'>Кондитерские изделия</p>
                    </Link> 
                </div>  

                <div className="card-kofe">
                <Link className='link' to="/Cofe">
                     <div className="shadow"></div>
                    <p className='card-name'>Чай, кофе</p>
                    </Link> 

                </div>  
                </div><br /><br />


                <div className='card-1'>

                <div className="card-bakaleya">
                <Link className='link' to="/Bakaleya">
                     <div className="shadow"></div>
                    <p className='card-name'>Бакалея</p>
                    </Link> 

                </div> 
                
                <div className="card-pitanya">
                <Link className='link' to="/Zdarovie">
                     <div className="shadow"></div>
                    <p className='card-name'>Здоровое питание</p>
                    </Link> 
                </div> 

                 <div className="cardd-zootovar">
                 <Link className='link' to="/Zootovar">
                    <div className="shadow"></div>
                    <p className='card-name'>Зоотовары</p>
                    </Link> 
                 </div> 

                </div><br /><br />

                <div className='card-1'>

                <div className="card-detski">
                <Link className='link' to="/Detski">
                     <div className="shadow"></div>
                    <p className='card-name'>Детское питание</p>
                    </Link> 
                </div> 

                <div className="cardd-gosht">
                <Link className='link' to="/Myasa">
                    <div className="shadow"></div>
                    <p className='card-name'>Мясо, птица, колбаса</p>
                    </Link> 
                 </div> 


              <div className="card-tozalash">
              <Link className='link' to="/Clear">
                     <div className="shadow"></div>
                    <p className='card-name'>Непродовольственные товары</p>
                    </Link> 
                </div> 
                </div>
                
            </div>
        </div>
        
    </div>
  )
} 
