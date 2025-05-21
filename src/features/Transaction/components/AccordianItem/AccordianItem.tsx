/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import styles from '../../Transaction.module.scss';
import { TypeAccordian } from '../../../../types/TypeAccordian';
import Arrow from "../../../../assets/down-arrow.svg";
import TransactionTile from '../TransactionTile/TransactionTile';
import useActiveCard from '../../../../store/useActiveCard';
const AccordionItem = ({ handleToggle, active, header, id, icon, transaction }: TypeAccordian) => {

  const contentEl = useRef<any>();

  const { selectedCard }: any = useActiveCard();

  return (
    <div className={styles.rcAccordionCard}>
      <div className={styles.rcAccordionHeader} onClick={() => handleToggle(Number(id))}>
        <div
          className={`${styles.rcAccordionToggle} p-3 ${active?.toString() === id ? styles.active : ''}`}
        >
          <div className={styles.rcAccordionShowIcon}>
            <img src={icon} alt={header} />
            <h5 className={styles.rcAccordionTitle}>{header}</h5>
          </div>
          <img src={Arrow} alt="Arrow" className={styles.rcAccordionIcon} />
        </div>
      </div>
      <div
        ref={contentEl}
        className={`${styles.rcCollapse} ${active?.toString() === id ? styles.show : ''}`}
        style={
          active?.toString() === id
            ? { height: `${contentEl.current?.scrollHeight}px` }
            : { height: '0px' }
        }
      >
        <div className={styles.rcAccordionBody}>
          {id == "1" && transaction[selectedCard]?.transaction.map((item, index) => {
            return <TransactionTile key={index} item={item} />
          })}

          {id == "0" && <div className={styles.rcAccordionBody2}>
            <p>NAME: {transaction[selectedCard || 0]?.cardDetails?.name}</p>
            <p>PAN: {transaction[selectedCard || 0]?.cardDetails?.pan?.toUpperCase()}</p>
          </div>}
        </div>
        {id == "1" && <div className={styles.rcAccordionBtn}>
          View all card transaction
        </div>}
      </div>
    </div>
  );
};

export default AccordionItem;
