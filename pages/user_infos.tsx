import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { Layout } from "../components/layout";

const UserInfos = () => {
  const { user } = useUser();

  if (user) {
    return (
      <Layout>
        <div className="container">
          <h2>{user.name}</h2>
          <p>Verified email: {user.email_verified.toString()}</p>
          <p>{user.email}</p>
          <Link href={"/aip/auth/logout"}>
            <a>Logout</a>
          </Link>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="container">Please log in to see your infos</div>
      </Layout>
    );
  }
};

export default UserInfos;
