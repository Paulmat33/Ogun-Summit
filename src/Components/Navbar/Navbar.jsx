import './Navbar.css'
import Logo from '../../assets/footer-logo.png'
import arrow from '../../assets/arrow.png';
import rightarrow from '../../assets/arrow-right.png'


const Navbar = () => {
  return (
    <div className='header container'>
      <img src={Logo} alt='logo'/>

      <nav>
        <li>Home</li>
        <li className='arrow'>About <img src={arrow}alt='arrow'/> </li>
        <li>Sponsors</li>
        <li>Store</li>
        <li>Exhibitors</li>
      </nav>

      <div>
        <button className='register' >Register<img src={rightarrow} alt='arrow'/> </button>
      </div>
    </div>
  )
}

export default Navbar
