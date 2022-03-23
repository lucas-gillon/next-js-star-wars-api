import { Layout } from "../components/layout";
import MainCategories from "../components/main-categories";
import { UserProvider, useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }
  return (
    <UserProvider>
      <Layout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "3em",
          }}
        >
          <h1>STAR WARS VEHICLE SHOP</h1>
        </div>
        <MainCategories />
        <div className="container">
          <li>
            <Link href={"/api/auth/login"}>login</Link>
          </li>
        </div>
      </Layout>
    </UserProvider>
  );
}
