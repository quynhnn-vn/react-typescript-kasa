import { useEffect, useState } from "react";
import styles from "./Collection.module.css";
import Loader from "../Loader/Loader";
import CollectionItem from "./CollectionItem";
import { LodgementType } from "../../shared/types";
import { getLodgements } from "../../shared/mockApi";

export default function Collection() {
  const [lodgements, setLodgements] = useState<LodgementType[] | null>(null);

  useEffect(() => {
    getLodgements().then((res: LodgementType[]) => {
      setLodgements(res);
    });
  }, []);

  return lodgements === null ? (
    <Loader />
  ) : (
    <section className={styles.Collection}>
      {lodgements?.map((lodgement) => (
        <CollectionItem key={lodgement.id} lodgement={lodgement} />
      ))}
    </section>
  );
}
