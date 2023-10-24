import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../card/Card";

const POST_PER_PAGE = 2;

const getData = async (page) => {
  const response = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed");
  }
  return response.json();
};

const CardList = async ({ page }) => {
  const { posts, count } = await getData(page);
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
