import Button from "../../components/Button/Button";
import { Sidenav } from "../../layouts/Sidenav/Sidenav"
import styles from "./Dashboard.module.scss";
import AddNew from "../../assets/box.svg";
import cx from 'classnames';
import Card from "../../components/Card/Card";
import Eye from "../../assets/remove_red_eye-24px.svg";
import DebitCard from "../../features/DebitCard/DebitCard";
import DebitCardActions from "../../features/DebitCardActions/DebitCardActions";
import TransactionAccordian from "../../features/Transaction/Transaction";
import { useState } from "react";
import DashboardSM from "../DashboardSM/DashboardSM";
import AddCard from "../../features/AddCard/AddCard";
import useActiveCard, { TypeStateCard } from "../../store/useActiveCard";

const Dashboard = () => {
  const [cardShowHide, setCardShowHide] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const { data }: TypeStateCard = useActiveCard();

  return (
    <>
      <div className={styles.Dashboard}>
        <Sidenav />
        <div className={styles.Dashboard__body}>
          <p className={styles.Dashboard__body__title}>Available balance</p>
          <div className={styles.Dashboard__body__subheader}>
            <div className={styles.Dashboard__body__subheader__fir}>
              <span>$$</span>
              <p className={styles.Dashboard__body__subheader__title}>3,000</p>
            </div>
            <Button title="New Card" icon={AddNew} onClick={() => setOpenModal(true)} />
          </div>
          <div className={styles.Dashboard__body__tabs}>
            <span className={styles.Dashboard__body__tabs__tab}>
              My debit cards
            </span>
            <span className={cx(styles.Dashboard__body__tabs__tab, styles.Dashboard__body__tabs__unactive)}>
              All company cards
            </span>
          </div>
          <div className={styles.Dashboard__body__cards}>
            <Card>
              <div className={styles.Dashboard__body__cards__inner}>
                <div className={styles.Dashboard__body__cards__sectionOne}>
                  <p onClick={() => setCardShowHide((prev) => !prev)} className={styles.Dashboard__body__cards__sectionOne__cardno}>
                    <img src={Eye} alt="Eye" />{cardShowHide ? 'Show' : 'Hide'} card number</p>
                  <DebitCard cards={data.cards} cardShowHide={cardShowHide} />
                  <DebitCardActions />
                </div>
                <div className={styles.Dashboard__body__cards__sectionTwo}>
                  <TransactionAccordian transaction={data.cards} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className={styles.Dashboard__sm}>
        <DashboardSM />
      </div>
      <AddCard openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}

export default Dashboard;
