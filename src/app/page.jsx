import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/menu/Menu";

const getFeaturedPost = async () => {
  let response = await fetch(`http://localhost:3000/api/featured`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed");
  }
  response = await response.json();
  return response[Math.floor(Math.random() * response.length)];
};

export default async function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const featuredPost = await getFeaturedPost();
  return (
    <div className={styles.container}>
      <Featured featuredPost={featuredPost} />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
