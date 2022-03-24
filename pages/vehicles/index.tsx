import { GetServerSideProps } from "next";
import Link from "next/link";
import { Layout } from "../../components/layout";
import Image from "next/image";
import Capitalize from "../../src/capitalize";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://swapi.dev/api/vehicles");
  const data = await response.json();
  const vehicles = await JSON.parse(JSON.stringify(data));

  return {
    props: {
      vehicles: vehicles.results,
    },
  };
};

const AllVehicles: React.FC<{ vehicles: any }> = ({ vehicles }) => {
  return (
    <Layout>
      <div className="container">
        <h4>
          <u>List of all vehicles :</u>
        </h4>
        <div className="cards">
          {vehicles.map(
            (element: {
              name: string;
              url: string;
              vehicle_class: string;
              cost_in_credits: number;
            }) => {
              return (
                <fieldset key={element.name}>
                  <Link
                    href={`/vehicles/${parseInt(element.url.split("/")[5])}`}
                    passHref
                  >
                    <Image
                      className="img"
                      src={`/images/temporary.png`}
                      width="700"
                      height="525"
                      alt="temporary"
                    />
                  </Link>
                  <Link
                    href={`/vehicles/${parseInt(element.url.split("/")[5])}`}
                  >
                    {element.name}
                  </Link>
                  <p className="card-text" style={{ textAlign: "left" }}>
                    <li>
                      Vehicle class : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <u>{Capitalize(element.vehicle_class)}</u>
                    </li>
                    <li>
                      Price : <u>{element.cost_in_credits}</u> credits{" "}
                    </li>
                  </p>
                </fieldset>
              );
            }
          )}
        </div>
      </div>
    </Layout>
  );
};
export default AllVehicles;
