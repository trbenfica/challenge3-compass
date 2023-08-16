
import styles from './FormItems.module.css';
import useInput from '../../hooks/use-input';
// import useRegisterReq from '../../hooks/HttpSendRequest';

export default function Login() {
  function sumbitHandler (event) {
    event.preventDefault();
    if (formIsValid) {
      
      usernameReset();
      passowrdReset();
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
    <form className={styles.form} onSubmit={sumbitHandler}>
      <h3 className={styles.formTitle}>Username</h3>
      <input className={styles.formInput}
        type="text"
        value={username} 
        onChange={usernameHandler}
        onBlur={usernameBlur}
        style={usernameHasError ? {borderColor: 'red'} : {}} />
      <h3 className={styles.formTitle}>Password</h3>
      <input className={styles.formInput}
        type="password" 
        value={password} 
        onChange={passwordHandler}
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