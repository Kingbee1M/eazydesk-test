import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiGrid42 } from "react-icons/ci";
import { PiTicketBold } from "react-icons/pi";
import Logo from "../assets/img/logo.svg";

const LeadsHeader = ({ incident, service, change }: any) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  
  const screens = [
    { title: 'Change', path: 'change', count: change },
    { title: 'Service', path: 'service', count: service },
    { title: 'Incident', path: 'incident', count: incident },
  ];

  // Replicating .client-header nav a
  const baseLinkStyle = {
    color: 'var(--black)',
    width: '100%',
    padding: '.5rem .85rem',
    borderRadius: '5px',
    transition: 'var(--transition)',
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    textDecoration: 'none',
  };

  // Replicating .client-header nav a.selected
  const getNavLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    ...baseLinkStyle,
    backgroundColor: isActive ? 'var(--accent-blue)' : 'transparent',
    color: isActive ? 'var(--white)' : 'var(--black)',
  });

  return (
    <header className='client-header' style={{ 
      gridArea: 'client-header',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'start',
      justifyContent: 'start',
      width: '100%',
      padding: 0,
    }}>
      {/* Title Section */}
      <div className="title" style={{ 
        display: 'flex', 
        width: '100%', 
        justifyContent: 'space-between', 
        padding: '0 !important' 
      }}>
        <div className="logo_area_leads" style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', justifyContent: 'space-between' }}>
          <img src={Logo} alt='logo' className='new-logo' style={{ width: '22px' }} />
          <h1 style={{ fontSize: 18, color: 'black', margin: 0 }}>EAZYDESK</h1>
        </div>
      </div>

      {/* Navbar - Replicating .client-header nav */}
      <div className="navbar" style={{ 
        width: '100%',
        backgroundColor: 'var(--white)',
        borderRadius: '25px',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        backdropFilter: 'blur(5px)',
        padding: '0px' // Added for internal spacing
      }}>
        
        {/* Dashboard Link */}
        <NavLink to='/leadsdashboard' end style={getNavLinkStyle}>
          <CiGrid42 className="icons" style={{ fontSize: '12px', fontWeight: 700 }} /> 
          Dashboard
        </NavLink>

        {/* ALL TICKETS GROUP */}
        <div className="nav-group-container" style={{ width: '100%' }}>
          <NavLink
            to="all-tickets"
            style={getNavLinkStyle}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <PiTicketBold className="icons" style={{ fontSize: '12px', fontWeight: 700 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <span>ALL TICKETS</span>
              <MdKeyboardArrowDown 
                style={{ 
                  transform: toggleMenu ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: '0.3s ease',
                  fontSize: '18px'
                }} 
              />
            </div>
          </NavLink>

          {/* Sub-Menu List - Replicating .sub-menu-list */}
          {toggleMenu && (
            <div className="sub-menu-list" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              width: '100%', 
              gap: '2px',
              marginTop: '5px'
            }}>
              {screens.map((screen) => (
                <NavLink
                  key={screen.title}
                  to={screen.path}
                  style={({ isActive }) => ({
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontSize: '12px',
                    transition: 'var(--transition)',
                    backgroundColor: isActive ? 'var(--accent-blue)' : 'transparent',
                    color: isActive ? 'white' : 'var(--black)',
                  })}
                >
                  <span className="sub-title">{screen.title}</span>
                  <span className="sub-count" style={{
                    fontSize: '10px',
                    backgroundColor: '#fff',
                    width: '20px',
                    height: '20px',
                    borderRadius: '30px',
                    color: '#646464',
                    border: '1px solid #646464',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    {screen.count}
                  </span>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default LeadsHeader;