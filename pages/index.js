import { useSession, signIn, signOut } from "next-auth/react";

function Home() {
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
    <div className="bg-blue-900 min-h-screen">
      <div>Logged in as {session.user.email}</div>
    </div>
  );
}

export default Home;
