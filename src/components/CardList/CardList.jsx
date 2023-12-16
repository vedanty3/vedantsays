import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../card/Card";

const POST_PER_PAGE = 4;

const getData = async (page, cat) => {
  const response = await fetch(
    `${process.env.PORT_URI}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed");
  }
  return response.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);
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
