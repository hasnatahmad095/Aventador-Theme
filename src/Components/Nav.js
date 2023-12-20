import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-expand-md bg-black border-bottom border-danger border-3 p-3 m-0">
                    <div class="container-fluid d-flex">

                        <a class="navbar-brand" href="#">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/logo-aero1.png?v=1613506944" alt="" />
                        </a>


                        <div class="collapse navbar-collapse d-flex d-none d-sm-none justify-content-evenly " id="navbarNavDropdown">
                            <ul class="navbar-nav d-flex justify-content-center gap-5">

                                <li class="nav-item dropdown list">
                                    <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Home
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li> <Link className='tdecor dropdown-item' to={'/'}>Home1</Link> </li>
                                        <li> <Link className='tdecor dropdown-item' to={'/home1'}>Home2</Link> </li>
                                        <li> <Link className='tdecor dropdown-item' to={'/home3'}>Home3</Link> </li>
                                        <li> <Link className='tdecor dropdown-item' to={'/home4'}>Home4</Link> </li>
                                        <li> <Link className='tdecor dropdown-item' to={'/home5'}>Home5</Link> </li>
                                        <li> <Link className='tdecor dropdown-item' to={'/home6'}>Home6</Link> </li>

                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Shop
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Featured
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Layouts
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div>
                        <i class="fa-solid fa-magnifying-glass me-3 text-light"></i>
                        <i class="fa-solid fa-braille me-3 text-light"></i>
                        <i class="fa-solid fa-cart-shopping me-3 text-light"></i>
                        </div>
                        
                    </div>
                </nav>
            </>
        )
    }
}

export default Nav