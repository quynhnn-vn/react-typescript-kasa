import { useEffect, useState } from "react";
import { QualityType } from "../../shared/types";
import Loader from "../Loader/Loader";
import styles from "./Qualities.module.css";
import Collapse from "../Collapse/Collapse";
import { getQualities } from "../../shared/mockApi";

export default function Qualities() {
  const [qualities, setQualities] = useState<QualityType[] | null>(null);

  useEffect(() => {
    getQualities().then((res: QualityType[]) => setQualities(res));
  }, []);

  return qualities === null ? (
    <Loader />
  ) : (
    <section className={styles.Qualities}>
      {qualities?.map((quality) => (
        <Collapse
          key={quality.title}
          title={quality.title}
          content={quality.content}
        />
      ))}
    </section>
  );
}
