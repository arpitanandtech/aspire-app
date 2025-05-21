import { TypeCard } from "../../types/TypeCard";
import styles from "./Card.module.scss";

const Card = ({ children }: TypeCard) => {
  return (
    <div className={styles.Card}>
      {children}
    </div>
  )
}

export default Card
