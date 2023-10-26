import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

function Card({ key, item }) {
  return (
    <div key={key} className={styles.container}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={item.img} alt="" fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 dangerouslySetInnerHTML={{ __html: item.title }} />
        </Link>
        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item.desc.substring(0, 210) }}
        />
        <Link className={styles.link} href={`/posts/${item.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
