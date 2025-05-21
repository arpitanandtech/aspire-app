
import Header from "../../layouts/Header/Header";
import styles from "./DashboardSM.module.scss";
import MOBILE_SIDENAV_DATA from "./data";
import cx from 'classnames';
import Add from "../../assets/box (1).svg";
import DebitCard from "../../features/DebitCard/DebitCard";
import DebitCardActions from "../../features/DebitCardActions/DebitCardActions";
import { useState } from "react";
import Eye from "../../assets/remove_red_eye-24px.svg";
import TransactionAccordian from "../../features/Transaction/Transaction";
import AddCard from "../../features/AddCard/AddCard";
import useActiveCard, { TypeStateCard } from "../../store/useActiveCard";

const DashboardSM = () => {
  const [cardShowHide, setCardShowHide] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { data }: TypeStateCard = useActiveCard();
  return (
    <div className={styles.DashboardSM}>
      <div className={styles.DashboardSM__header}>
        <Header />
        <div className={styles.DashboardSM__subHeader}>
          <div className={styles.DashboardSM__subheader}>
            <div className={styles.DashboardSM__subheader__fir}>
              <span>$$</span>
              <p className={styles.DashboardSM__subheader__title}>3,000</p>
            </div>
            <p className={styles.DashboardSM__subheader__add} onClick={() => setOpenModal(true)}><img src={Add} alt="Add" /> New Card</p>
          </div>
        </div>
        <div className={styles.DashboardSM__tabs}>
          <span className={styles.DashboardSM__tabs__tab}>
            My debit cards
          </span>
          <span className={cx(styles.DashboardSM__tabs__tab, styles.DashboardSM__tabs__unactive)}>
            All company cards
          </span>
        </div>
        <div className={styles.DashboardSM__cards}>
          <p onClick={() => setCardShowHide((prev) => !prev)} className={styles.DashboardSM__tag}><img src={Eye} alt="Eye" />{cardShowHide ? 'Show' : 'Hide'} card number</p>
          <DebitCard cards={data.cards} cardShowHide={cardShowHide} />
        </div>
        <DebitCardActions />
        <div className={styles.DashboardSM__trans}>
          <TransactionAccordian transaction={data.cards} />
        </div>
      </div>
      <div className={styles.DashboardSM__bottomnav}>
        {MOBILE_SIDENAV_DATA.map((item, index) => {
          return (
            <div className={styles.DashboardSM__bottomnav__item} key={index}>
              <img src={item.icon} alt={item?.title} />
              <p className={cx({ [styles.Active]: item.title === "Cards" })}>{item.title}</p>
            </div>
          );
        })}
      </div>
      <AddCard openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  )
}

export default DashboardSM;
