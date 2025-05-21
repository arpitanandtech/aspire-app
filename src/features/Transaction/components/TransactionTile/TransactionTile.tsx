import { TypeTransaction } from "../../../../types/TypeDebitCards";
import styles from "../../Transaction.module.scss";
import Card from "../../../../assets/CardWhite.svg";

const TransactionTile = ({ item }: { item: TypeTransaction }) => {

  return (
    <div className={styles.TransactionTile}>
      <div className={styles.TransactionTile__outer}>
        <div className={styles.TransactionTile__left}>
          <div className={styles.TransactionTile__left__icon} style={{ backgroundColor: item?.color }}>
            <img src={item?.iconComp} alt={item?.title} />
          </div>
          <div className={styles.TransactionTile__left__content}>
            <p>{item?.title}</p>
            <span>{item?.date}</span>
          </div>
        </div>
        <div className={styles.TransactionTile__right}>
          <p style={{ color: item?.type === "CREDIT" ? '#01d167' : '#222' }}>{item?.type === "CREDIT" ? '+' : '-'}S$ {item?.amount}</p>
        </div>
      </div>
      <p className={styles.TransactionTile__p}>
        <span>
          <img src={Card} alt="Card Image" />
        </span>{item?.type === "CREDIT" ? 'Refund on debit card' : 'Charged on debit card'}
      </p>
    </div>
  )
}

export default TransactionTile;