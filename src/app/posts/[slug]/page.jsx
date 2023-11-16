import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import decodeUriComponent from "decode-uri-component";
import { getMostPopularPosts, getEditorsPickPosts } from "@/app/page";

const getData = async (slug) => {
  const response = await fetch(
    `https://vedantsays-1xwz.vercel.app//api/posts/${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed");
  }
  return response.json();
};

async function SinglePage({ params }) {
  const mostPopularPosts = await getMostPopularPosts();
  const editorsPickPosts = await getEditorsPickPosts();
  const slug = params.slug;
  const encodedSlug = decodeUriComponent(slug);

  const data = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              {data?.createdAt && (
                <span className={styles.date}>
                  {new Date(data?.createdAt).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
              )}
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            dangerouslySetInnerHTML={{ __html: data?.desc }}
            className={styles.description}
          />
          <div className={styles.comments}>
            <Comments postSlug={encodedSlug} />
          </div>
        </div>
        <Menu
          mostPopularPosts={mostPopularPosts}
          editorsPickPosts={editorsPickPosts}
        />
      </div>
    </div>
  );
}

export default SinglePage;
