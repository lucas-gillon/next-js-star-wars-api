import { GetServerSideProps } from "next";
import Link from "next/link";
import { Layout } from "../../components/layout";
import { getDatabase } from "../../src/get-database";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const vehicle = context.query.item;
  // const amount: string = context.query.amount.toString();

  const mongodb = await getDatabase();
  const response = await mongodb
    .db()
    .collection("basket")
    .findOne({ "user.email": "lucas.gillon98@gmail.com" });
  const cart = await JSON.parse(JSON.stringify(response));

  const items = cart.items;

  const findItem = items.filter(
    (element: (string | string[])[]) => element[0] !== vehicle
  );

  const removeItem = items.filter(
    (element: (string | string[])[]) => element[0] === vehicle
  );

  await mongodb
    .db()
    .collection("basket")
    .updateOne(
      {},
      {
        $set: {
          items: findItem,
          total_amount: cart.total_amount - parseInt(removeItem[0][1]),
        },
      }
    );

  return {
    props: {
      vehicle: vehicle,
    },
  };
};

const Cart: React.FC<{ vehicle: string }> = ({ vehicle }) => {
  return (
    <Layout>
      <div className="container">
        <h4>
          {vehicle}
          {" has successfully been removed from your cart 😉"}
        </h4>
        <li>
          <Link href={"/vehicles"}>
            <a>
              <strong>Return to the list of vehicles</strong>
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
};

export default Cart;
