
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import bag from '../../assets/bag.png';
import { Turn as Hamburger } from 'hamburger-react'
import {ReactNode, useState} from 'react';

interface HeaderProps {
  id?: string | undefined;
  username?: string | undefined
}

const Header: React.FC<HeaderProps> = (props) => {

  const [isOpen, setOpen] = useState<boolean>(false);
  let signUpContent: ReactNode = <a className={styles.headerRightLogin} href="/login/">Sign In</a>;

  if(props.id !== undefined) {
    signUpContent = <button className={styles.headerRightLogin}>Bem vindo {props.username}!</button>
  }

  return(
    <header className={styles.header}>
      <a href='/'>
        <img className={styles.headerImg} src={logo} alt="" />
      </a>
      <div className={styles.headerRight}>
        <div className={styles.headerRightSearch}>
          <input type="text" placeholder='Enter item or restaurant you are looking for' />
          <img src={search} alt="" />
        </div>
        <img className={styles.headerRightBag} src={bag} alt="" />
        {signUpContent}
      </div>
      <div className={styles.dropdown}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && (<div className={styles.dropdownContent}>
            <a href='/home'><p>Home</p></a>
            <a href='/login'><p>Sign in</p></a> 
            <a href='register'><p>Register</p></a>
          </div>)
        }
      </div>
    </header>
  );
}

export default Header;
