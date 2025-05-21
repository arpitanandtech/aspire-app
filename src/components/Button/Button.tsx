import { TypeButton } from "../../types/TypeButton";
import styles from "./Button.module.scss";
import cx from 'classnames';

const Button = ({ title, icon, onClick, className }: TypeButton) => {
  return (
    <button className={cx(styles.Button, className)} onClick={onClick}>
      {icon && <img src={icon} alt="Icon" />}
      {title}
    </button>
  )
}

export default Button
