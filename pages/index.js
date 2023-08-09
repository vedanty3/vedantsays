import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 text-black gap-1 rounded-lg overflow-hidden">
          <img className="w-6 h-6" alt="" src={session.user.image} />
          <span className="px-2"> {session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
