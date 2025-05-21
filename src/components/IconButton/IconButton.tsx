import { TypeIconButton } from "../../types/TypeIconButton";
import styles from "./IconButton.module.scss";

const IconButton = ({ icon }: TypeIconButton) => {
  return (
    <div className={styles.IconButton}>
      {<img src={icon} alt="Icons" />}
    </div>
  )
}

export default IconButton
