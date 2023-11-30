import React from 'react';
import './Content.css';
import Categories from './Categories';
import Flashsale from './Flashale';
import Banner from './Banner';
import Mall from './Mall';
import Top from './Top';
import Discover from './Discover';

function Content() {
  return (
    <div className='content'>

        <Categories/>
        <Flashsale/>
        <Banner/>
        <Mall/>
        <Top/>
        <Discover/>

    </div>
  )
}

export default Content