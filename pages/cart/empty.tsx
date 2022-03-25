import { GetServerSideProps } from "next";
import Link from "next/link";
import { Layout } from "../../components/layout";
import { getDatabase } from "../../src/get-database";

export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();
  const response = await mongodb
    .db()
    .collection("basket")
    .updateOne({}, { $set: { items: [], total_amount: 0 } });
  const dropCart = await JSON.parse(JSON.stringify(response));
  console.log(dropCart);

  return {
    props: {
      acknowledged: dropCart.acknowledged,
    },
  };
};

const EmptyCart: React.FC<{ acknowledged: boolean }> = ({ acknowledged }) => {
  if (acknowledged) {
    return (
      <Layout>
        <div className="container">
          <h4>Your cart has successfully been emptied 😉</h4>
          <li>
            <Link href={"/vehicles"}>
              <a>
                <strong>See list of vehicles</strong>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/cart"}>
              <a>
                <strong>See your cart</strong>
              </a>
            </Link>
          </li>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="container">
          an unexpected error occurred, please try again
        </div>
        <li>
          <Link href={"/vehicles"}>
            <a>
              <strong>See list of vehicles</strong>
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/cart"}>
            <a>
              <strong>See your cart</strong>
            </a>
          </Link>
        </li>
      </Layout>
    );
  }
};

export default EmptyCart;
