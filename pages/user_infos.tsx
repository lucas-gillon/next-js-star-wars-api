import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { Layout } from "../components/layout";

const UserInfos = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    console.log(user);
    return (
      <Layout>
        <div className="container">
          <h2>{user.name}</h2>
          <p>Verified email: {user.email_verified.toString()}</p>
          <p>{user.email}</p>
          <a href="/api/auth/logout">Logout</a>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="container">
          <h2>Please log in to see user infos</h2>
          <Link href="/api/auth/login">
            Login
          </Link>
        </div>
      </Layout>
    );
  }
};

export default UserInfos;
