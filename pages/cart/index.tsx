import { GetServerSideProps } from "next";
import { Layout } from "../../components/layout";
import { getDatabase } from "../../src/get-database";

export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();

  const response = await mongodb
    .db()
    .collection("basket")
    .findOne({ user: "Lucas Gillon" });
  const cart = await JSON.parse(JSON.stringify(response));

  return {
    props: {
      user: cart.user,
      items: cart.items,
      total: cart.total_amount,
    },
  };
};

const Cart: React.FC<{ user: string; items: string[]; total: number }> = ({
  user,
  items,
  total,
}) => {
  return (
    <Layout>
      <div className="container">
        <h2>
          Cart of <u>{user}</u> :
        </h2>
        {items.length > 0
          ? items.map((element) => {
              return (
                <li key={element}>
                  <u>{element}</u>
                </li>
              );
            })
          : "Nothing in the cart"}
        {total > 0 ? `Total amount : ${total} Credits` : ""}
      </div>
    </Layout>
  );
};

export default Cart;
