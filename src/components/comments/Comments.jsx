import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

function Comments() {
  const status = true;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="write a comment..." />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              width={50}
              height={50}
              src="/p1.jpeg"
              className={styles.image}
              alt=""
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>02.05.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            ullam.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              width={50}
              height={50}
              src="/p1.jpeg"
              className={styles.image}
              alt=""
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>02.05.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            ullam.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              width={50}
              height={50}
              src="/p1.jpeg"
              className={styles.image}
              alt=""
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>02.05.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            ullam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
