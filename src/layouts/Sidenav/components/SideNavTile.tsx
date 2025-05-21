import { useLocation } from "react-router-dom";
import { TypeSideNavTile } from "../../../types/Sidenavtile";
import styles from "../Sidenav.module.scss";
import cx from 'classnames';
import Card from "../../../assets/Card.svg";

const SideNavTile = ({ title, icon }: TypeSideNavTile) => {
  const { pathname } = useLocation();
  return (
    <div className={cx(styles.SidenavTile, { [styles.SidenavTile__active]: pathname === "/" && title == "Cards" })}>
      <img src={pathname === "/" && title == "Cards" ? Card : icon} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default SideNavTile;
