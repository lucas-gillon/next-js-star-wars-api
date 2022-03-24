import { useUser } from "@auth0/nextjs-auth0";
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
      user_name: cart.user,
      items: cart.items,
      total: cart.total_amount,
    },
  };
};

const Cart: React.FC<{ user_name: string; items: string[]; total: number }> = ({
  user_name,
  items,
  total,
}) => {
  const { user } = useUser();
  if (user) {
    return (
      <Layout>
        <div className="container">
          <h2>
            Cart of <u>{user_name}</u> :
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
  } else {
    return (
      <Layout>
        <div className="container">Please log in to see your cart</div>
      </Layout>
    );
  }
};

export default Cart;
