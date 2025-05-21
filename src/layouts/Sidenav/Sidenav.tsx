import styles from "./Sidenav.module.scss";
import AspireLogo from "../../assets/Aspire Logo.svg";
import SIDENAV_DATA from "./data/data";
import SideNavTile from "./components/SideNavTile";

export const Sidenav = () => {
  return (
    <div className={styles.Sidenav}>
      <img className={styles.Sidenav__logo} src={AspireLogo} alt="Aspire Logo" />
      <p className={styles.Sidenav__title}>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
      <div className={styles.Sidenav__content}>
        {
          SIDENAV_DATA.map((item, index) => {
            return (<SideNavTile title={item?.title} icon={item.icon} key={index} />);
          })
        }
      </div>
    </div>
  )
}
