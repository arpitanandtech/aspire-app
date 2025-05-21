import { TypeInput } from "../../types/TypeInput";
import styles from "./Input.module.scss";


const Input = ({ handleBlur, name, type, placeholder, label, value, onChange }: TypeInput) => {
  return (
    <div className={styles.Input}>
      <label className={styles.Input__label}>{label}</label>
      <input className={styles.Input__input} onBlur={handleBlur} name={name} placeholder={placeholder} type={type} value={value} onChange={onChange} />
    </div>
  )
}

export default Input
