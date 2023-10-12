import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          className={`${styles.category} ${styles.style}`}
          href="/blog?cat=style"
        >
          <Image
            width={32}
            height={32}
            className={styles.image}
            src="/style.png"
            alt=""
          />
          Style
        </Link>
        <Link
          className={`${styles.category} ${styles.fashion}`}
          href="/blog?cat=style"
        >
          <Image
            width={32}
            height={32}
            className={styles.image}
            src="/fashion.png"
            alt=""
          />
          Fashion
        </Link>
        <Link className={`${styles.category} ${styles.food}`} href="/blog">
          <Image
            width={32}
            height={32}
            className={styles.image}
            src="/food.png"
            alt=""
          />
          Food
        </Link>
        <Link className={`${styles.category} ${styles.travel}`} href="/blog">
          <Image
            width={32}
            height={32}
            className={styles.image}
            src="/travel.png"
            alt=""
          />
          Travel
        </Link>
        <Link className={`${styles.category} ${styles.culture}`} href="/blog">
          <Image
            width={32}
            height={32}
            className={styles.image}
            src="/culture.png"
            alt=""
          />
          Culture
        </Link>
        <Link className={`${styles.category} ${styles.coding}`} href="/blog">
          <Image
            width={32}
            height={32}
            className={styles.image}
            src="/coding.png"
            alt=""
          />
          Coding
        </Link>
      </div>
    </div>
  );
}

export default CategoryList;
