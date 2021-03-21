import React from 'react';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>78 stays · 26 may to 30 may · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>
      <SearchResult
        img='https://i.ibb.co/6tbg4nr/pexels-charlotte-may-5824524.jpg'
        location='Private room in center of Melbourne CBD'
        title='Independant luxury studio apartment'
        description='2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen'
        star={4.3}
        price='$80 / night'
        total='$160 total'
      />

      <SearchResult
        img='https://i.ibb.co/Q6Yd7Tq/pexels-5997983.jpg'
        location='Private room in center of Melbourne CBD'
        title='Melbourne Studio Apartments'
        description='4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine'
        star={3.8}
        price='$70 / night'
        total='$210 total'
      />
      <SearchResult
        img='https://i.ibb.co/Y0z4P5r/pexels-5998039.jpg'
        location='Private room in center of Melbourne CBD'
        title='3 mins to Flinders Street Station'
        description='1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine'
        star={4.1}
        price='$90 / night'
        total='$270 total'
      />
      <SearchResult
        img='https://i.ibb.co/sQx2s3C/pexels-5998049.jpg'
        location='Private room in center of Melbourne CBD'
        title='Spacious Peaceful Modern Bedroom'
        description='3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning'
        star={5.0}
        price='$120 / night'
        total='$480 total'
      />
      <SearchResult
        img='https://i.ibb.co/9Yc9Sqn/pexels-5998050.jpg'
        location='Private room in center of Melbourne CBD'
        title='The Blue Room In Melbourne CBD'
        description='2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine'
        star={4.23}
        price='$130 / night'
        total='$360 total'
      />
      <SearchResult
        img='https://i.ibb.co/wMCk0Qf/pexels-5998117.jpg'
        location='Private room in center of Melbourne CBD'
        title='5 Star Luxury Apartment'
        description='3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine'
        star={3.85}
        price='$200 / night'
        total='$600 total'
      />
    </div>
  );
}

export default SearchPage;
