import { Layout } from "../components/layout";
import MainCategories from "../components/main-categories";

export default function Home() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "3em"
        }}
      >
        <h1>STAR WARS VEHICLE SHOP</h1>
      </div>
      <MainCategories />
    </Layout>
  );
}
