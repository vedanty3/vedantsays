import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/menuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = ({ mostPopularPosts, editorsPickPosts }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts mostPopularPosts={mostPopularPosts} withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts editorsPickPosts={editorsPickPosts} withImage={true} />
    </div>
  );
};

export default Menu;
