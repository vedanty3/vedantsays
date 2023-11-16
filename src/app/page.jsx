import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/menu/Menu";

console.log(process.env.NEXTAUTH_URL);

const getFeaturedPost = async () => {
  let response = await fetch(
    `https://vedantsays-1xwz.vercel.app//api/featured`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed");
  }
  response = await response.json();
  return response[Math.floor(Math.random() * response.length)];
};

export const getMostPopularPosts = async () => {
  let response = await fetch(`https://vedantsays-1xwz.vercel.app//api/menu`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed");
  }
  return response.json();
};

export const getEditorsPickPosts = async () => {
  let response = await fetch(
    `https://vedantsays-1xwz.vercel.app//api/menu/editorsPick`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed");
  }
  return response.json();
};

export default async function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const featuredPost = await getFeaturedPost();
  const mostPopularPosts = await getMostPopularPosts();
  const editorsPickPosts = await getEditorsPickPosts();

  return (
    <div className={styles.container}>
      <Featured featuredPost={featuredPost} />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu
          mostPopularPosts={mostPopularPosts}
          editorsPickPosts={editorsPickPosts}
        />
      </div>
    </div>
  );
}
