import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tag from "../../components/Tag/Tag";
import { getLodgementById } from "../../shared/mockApi";
import { LodgementType } from "../../shared/types";
import styles from "./Lodgement.module.css";

export default function Lodgement() {
  const { lodgementId } = useParams();
  const [lodgement, setLodgement] = useState<LodgementType>();

  useEffect(() => {
    if (lodgementId) {
      getLodgementById(lodgementId).then((res) => {
        if (res) {
          setLodgement(res);
        }
      });
    }
  }, [lodgementId]);

  return !lodgement ? null : (
    <main>
      <img src={lodgement.pictures[0]} alt={lodgement.title} />
      <div className={styles.LodgementHeader}>
        <div>
          <h1 className={styles.LodgementTitle}>{lodgement.title}</h1>
          <h3 className={styles.LodgementLocation}>{lodgement.location}</h3>
        </div>
        <div className={styles.LodgementHost}>
          <h2 className={styles.LodgementHostName}>{lodgement.host.name}</h2>
          <img
            className={styles.LodgementHostImage}
            src={lodgement.host.picture}
            alt={lodgement.host.name}
          />
        </div>
      </div>
      <div className={styles.LodgementTags}>
        {lodgement.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </main>
  );
}
