import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavBar({ user }) {

const [listOpen, setListOpen] = useState(false);

const Dropdown = ({ callbackFromParent }) => {
	const node = useRef();
	// const handleClick = (e) => {
	// 	if (node.current.contains(e.target)) {
	// 		// inside click
	// 		callbackFromParent(true);
	// 		return;
	// 	}
	// 	// outside click
	// 	callbackFromParent(false);
	// };

	// useEffect(() => {
	// 	document.addEventListener('mousedown', handleClick);
	// 	return () => {
	// 		document.removeEventListener('mousedown', handleClick);
	// 	};
	// }, []);

	return (
			<div className='dropdown'>
                <div className='link'> <Link to='/pets'> <button className='linkbutton'> Lost pets near me  </button> </Link> </div>
				<div className='link'> <Link to='/pets'> <button className='linkbutton'> Lost pets near me  </button> </Link> </div>
			</div>
	);
};

  return(
      <React.Fragment className='fragment'>
      <span className='logo'></span>
        <nav className='nav'>
          <div className='link'> <button className='linkbutton' onMouseEnter={() => setListOpen(!listOpen)}>I found a Pet </button> <div>{listOpen ? <Dropdown /> : null}</div> </div>
          <div className='link'> <Link to='/pets'> <button className='linkbutton'> Lost pets near me  </button> </Link> </div>
          <div className='link'> <Link to='/posts'> <button className='linkbutton'> Flyer template  </button> </Link> </div>
          <div className='link'> <div className='verticalline'></div> </div>
          <div className='link'> {user ? (<img className='useravatar' src={user.avatar}></img>) : '' }</div>
          <div className='link'> {user ? (<div>  <h1 className='username'>{user.first_name} {user.last_name} </h1> </div>) : (<Link to='/sign_in'><button className='linkbutton'> Sign In  </button></Link>)} </div>
          <div className='link'> <div className='verticalline'></div> </div>
          <div className='link'> <Link to='/pets/new'> <button className='petbutton'> I lost a Pet <i class="fas fa-plus-circle"></i> </button> </Link>  </div>
      </nav>
      </ React.Fragment>
    // <nav className='nav'>
    //     <div className='logo'></div>
    //     <div className='flexNav'>
    //         {user ? (<img src={user.avatar} width='100' height='100'></img>) : '' }
    //             {
    //             user ? (
    //                         <div> 
    //                             <p>{user.first_name} {user.last_name}</p>
    //                         </div>
    //                     ) : (
    //                         <Link to='/sign_in'>Sign In</Link>
    //                     )
    //                     }
    //         <ul>
    //             <li class='navlink'> <Link to='/posts'><button label="Create a lost pet leaflet" /> </Link></li>
    //             <li> <Link to='/pets'> <button label="Pet index Page" /> </Link> </li>
    //             <li> <Link to='/pets/new'><button label="Create A Pet" /> </Link></li>
    //         </ul>
    //     </div>
    // </nav>
  )
}

export default NavBar
