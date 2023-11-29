import { useEffect, useState } from 'react';
import './App.css'
import { HomePage } from './exports'

function App() {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //This allows to refresh on its own when screen size changes without this you have to do it manually.
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='app'>
      {
        windowWidth > 700 ? (<HomePage />) : (
        <div className='smallScreen'>
          <h1>Works on Laptop/Desktop.</h1>
            
        </div>
        
        )
    }
      
    
    </div>
   
  )
}

export default App
