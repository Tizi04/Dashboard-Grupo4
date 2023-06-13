import React from 'react'

import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                {/* <div className="sidebar-brand-icon">
                    <img className="w-100" src="/assets/images/logo-DH.png" alt="Digital House" />
                </div> */}
                <h2>HARD TECH</h2>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - Hard-Tech</span>
                </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">Actions</div>

            {/* <!-- Nav Item - Pages --> */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/genres">
                    <i className="fas fa-fw fa-users"></i>
                    <span>Usuarios</span>
                </Link>
            </li>

            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
                <Link className="nav-link" to="/movies">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Productos</span>
                </Link>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
                <Link className="nav-link" to="/last-movie">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Ultimo producto agregado</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/search">
                    <i className="fas fa-search"></i>
                    <span>Buscar producto</span>
                </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    )
}

export default React.memo(SideBar)