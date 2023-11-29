/* eslint-disable react/prop-types */

import "./Navbar.css";
const Navbar = ({title}) => {
  return (
      <div className='titleNav'>
          <div className="titleLeft">
              Invoice Generator
          </div>
          <div className="titleRight">
              {title}
          </div>
    </div>
  )
}

export default Navbar