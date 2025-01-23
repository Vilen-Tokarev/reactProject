import React from 'react';
import Main from './indexComponent/main/main.jsx';
import About from './indexComponent/about/about.jsx';
import Map from './indexComponent/map/map.jsx'
function Index() {
  return (
    <>
      <div className="BGI">
        <Main />
      </div>
      <About />
      <Map />
    </>
  );
}

export default Index;