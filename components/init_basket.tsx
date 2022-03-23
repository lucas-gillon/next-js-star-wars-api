import { GetServerSideProps } from "next";
import { getDatabase } from "../src/get-database";
import { Layout } from "./layout";

export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();

  const getBasket = await mongodb.db().collection("basket").insertOne({
    items: [],
    total: 0,
  });

  return {
    props: {
      aknowledged: getBasket.acknowledged,
    },
  };
};

const InitBasket: React.FC<{ aknowledged: boolean }> = ({ aknowledged }) => {
  return (
    <Layout>
      <div className="container">
        <h4>{aknowledged}</h4>
      </div>
    </Layout>
  );
};
export default InitBasket;
