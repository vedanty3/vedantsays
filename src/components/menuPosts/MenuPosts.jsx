import Link from "next/link";
import styles from "./menuPosts.module.css";
import Image from "next/image";

function MenuPosts({ mostPopularPosts, editorsPickPosts, withImage }) {
  return (
    <div className={styles.items}>
      {(withImage ? editorsPickPosts : mostPopularPosts)?.map((post) => {
        return (
          <Link
            key={post.id}
            href={`/posts/${post.slug}`}
            className={styles.item}
          >
            {withImage && (
              <div className={styles.imageContainer}>
                <Image src={post.img} alt="" fill className={styles.image} />
              </div>
            )}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles[post.catSlug]}`}>
                {post.catSlug}
              </span>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <div className={styles.detail}>
                <span className={styles.username}>{post?.user?.name}</span>{" "}
                <span className={styles.date}>
                  -{" "}
                  {new Date(post?.createdAt).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default MenuPosts;
