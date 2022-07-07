import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className="navbar navbar-expand-lg navbar-bordered navbar-spacer-y-0 flex-lg-column">
      <div className="navbar-dark w-100 bg-dark py-2">
        <div class="container">
          <div className="navbar-nav-wrap">
            <a class="navbar-brand" href="index.html" aria-label="Front">
            
            </a>
            <div class="navbar-nav-wrap-content-end">
              <ul class="navbar-nav">
                <li class="nav-item">
                  Test
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header