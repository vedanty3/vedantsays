import Image from "next/image";
import styles from "./featured.module.css";
import Link from "next/link";

function Featured({ featuredPost }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Vedant Yetekar here!</b> {"Let's"} explore infinite tech
        horizons.
      </h1>
      {featuredPost && (
        <div className={styles.post}>
          {featuredPost.img && (
            <div className={styles.imgContainer}>
              <Image
                className={styles.image}
                src={featuredPost.img}
                alt={featuredPost.title}
                fill
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <Link href={`/posts/${featuredPost.slug}`}>
              <h1
                className={styles.postTitle}
                dangerouslySetInnerHTML={{ __html: featuredPost.title }}
              />
            </Link>
            <p
              className={styles.postDesc}
              dangerouslySetInnerHTML={{
                __html: featuredPost.desc
                  .substring(
                    0,
                    Math.min(featuredPost.desc.lastIndexOf(".", 300) + 1, 300)
                  )
                  .trim(),
              }}
            />
            <Link href={`/posts/${featuredPost.slug}`}>
              <button className={styles.button}>Read More</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Featured;
