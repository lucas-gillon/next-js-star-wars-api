import { GetServerSideProps } from "next";
import { Layout } from "../../components/layout";
import Capitalize from "../../src/capitalize";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const vehicleId = context.params.vehicle;

  const response = await fetch(`https://swapi.dev/api/vehicles/${vehicleId}`);
  const data = await response.json();
  const vehicle = await JSON.parse(JSON.stringify(data));

  return {
    props: {
      vehicle: vehicle,
    },
  };
};

const VehicleInfos: React.FC<{ vehicle: any }> = ({ vehicle }) => {
  return (
    <Layout>
      <div className="container">
        <h4>
          Infos for <u>{vehicle.name} :</u>
        </h4>
        <li>
          <u>Vehicle class</u>: {Capitalize(vehicle.vehicle_class)}
        </li>
        <li>
          <u>Length</u>: {vehicle.length}
        </li>
        <li>
          <u>Manufacturer</u>: {vehicle.manufacturer}
        </li>
        {vehicle.passengers === "0" ? (
          ""
        ) : (
          <li>
            <u>Max passengers</u>: {vehicle.passengers}
          </li>
        )}
        {vehicle.cost_in_credits !== "unknown" ? (
          <li>
            <u>Price</u>: {vehicle.cost_in_credits} credits
          </li>
        ) : (
          <li>
            <u>Price</u>: {vehicle.cost_in_credits}
          </li>
        )}
        <Link href={`/cart/add_to_cart?item=${vehicle.name}&amount=${parseInt(vehicle.cost_in_credits)}`}>
          <a>Add to cart</a>
        </Link>
      </div>
    </Layout>
  );
};
export default VehicleInfos;
