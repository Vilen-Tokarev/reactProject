import React from 'react';
import Main from './indexComponent/main/main.jsx';
// import Header from '../../baseElement/header/Header.jsx';
import About from './indexComponent/about/about.jsx';
import Map from './indexComponent/map/map.jsx'
function Index() {
  return (
    <>
      {/* <div id="loading"></div>
      <div id="loader" className="load">
        <hr />
        <hr />
        <hr />
        <hr />
      </div> */}
      <div className="BGI">
        {/* <Header /> */}
        <Main />
      </div>
      <About />
      <Map />
    </>
  );
}

export default Index;