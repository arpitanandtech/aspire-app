import { useState } from "react";
import AccordionItem from "./components/AccordianItem/AccordianItem";
import styles from "./Transaction.module.scss";
import AccordianOne from "../../assets/Group 11889.svg";
import AccordianTwo from "../../assets/Group 11889 (1).svg";
import { TypeCard } from "../../types/TypeDebitCards";

const TransactionAccordian = ({ transaction }: { transaction: TypeCard[] }) => {

  const [active, setActive] = useState<null | number>(1);

  const handleToggle = (index: number) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  }

  return (
    <div className={styles.TransactionAccordian}>
      <AccordionItem
        transaction={transaction}
        key={0}
        id="0"
        active={active}
        handleToggle={handleToggle}
        header="Card Details"
        icon={AccordianOne}
      />
      <AccordionItem
        transaction={transaction}
        key={1}
        id="1"
        active={active}
        handleToggle={handleToggle}
        header="Recent Transactions"
        icon={AccordianTwo}
      />
    </div>
  )
}

export default TransactionAccordian;