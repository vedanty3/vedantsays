import CardList from "@/components/CardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/menu/Menu";
import { getMostPopularPosts, getEditorsPickPosts } from "../page";

const BlogPage = async ({ searchParams }) => {
  const mostPopularPosts = await getMostPopularPosts();
  const editorsPickPosts = await getEditorsPickPosts();
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu
          mostPopularPosts={mostPopularPosts}
          editorsPickPosts={editorsPickPosts}
        />
      </div>
    </div>
  );
};

export default BlogPage;
