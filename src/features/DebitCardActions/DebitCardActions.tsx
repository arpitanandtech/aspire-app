import IconButton from "../../components/IconButton/IconButton";
import styles from "./DebitCardActions.module.scss";
import Freeze from "../../assets/Freeze card.svg";
import SpeedLimit from "../../assets/Set spend limit.svg";
import Gpay from "../../assets/GPay.svg";
import ReplaceCard from "../../assets/Replace card.svg";
import CancelCard from "../../assets/Deactivate card.svg";
const ICON_DATA = [
  {
    icon: Freeze,
    title: "Freeze Card"
  },
  {
    icon: SpeedLimit,
    title: "Set Spend Limit"
  },
  {
    icon: Gpay,
    title: "Add to GPay"
  },
  {
    icon: ReplaceCard,
    title: "Replace card",
  },
  {
    icon: CancelCard,
    title: "Cancel Card"
  }
];
const DebitCardActions = () => {
  return (
    <div className={styles.DebitCardActions}>
      {ICON_DATA.map((item, index) => {
        return (<div key={index} className={styles.DebitCardActions__action}>
          <IconButton key={index} icon={item?.icon} />
          <p>{item?.title}</p>
        </div>)
      })}
    </div>
  )
}

export default DebitCardActions
