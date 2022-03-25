import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { Layout } from "../components/layout";
import Image from "next/image";

const UserInfos = () => {
  const { user } = useUser();

  if (user) {
    return (
      <Layout>
        <div className="container">
          <h2>{user.name}</h2>
          <Image
            src={user.picture}
            alt="user picture"
            width={"200px"}
            height={"200px"}
          />
          <p>Email : {user.nickname}@gmail.com</p>
          <Link href={"/api/auth/logout"}>
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
