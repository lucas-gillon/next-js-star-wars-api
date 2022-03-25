import { ObjectID } from "bson";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { Layout } from "../../components/layout";
import { getDatabase } from "../../src/get-database";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const vehicle = context.query.item;

  const mongodb = await getDatabase();
  const response = await mongodb
    .db()
    .collection("basket")
    .findOne({ "user.email": "lucas.gillon98@gmail.com" });
  const cart = await JSON.parse(JSON.stringify(response));

  const items = cart.items;

  const findItem = items.find(
    (element: (string | string[])[]) =>
      element[0] === vehicle
  );
  console.log(findItem);

  // if (cart.items.includes(findItem)) {
  //   await mongodb
  //     .db()
  //     .collection("basket")
  //     .updateOne({}, { $set: { items: [], total_amount: 0 } });
  // }

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
          {" has successfully been added to your cart 😉"}
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
