import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as BellIcon } from './icons/bell.svg';
// import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
// import { ReactComponent as CaretIcon } from './icons/caret.svg';
// import { ReactComponent as PlusIcon } from './icons/plus.svg';
// import { ReactComponent as CogIcon } from './icons/cog.svg';
// import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
// import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
// import { ReactComponent as BoltIcon } from './icons/bolt.svg';
// import { CSSTransition } from 'react-transition-group';
// import './NavBar.css'
function NavBar({ user, signout }) {

const [listOpen, setListOpen] = useState(false);

const signOut = event => {
  event.preventDefault();
  signout();
};

const Dropdown = ({ callbackFromParent }) => {
	const node = useRef();
	return (
			<div className='dropdown'>
                <div className='link'> <Link to='/tags'> <button className='linkbutton'> I've got someone's pet  </button> </Link> </div>
			        	<div className='link'> <Link to='/pets/new'> <button className='linkbutton'> I want to create a Found Pet Ad</button> </Link> </div>
			</div>
	);
};

  //   return (
  //     <Navbar>
  //       <NavItem icon={<PlusIcon />} />
  //       <NavItem icon={<BellIcon />} />
  //       <NavItem icon={<MessengerIcon />} />
  //       <NavItem icon={<CaretIcon />}>
  //         <DropdownMenu></DropdownMenu>
  //       </NavItem>
  //     </Navbar>
  //   );
  // }
  
  // function Navbar(props) {
  //   return (
  //     <nav className="navbar">
  //       <ul className="navbar-nav">{props.children}</ul>
  //     </nav>
  //   );
  // }
  
  // function NavItem(props) {
  //   const [open, setOpen] = useState(false);
  
  //   return (
  //     <li className="nav-item">
  //       <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
  //         {props.icon}
  //       </a>
  
  //       {open && props.children}
  //     </li>
  //   );
  // }
  
  // function DropdownMenu() {
  //   const [activeMenu, setActiveMenu] = useState('main');
  //   const [menuHeight, setMenuHeight] = useState(null);
  //   const dropdownRef = useRef(null);
  
  //   useEffect(() => {
  //     setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  //   }, [])
  
  //   function calcHeight(el) {
  //     const height = el.offsetHeight;
  //     setMenuHeight(height);
  //   }
  
  //   function DropdownItem(props) {
  //     return (
  //       <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
  //         <span className="icon-button">{props.leftIcon}</span>
  //         {props.children}
  //         <span className="icon-right">{props.rightIcon}</span>
  //       </a>
  //     );
  //   }
  
  //   return (
  //     <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
  //       <CSSTransition
  //         in={activeMenu === 'main'}
  //         timeout={500}
  //         classNames="menu-primary"
  //         unmountOnExit
  //         onEnter={calcHeight}>
  //         <div className="menu">
  //           <DropdownItem>My Profile</DropdownItem>
  //           <DropdownItem
  //             leftIcon={<CogIcon />}
  //             rightIcon={<ChevronIcon />}
  //             goToMenu="settings">
  //             Settings
  //           </DropdownItem>
  //           <DropdownItem
  //             leftIcon="🦧"
  //             rightIcon={<ChevronIcon />}
  //             goToMenu="animals">
  //             Animals
  //           </DropdownItem>
  
  //         </div>
  //       </CSSTransition>
  
  //       <CSSTransition
  //         in={activeMenu === 'settings'}
  //         timeout={500}
  //         classNames="menu-secondary"
  //         unmountOnExit
  //         onEnter={calcHeight}>
  //         <div className="menu">
  //           <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
  //             <h2>My Tutorial</h2>
  //           </DropdownItem>
  //           <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
  //           <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
  //           <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
  //           <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
  //         </div>
  //       </CSSTransition>
  
  //       <CSSTransition
  //         in={activeMenu === 'animals'}
  //         timeout={500}
  //         classNames="menu-secondary"
  //         unmountOnExit
  //         onEnter={calcHeight}>
  //         <div className="menu">
  //           <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
  //             <h2>Animals</h2>
  //           </DropdownItem>
  //           <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
  //           <DropdownItem leftIcon="🐸">Frog</DropdownItem>
  //           <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
  //           <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
  //         </div>
  //       </CSSTransition>
  //     </div>
  //   );
  return(
      <React.Fragment className='fragment'>
      <Link to='/pets'><span className='logo'></span></Link>
        <nav className='nav'>
          
          <div className='link'> <Link to='/tags'> <button className='linkbutton'> I've got someone's pet  </button> </Link> </div>
			    {/* <div className='link'> <Link to='/pets/new'> <button className='linkbutton'> I want to create a Found Pet Ad</button> </Link> </div> */}
          {/* <div className='link'> <button className='linkbutton' onMouseEnter={() => setListOpen(!listOpen)}>I found a Pet </button> <div>{listOpen ? <Dropdown /> : null}</div> </div> */}
          <div className='link'> <Link to='/pets'> <button className='linkbutton'> Lost pets near me  </button> </Link> </div>
          <div className='link'> <Link to='/posts'> <button className='linkbutton'> Flyer template  </button> </Link> </div>
          <div className='link'> <div className='verticalline'></div> </div>
          <div className='link'> {user ? (<img className='useravatar' src={user.avatar}></img>) : '' }</div>
          <div className='link'> {user ? (<div>  <h1 className='username'>{user.first_name} {user.last_name} </h1> </div>) : (<><Link to='/users/new'><button className='linkbutton'> Sign Up  </button></Link>  <Link to='/sign_in'><button className='linkbutton'> Sign In  </button></Link></>)} </div>
          <div className='link'> <div className='verticalline'></div> </div>
          <div className='link'> <Link to='/pets/new'> <button className='petbutton'> Create new ad <i class="fas fa-plus-circle"></i> </button> </Link>  </div>
          {/* <a href="#" onClick={signOut}>Sign Out</a> */}
      </nav>
      </ React.Fragment>
  )
}

export default NavBar
