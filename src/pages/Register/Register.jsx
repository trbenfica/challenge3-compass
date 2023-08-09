
import styles from './Register.module.css';
import useInput from '../../hooks/use-input';

export default function Register() {
  function sumbitHandler (event) {
    event.preventDefault();
    if (formIsValid) {
      console.log('submetido');
      firstNameReset();
      passwordReset();
    }
  };

  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameHandler,
    inputBlurHandler: firstNameBlur,
    reset: firstNameReset
  } = useInput(value => value.trim().length > 0);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameHandler,
    inputBlurHandler: lastNameBlur,
    reset: lastNameReset
  } = useInput(value => value.trim().length > 0);

  const {
    value: birthDate,
    isValid: birthDateIsValid,
    hasError: birthDateHasError,
    valueChangeHandler: birthDateHandler,
    inputBlurHandler: birthDateBlur,
    reset: birthDateReset
  } = useInput(value => value.trim().length > 5);

  const {
    value: country,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryHandler,
    inputBlurHandler: countryBlur,
    reset: countryReset,
  } = useInput((value) => value.length > 2);

  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityHandler,
    inputBlurHandler: cityBlur,
    reset: cityReset,
  } = useInput((value) => value.length > 5);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailHandler,
    inputBlurHandler: emailBlur,
    reset: emailReset,
  } = useInput((value) => value.length > 5);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordHandler,
    inputBlurHandler: passwordBlur,
    reset: passwordReset,
  } = useInput((value) => value.length > 5);

  const {
    value: password2,
    isValid: password2IsValid,
    hasError: password2HasError,
    valueChangeHandler: password2Handler,
    inputBlurHandler: password2Blur,
    reset: password2Reset,
  } = useInput((value) => value.length > 5);


  let formIsValid = false;
  if(firstNameIsValid && passwordIsValid && lastNameIsValid && countryIsValid
    && cityIsValid && emailIsValid && passwordIsValid){
    formIsValid = true;
  }

  return(
    <div className={styles.section}>
      <h1 className={styles.sectionTitle}>Welcome,</h1>
      <p className={styles.sectionSubTitle}>Please, register to continue</p>
      <form className={styles.sectionForm} onSubmit={sumbitHandler}>
        <div className={styles.sectionFormFields}>
          <p>First name</p>
          <input
            type="text" 
            placeholder='Your first name'
            onBlur={firstNameBlur}
            value={firstName}
            onChange={firstNameHandler} />
        </div>
        <div className={styles.sectionFormFields}>
          <p>Last name</p>
          <input
            type="text"
            placeholder='Your last name' 
            onBlur={lastNameBlur}
            value={lastName}
            onChange={lastNameHandler} />
        </div>
        <div className={styles.sectionFormFields}>
          <p>Birth date</p>
          <input
            type="date"
            placeholder='MM/DD/YYYY'
            onBlur={birthDateBlur}
            value={birthDate}
            onChange={birthDateHandler} />
        </div>
        <div className={styles.sectionFormFields}>
          <p>Country</p>
          <input 
            type="text" 
            placeholder='Your Country'
            onBlur={countryBlur}
            value={country}
            onChange={countryHandler} />
        </div>
        <div className={styles.sectionFormFields}>
          <p>City</p>
          <input 
            type="text" 
            placeholder='Your City' 
            onBlur={cityBlur}
            value={city}
            onChange={cityHandler} />
        </div>
        <div className={styles.sectionFormFields}>
          <p>E-mail</p>
          <input
            type="email"
            placeholder='A valid e-mail here'
            onBlur={emailBlur}
            value={email}
            onChange={emailHandler} />
        </div>
        <div className={styles.sectionFormFields}>
          <p>Password</p>
          <input
            type="password"
            placeholder='Your password'
            onBlur={passwordBlur}
            value={password}
            onChange={passwordHandler} />
        </div>
        <div className={styles.sectionFormFields}>
          <p>Password</p>
          <input
            type="password"
            placeholder='Confirm your password'
            onBlur={password2Blur}
            value={password2}
            onChange={password2Handler} />
        </div>

        {(firstNameHasError || lastNameHasError) && <p className={styles.sectionFormError}>
            insert a valid value for "name" field
          </p>
        }
        {countryHasError && <p className={styles.sectionFormError}>
            insert a valid value for "country" field
          </p>
        }
        {cityHasError && <p className={styles.sectionFormError}>
            "city" cannot be empty
          </p>
        }
        {emailHasError && <p className={styles.sectionFormError}>
            "email" must have "@"
          </p>
        }
        {passwordHasError && <p className={styles.sectionFormError}>
            "password" must have at least 5 characters
          </p>
        }
        {password2HasError && <p className={styles.sectionFormError}>
            the passwords doesn't match
          </p>
        }

        <button className={styles.sectionFormSubmit} type='submit'>Register Now</button>
      </form>
    </div>
  );
}