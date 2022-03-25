import { useUser } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import { Layout } from "../../components/layout";
import { getDatabase } from "../../src/get-database";

export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();

  const response = await mongodb
    .db()
    .collection("basket")
    .findOne({ "user.email": "lucas.gillon98@gmail.com" });
  const cart = await JSON.parse(JSON.stringify(response));

  return {
    props: {
      user_name: cart.user.name,
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
                  <li key={element[0]}>
                    {element[0]}, <u>{element[1]}</u> credits
                  </li>
                );
              })
            : "Nothing in the cart"}<br /><br /><br /><br />
          {total > 0 ? <div>Total amount : {total} credits</div> : ""}
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
