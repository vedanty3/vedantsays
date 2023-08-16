import NavBar from "@/components/NavBar";
import { useSession, signIn, signOut } from "next-auth/react";

function Layout({ children }) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex items-center bg-blue-900 w-screen h-screen">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <NavBar />
      <div className="bg-white flex-grow mb-2 mt-2 mr-2 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
}

export default Layout;
