import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="fixed-top">
          <nav className="navbar navbar-expand-md navbar-dark bg-warning">
              <div className="container">
                    <div className="text-dark">
                       <strong> <i className="bi bi-mobile"></i> +91-9988774455 </strong>
                    </div>
                    <div className="text-dark float-end">
                        <strong>For Enquiry: <span className="text-secondary">support@foodbowl.com</span> </strong>
                    </div>
              </div>
          </nav>
          <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
              <div className="container-fluid">
                  <Link to={`/`} className="navbar-brand text-uppercase">
                    Food <span className="text-warning">Bowl</span> </Link>

                      <Link to={`/cart`} className="btn btn-link text-light" id='cart'>
                          <i className="bi bi-cart"></i>
                      </Link>
                    
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="menu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={`/login`} className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/register`} className="nav-link">Register</Link>
                            </li>
                        </ul>
                    </div>
              </div>
          </nav>
    </header>
  )
}

export default Header
