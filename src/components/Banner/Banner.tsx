import styles from "./Banner.module.css";
import bannerHome from "../../assets/banner-home.jpeg";
import bannerAbout from "../../assets/banner-about.jpeg";
import { BannerProps } from "../../shared/types";

export default function Banner(props: BannerProps) {
  const { page } = props;
  let bannerSource = bannerHome;
  if (page === "about") bannerSource = bannerAbout;

  return (
    <section
      className={styles.Banner}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5)), url('${bannerSource}')`,
      }}
    >
      <h2 className={styles.BannerText}>
        <span>Chez vous,</span>
        <span>partout et ailleurs</span>
      </h2>
    </section>
  );
}
