import './Compony.css'
import React from 'react'
import comp from '../../img/comp.png';
import check from '../../img/check.png';
import Frame from '../../img/Frame.png';


export default function Compony() {
  return (
   <div>
      <img src={comp} alt="" />
      <div className='Black-boy'>
      <img className='check' src={check} alt="" />
       <p className='p_labs'>Мы занимаемся <br /> розничной торговлей</p>
       <p className='let'>Более 20 лет.</p>
      <img className='che' src={check} alt="" />
      <p className='omg'>Основная миссия компании</p>
      <p className='max'>Максимальное качество <br /> товаров и услуг по <br /> доступной цене.</p>
      <img className='' src={check} alt="" />
      <p className=''>Отличительная черта нашей сети</p>
      <p className='third'>Здоровая и полезная продукция <br /> местного производства внаших <br /> магазинах.</p>
      </div>
      <div>
        <img className='Frame' src={Frame} alt="" />
      </div>
   </div>
  )
}
