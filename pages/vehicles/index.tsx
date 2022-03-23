import { GetServerSideProps } from "next";
import Link from "next/link";
import { Layout } from "../../components/layout";

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
        {vehicles.map((element: { name: string; url: string }) => {
          return (
            <li key={element.name}>
              <Link href={`/vehicles/${parseInt(element.url.split("/")[5])}`}>
                {element.name}
              </Link>
            </li>
          );
        })}
      </div>
    </Layout>
  );
};
export default AllVehicles;
