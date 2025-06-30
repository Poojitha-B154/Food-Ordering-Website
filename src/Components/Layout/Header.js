import React from 'react'

const Header = () => {
  return (
    <nav className= "navbar row sticky-top" >
      {/* logo */}
      <div className = "col-12 col-md-3">
        <img src = "https://th.bing.com/th?id=OIP.ueHppfRf52CDn841Rpj8IwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="logo"  className="logo" />
      </div>

      {/* search bar and search icon*/}
    
      <div className='col-12 col-md-6 mt-2 mt-md-0'>
        <div className='input-group'>
          <input type = "text" id = "search_field" className='form-control' placeholder='Search Your Favorite Restaurant....'/>
        
          <div className='input-group-append'>
            <button id = "search_btn" className='btn'>
              <i className='fa fa-search' aria-hidden = "true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
        <button className='btn' id = "login_btn">
          Login
        </button>

        <span className='ml-3' id = "cart"> Cart</span>

        <span className="ml-1" id = "cart_count"> 2 </span>

      </div>
    </nav>
  );
};

export default Header
