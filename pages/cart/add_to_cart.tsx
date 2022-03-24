import { ObjectID } from "bson";
import { GetServerSideProps } from "next";
import { Layout } from "../../components/layout";
import { getDatabase } from "../../src/get-database";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const vehicle = context.query.item;

  const mongodb = await getDatabase();
  const response = await mongodb
    .db()
    .collection("basket")
    .findOne({ user: "Lucas Gillon" });
  const cart = await JSON.parse(JSON.stringify(response));

  let items = cart.items;
  items.push(vehicle);

  const updateCart = await mongodb
    .db()
    .collection("basket")
    .updateOne({ _id: new ObjectID(cart._id) },{$set: { items: items }});

  return {
    props: {
      vehicle: vehicle,
      cart: cart,
    },
  };
};

const Cart: React.FC<{ vehicle: string; cart: unknown }> = ({
  vehicle,
  // cart
}) => {
  return (
    <Layout>
      <div className="container">{vehicle}</div>
    </Layout>
  );
};

export default Cart;
