import React from 'react';
import Categories from './Categories';
import Flashsale from './Flashale';
import Mall from './Mall';
import Top from './Top';
import Discover from './Discover';

function Content() {
  return (
    <div className='content'>

        <Categories/>
        <Flashsale/>
        <Mall/>
        <Top/>
        <Discover/>

    </div>
  )
}

export default Content