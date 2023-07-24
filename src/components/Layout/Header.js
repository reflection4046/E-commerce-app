import React from 'react'
import {   Link } from 'react-router-dom'


const Header = () => {
  return(
    <> 
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler"
     type="button" data-bs-toggle="collapse" 
     data-bs-target="#navbarTogglerDemo01" 
     aria-controls="navbarTogglerDemo01" 
     aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"/>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link  to = '/'class="navbar-brand" >
       🛒 E-commerce   
        </Link>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to = '/' class="nav-link">
            Home
            </Link>
        </li>
        <li class="nav-item">
          <Link to = '/category' class="nav-link" >
            category
            </Link>
            </li>
        
        <li class="nav-item">
          <Link to = '/Register' class="nav-link" >
          Register
            </Link>
        </li>
        <li class="nav-item">
          <Link to = '/login' class="nav-link" >
          login
            </Link>
        </li>
        <li class="nav-item">
          <Link to = '/cart' class="nav-link">
          cart(0)
            </Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
    


export default Header;
