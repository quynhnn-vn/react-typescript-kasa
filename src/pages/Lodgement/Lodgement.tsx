import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Collapse from "../../components/Collapse/Collapse";
import Loader from "../../components/Loader/Loader";
import Rating from "../../components/Rating/Rating";
import Tag from "../../components/Tag/Tag";
import { getLodgementById } from "../../shared/mockApi";
import { LodgementType } from "../../shared/types";
import Error from "../Error/Error";
import styles from "./Lodgement.module.css";

export default function Lodgement() {
  const { lodgementId } = useParams();

  const [lodgement, setLodgement] = useState<LodgementType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (lodgementId) {
      getLodgementById(lodgementId)
        .then((res) => {
          if (res) {
            setLodgement(res);
            setLoading(false);
          }
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, [lodgementId]);

  const getEquipments = (equipments: string[]) => {
    return (
      <ul>
        {equipments.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  };

  return loading ? (
    <Loader />
  ) : !lodgement ? (
    <Error />
  ) : (
    <main>
      <Carousel pictures={lodgement.pictures} />
      <section className={styles.LodgementHeader}>
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
      </section>
      <section className={styles.LodgementHeader}>
        <div className={styles.LodgementTags}>
          {lodgement.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <Rating rate={lodgement.rating} />
      </section>
      <section className={styles.LodgementContent}>
        <Collapse title="Description" content={lodgement.description} />
        <Collapse
          title="Équipements"
          content={getEquipments(lodgement.equipments)}
        />
      </section>
    </main>
  );
}
