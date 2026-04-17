import { ArrowRight } from "lucide-react";
import { getAboutData } from "@/constants/about";
import styles from "./About.module.css";

interface AboutProps {
  lang: string;
}

export default function About({ lang }: AboutProps) {
  const data = getAboutData(lang);

  if (!data) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <span className={styles.label}>
              About Us
            </span>

            <h2 className={styles.title}>
              {data.title}
            </h2>

            <div className={styles.divider} />

            <p className={styles.description}>
              {data.description}
            </p>

            <button className={`${styles.button} group`}>
              <span className={styles.buttonText}>
                {data.buttonText}
              </span>
              <ArrowRight className={styles.buttonIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}