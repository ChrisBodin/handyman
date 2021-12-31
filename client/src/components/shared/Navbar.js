import { Link } from 'react-router-dom';

const Navbar = ({}) => {
  return (
    <>
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/workers'>
            <li>Workers</li>
          </Link>
          <Link to='/services'>
            <li>Services</li>
          </Link>
          <Link to='/comments'>
            <li>Comments</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;