import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <>
    <div className="card card-1">
        <h2>DOTA 2</h2>
        <h4>5x5 <span>turbo</span></h4>

        <div className="inner">
          <div>
            <img src="/icon-1.svg" alt="" />
            <p>РЕЗУЛЬТАТЫ</p>
          </div>
          <div>
            <img src="/icon-2.svg" alt="" />
            <p>РАСПИСАНИЕ</p>
          </div>
          <div>
            <img src="/icon-3.svg" alt="" />
            <p>ТРАНСЛЯЦИИ</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Card