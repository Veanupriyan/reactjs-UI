import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check My Travel Gallery</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Bike Riding: Batticaloa to Nuwaraeliya'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Work Hard Save Monry Then Explore The World '
              label='Visiting'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
