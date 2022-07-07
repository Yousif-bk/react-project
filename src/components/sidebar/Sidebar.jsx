import React from 'react'

function Sidebar() {
  return (
    <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered bg-white  ">
      <div className="navbar-vertical-container">
        <div className="navbar-vertical-footer-offset">
          <div className="navbar-vertical-content">
            <div className="nav nav-pills nav-vertical card-navbar-nav">
              <div className="nav-item">
                <a className="nav-link dropdown-toggle active" href="#navbarVerticalMenuDashboards" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuDashboards" aria-expanded="true" aria-controls="navbarVerticalMenuDashboards">
                  <i className="bi-house-door nav-icon"></i>
                  <span className="nav-link-title">Dashboards</span>
                </a>

          
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar