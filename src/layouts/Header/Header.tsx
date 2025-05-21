import styles from "./Header.module.scss";
import Logo from "../../assets/Logo (2).svg";

const Header = () => {
  return (
    <div className={styles.Header}>
      <p>Account Balance</p>
      <img src={Logo} alt="Logo" />
    </div>
  )
}

export default Header
