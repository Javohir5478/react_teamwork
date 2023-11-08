import React from 'react'
import './Kontackt.css'
import home from '../../img/home.png'
import percent from '../../img/percent.png'
import vosxod from '../../img/vosxod.png'
import phone from '../../img/phone.png'
import parus from '../../img/parus.png'
import ryabinishka from '../../img/ryabinishka.png'
import pelis from '../../img/pelis.png'
export default function Kontackt() {
  return (
    <div>
      <a className='Tab' href=""><p className='Tab'>Главная</p></a>
      <div>
        <p className='real'>Контакты</p>
      </div>
      <div>
          <img className='home' src={home} alt="" />
          <p className='sklad'>Бухгалтерия, склад</p>
          <a className='num' href="https://vk.com/oooseveranochka">+7 82140 92619</a>
      </div>
      <div>
        <img className='percent' src={percent} alt="" />
        <p className='poo'>Вопросы по системе лояльности</p>
        <a href=""><p className='sever-yan'>+7 908 716 33 97</p></a>
      </div>
      <div>
        <span className='magazin'>Наши магазины</span>
        <a href="https://www.google.com/maps/@33.8937928,73.3799144,16.93z?entry=ttu"><button className='btn'>п.Щельяюр</button></a>
       <a href="https://www.google.com/maps/place/Vertep,+Komi,+Rossiya,+169473/@65.2973451,53.1560719,14z/data=!3m1!4b1!4m6!3m5!1s0x447249e2718cd461:0x25c0f625da4e30ed!8m2!3d65.2973326!4d53.1950399!16s%2Fg%2F11jg5hywsn?hl=uz&entry=ttu"><button className='date'>д.Вертеп</button></a>
       <a href="https://www.google.com/maps/place/Krasnobor,+Komi+Republic,+Russia,+169473/@65.2922315,53.2899021,15z/data=!3m1!4b1!4m6!3m5!1s0x447235dd2ca590b3:0xc633232da326cfaf!8m2!3d65.2954568!4d53.2779182!16s%2Fg%2F11c3ymw3mw?entry=ttu"><button className='ya'>с.Краснобор</button></a>
      <a href="https://www.google.com/maps/place/Diiur,+Komi+Republic,+Russia,+169471/@65.2756094,53.3586509,15z/data=!3m1!4b1!4m6!3m5!1s0x447235aa69816fb7:0x7202220934f2d943!8m2!3d65.2759319!4d53.366207!16s%2Fg%2F1ptwxcwg5?entry=ttu"><button className='diyur'>д.Диюр</button></a>
      </div>
      <div>
        <img className='vosxod' src={vosxod} alt="" />
        <br />
        <img className='fix' src={home} alt="" />
        <a href="https://www.google.com/maps/place/Dorozhnaya+Ulitsa,+10,+Moskva,+Russia,+117587/@55.6324372,37.6206446,17z/data=!3m1!4b1!4m6!3m5!1s0x414ab2fc58d1f0f9:0x6de9d42962ce091c!8m2!3d55.6324372!4d37.6206446!16s%2Fg%2F11f6dcth78?entry=ttu"><p className='uli'>ул. Дорожная 10</p></a>
        <br />
        <img className='fixed' src={phone} alt="" />
        <a href=""><p className='img-p'>+7 904 271 35 90</p></a>
      </div>
      <div className='maska'>
      <img className='vosxod' src={parus} alt="" />
        <br />
        <img className='fix' src={home} alt="" />
        <a href="https://www.google.com/maps/place/Dorozhnaya+Ulitsa,+10,+Moskva,+Russia,+117587/@55.6324372,37.6206446,17z/data=!3m1!4b1!4m6!3m5!1s0x414ab2fc58d1f0f9:0x6de9d42962ce091c!8m2!3d55.6324372!4d37.6206446!16s%2Fg%2F11f6dcth78?entry=ttu"><p className='uli'>ул. Советская 87</p></a>
        <br />
        <img className='fixed' src={phone} alt="" />
        <a href=""><p className='img-p'>+7 82140 91330</p></a>
      </div>
      <div className='xalat'>
      <img className='vosxod' src={ryabinishka} alt="" />
        <br />
        <img className='fix' src={home} alt="" />
        <a href="https://www.google.com/maps/place/Dorozhnaya+Ulitsa,+10,+Moskva,+Russia,+117587/@55.6324372,37.6206446,17z/data=!3m1!4b1!4m6!3m5!1s0x414ab2fc58d1f0f9:0x6de9d42962ce091c!8m2!3d55.6324372!4d37.6206446!16s%2Fg%2F11f6dcth78?entry=ttu"><p className='uli'>ул. Заводская 16</p></a>
        <br />
        <img className='fixed' src={phone} alt="" />
        <a href=""><p className='img-p'>+7 82140 91101</p></a>
      </div>
      <div className='frik'>
      <img className='vosxod' src={pelis} alt="" />
        <br />
        <img className='fix' src={home} alt="" />
        <a href="https://www.google.com/maps/place/Dorozhnaya+Ulitsa,+10,+Moskva,+Russia,+117587/@55.6324372,37.6206446,17z/data=!3m1!4b1!4m6!3m5!1s0x414ab2fc58d1f0f9:0x6de9d42962ce091c!8m2!3d55.6324372!4d37.6206446!16s%2Fg%2F11f6dcth78?entry=ttu"><p className='uli'>ул. Рабочая 1</p></a>
        <br />
        <img className='fixed' src={phone} alt="" />
        <a href=""><p className='img-p'>+7 82140 91300</p></a>
      </div>
      <div>
      <iframe className='iframe' src="https://www.google.com/maps/d/embed?mid=1Dn05jKVkkFO-1pMcELzTKW1hPWU&hl=en&ehbc=2E312F" width="640" height="480"></iframe>
      </div>
    </div>
  )
}
