/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { TypeCard } from "../../types/TypeDebitCards";
import styles from "./DebitCard.module.scss";
import AspireLogo from "../../assets/Aspire Logo (1).svg";
import Visa from "../../assets/Visa Logo.svg";
import cx from 'classnames';
import useActiveCard, { TypeStateCard } from "../../store/useActiveCard";
import Switch from "react-switch";
import { AnimatePresence, motion } from "framer-motion";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const DebitCard = ({ cards, cardShowHide }: { cardShowHide: boolean, cards: TypeCard[] }) => {
  const { selectedCard, setselectedCard }: any = useActiveCard();

  const { updateCard }: TypeStateCard = useActiveCard();

  const constraintsRef = useRef(null);

  const paginate = (newDirection: number) => {
    const newIndex = selectedCard + newDirection;
    if (newIndex >= 0 && newIndex < cards.length) {
      setselectedCard(newIndex);
    }
  };

  return (
    <div className={styles.DebitCard} ref={constraintsRef}>
      <div className={styles.DebitCard__outer}>
        <AnimatePresence mode="wait">
          {cards.map((item: TypeCard, index: number) => {
            return (
              index === selectedCard && (
                <motion.div
                  key={index}
                  className={cx(styles.DebitCard__inner, { [styles.FreezeIcon]: item.isFreeze })}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(_e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1); // swipe left
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1); // swipe right
                    }
                  }}
                >
                  <img src={AspireLogo} className={styles.DebitCard__inner__logo} alt="Aspire Logo" />
                  <div className={styles.DebitCard__inner__content}>
                    <p className={styles.DebitCard__inner__content__name}>{item?.cardDetails?.name}</p>
                    <p className={styles.DebitCard__inner__content__num}>
                      {!cardShowHide ? item?.cardNumber :
                        <>
                          {new Array(4).fill("x").map((_, i) => <span key={i}></span>)}
                          &nbsp;
                          {new Array(4).fill("x").map((_, i) => <span key={i + 4}></span>)}
                          &nbsp;
                          {new Array(4).fill("x").map((_, i) => <span key={i + 8}></span>)}
                          &nbsp;
                          <p>{item?.cardNumber?.slice(14, 19)}</p>
                        </>}
                    </p>
                    <p className={styles.DebitCard__inner__content__expiry}>
                      <span>Thru: {item?.expiry}</span>
                      <span>CVV: {!cardShowHide ? item?.cvv : "***"}</span>
                    </p>
                    <p className={styles.DebitCard__inner__content__expiry2}>
                      {!item.isFreeze ? 'Freeze:' : 'Unfreeze:'}
                      <Switch
                        height={16}
                        width={32}
                        handleDiameter={10}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        className={styles.CheckedIcon}
                        onChange={() => updateCard(selectedCard)}
                        checked={item.isFreeze}
                      />
                    </p>
                  </div>
                  <img src={Visa} className={styles.DebitCard__inner__logo2} alt="Visa Logo" />
                </motion.div>
              )
            );
          })}
        </AnimatePresence>

        <div className={styles.DebitCard__dots}>
          {cards.map((_item, index) => (
            <span
              key={index}
              className={cx({ [styles.Active]: index === selectedCard })}
              onClick={() => setselectedCard(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DebitCard;
