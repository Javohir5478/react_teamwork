import logo from '../../img/Logo.png'
import instagram from '../../img/instagram.png'
import vkontakte from '../../img/vkontakte.png'
import facebook from '../../img/facebook.png'
import ok from '../../img/ok.png'
import phone from '../../img/phone.png'
import zasovskiy from '../../img/zasovskiy.png'
import './Footer.css'



export default function Footer() {
  return (
    <>
      <div className='navbar'>
        <img className='logo' src={logo} alt="" />
        <ul className='all'>
        <a href="/Compony"><li>О компании</li></a>
        <a href="/Kontackt"><li>Контакты</li></a>
        <a href="/Vacation"><li>Вакансии</li></a>
        <a href=""><li>Статьи</li></a>
        <a href=""><li>Политика обработки персональных данных</li></a>
        </ul>
       <div className='online'>
      <a href="https://www.instagram.com/leomessi/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"><img src={instagram} alt="" /></a>
       <a href="https://vk.com/"><img src={vkontakte} alt="" /></a>
       <a href="https://www.facebook.com/zaslavskiy/"><img src={facebook} alt="" /></a>
        <a href="https://ok.ru/"><img src={ok } alt="" /></a>
       </div>
       <div>
        <img className='phone' src={phone} alt="" />
       <a href="https://www.tinkoff.ru/contacts/"> <span className='phone-number'>8 800 777 33 33</span></a>
       </div>
       <div>
        <span className='disayn'>Дизайн</span>
       <a href="https://www.instagram.com/zasovskiy.ru/"><img className='zasovskiy' src={zasovskiy} alt="" /></a>
       </div>
      </div>
      </>
  )
}
 
