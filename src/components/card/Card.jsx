import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum consectetur, adipisicing elit. Et, nihil?</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          saepe atque fugit enim quae corporis qui, voluptatum, iusto sunt
          laboriosam cumque aliquid animi aperiam sit exercitationem obcaecati
          consequuntur ab officiis!
        </p>
        <Link className={styles.link} href="/">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
