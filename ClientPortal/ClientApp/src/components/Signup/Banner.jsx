import styles from '../Signup/Banner.module.css';

function Banner() {
  return (
    <div className={styles.banner}>This page of the form requests your SSN to (a) confirm your citizenship status for eligibility purposes and/or (b) send you a payment that must also be reported to the Internal Revenue Service using your SSN. This request is voluntary, but not providing your SSN may affect your ability to become a Member and/or receive payments. It is requested pursuant to 42 U.S.C. Chapter 129 - National and Community Service, 42 U.S. C. Chapter 66 - Domestic Volunteer Services, and Executive Order 9397, as amended.</div>
  )
}

export default Banner