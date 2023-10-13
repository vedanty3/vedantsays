import Image from "next/image";
import styles from "./featured.module.css";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Vedant Yetekar here! </b>Explore boundless tech possibilities
        with me.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sequi!
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            pariatur, repellendus harum molestiae rem est! Nesciunt aperiam
            neque culpa delectus quo, fugit perferendis beatae enim, quaerat,
            asperiores ipsam amet quod laborum commodi dolorem quos quibusdam!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
