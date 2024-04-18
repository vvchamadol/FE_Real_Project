import React, { useState, useEffect } from 'react';
import styles from './Navbar.scss';
import { useNavigate } from 'react-router-dom';




const Navbar = () => {
    console.log('Navbar>>>>')
    // getlocalss
    const [userId, setUserId] = useState(false);
    const navigate = useNavigate()

    const logout = () => {
        // localStorage.setItem('userId', '')
        console.log('>>>> logout', logout)
        localStorage.setItem('userId', '')
        localStorage.setItem('userRole', '')
        setTimeout(() => {
            setUserId(false)
            navigateTo('/')
        }, 300);
      };

      
    useEffect( () => {
        setUserId(localStorage.getItem('userId'));
        console.log('userId>>>>', userId)
      }, []);


      const navigateTo = async (part) => {
        if (part) {
          await navigate(part)
          window.location.reload()
        }
      }

  return (
    <nav className={styles.navbar}>
            {!userId ? (
                <div>
                <a className="btn btn-sm btn-outline-secondary" href="/package">Package</a> <br/>
                <a className="btn btn-sm btn-outline-secondary" href="/wax">Wax</a> <br/>
                <a className="btn btn-sm btn-outline-secondary" href="/login">Sign In</a> <br/>
                <a className="btn btn-sm btn-success" href="/register">Sign Up</a> <br/>
                <a className="btn btn-sm btn-home" href="/">Home</a> 
                </div>
        ) : (   
          <div>        
            <a className="btn btn-sm btn-home" onClick={() => logout()} href="/">Sign Out</a> <br/>
            <a className="btn btn-sm btn-outline-secondary" href="/package">Package</a> <br/>
            <a className="btn btn-sm btn-outline-secondary" href="/wax">Wax</a> <br/>
          </div>
        )
            }
    </nav>

  );
};

export default Navbar;