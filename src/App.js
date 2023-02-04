import React from 'react';
import Info from './components/Info.js'
import About from './components/About.js'
import Interest from './components/Interest.js'
import Footer from './components/Footer.js'

function App (){

 return(
    <>
    <div className='wrapper'>
    <Info/>
     <About/>
      <Interest/>
       <Footer/>
       </div>
    </>
 )   
}
export default App
