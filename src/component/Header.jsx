import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className=' bg-dark'>
      <div className='container'>
        <h1 className='display-1 text-light py-4'>My Food Delivery Website</h1>
      <ul className="nav">
      <li className="nav-item">
        <NavLink to='/' className='nav-link'>Overview</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='/restaurants' className='nav-link'>Restaurants</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='/about' className='nav-link'>About</NavLink>
      </li>
      </ul>
    </div>
      </div>
  )
}

export default Header;