
import styles from './FormItems.module.css';
import useInput from '../../hooks/use-input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import BASE_URI from '../../services/BASE_URI';
import { mutationLoginUser } from '../../services/queriesService';
import headers from '../../services/config/Auth';

interface ResponseData {
  errors?: Array<string>;
  
}

const Login: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [response, setResponse] = useState<any | null>(null);
  const navigate = useNavigate();

  // Para submissão dos dados
  const sendHttpRequest = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: BASE_URI,
        headers: headers,
        data: {
          query: mutationLoginUser(username, password)
        }
      });
      setResponse(response);
      if(response.data.errors !== undefined)
        setIsModalOpen(true);
      else {
        sessionStorage.setItem("userId", response.data.data.logIn.viewer.user.id);
        sessionStorage.setItem("username", response.data.data.logIn.viewer.user.username);
        navigate('/');
      }
    } catch (error: any) {
      if (error.response) {
        setResponse(error.response.status);
      } else {
        setResponse('Error: Network Error');
      }
    }
  };

  function closeModal() {
    setIsModalOpen(false);
  }

  function sumbitHandler (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formIsValid) {
      sendHttpRequest();
    }
  };

  const {
    value: username,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameHandler,
    inputBlurHandler: usernameBlur,
    reset: usernameReset
  } = useInput(value => value.trim().length > 5);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordHandler,
    inputBlurHandler: passwordBlur,
    reset: passowrdReset,
  } = useInput((value) => value.length > 5);

  let formIsValid = false;
  if(usernameIsValid && passwordIsValid){
    formIsValid = true;
  }

  return(
    <form className={styles.form} onSubmit={sumbitHandler} data-testid='login-component'>
      <h3 className={styles.formTitle}>Username</h3>
      {<ModalWindow isOpen={isModalOpen} onClose={closeModal}>
          <img src='https://cdn-icons-png.flaticon.com/128/2797/2797387.png' alt="" />
          <h1>Nome ou senha incorretos!</h1>
        </ModalWindow>
      }
      <input className={styles.formInput}
        type="text"
        value={username} 
        onChange={usernameHandler}
        data-testid='username-element'
        onBlur={usernameBlur}
        style={usernameHasError ? {borderColor: 'red'} : {}} />
      <h3 className={styles.formTitle}>Password</h3>
      <input className={styles.formInput}
        type="password" 
        value={password} 
        onChange={passwordHandler}
        data-testid='password-element'
        onBlur={passwordBlur}
        style={passwordHasError ? {borderColor: 'red'} : {}} />
      {passwordHasError && <p className={styles.formError}>
          A senha deve conter mais de 5 caracteres
        </p>
      }
      {usernameHasError && <p className={styles.formError}>
          O nome de usuário deve conter mais de 5 caracteres
        </p>
      }
      <button className={styles.formButton} type='submit'>
        Login
      </button>
      <p className={styles.formRegister}>
        Don't have an account? <a href='/register/'>Register</a>
      </p>
    </form>
  );
}

export default Login;