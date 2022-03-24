import Link from "next/link";
import Image from "next/image";

export const MainCategories: React.FC = () => {
  return (
    <div className="container">
      <h4
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "3em",
        }}
      >
        Main Categories :
      </h4>
      <fieldset>
        <Link href={"/vehicles"} passHref>
          <Image
            className="img"
            src={"/images/star-wars-ships.jpeg"}
            width="700"
            height="525"
            alt="star wars ships"
          />
        </Link>
        <Link href={"/vehicles"}>
          <a>
            <strong>List of all vehicles</strong>
          </a>
        </Link>
      </fieldset>
    </div>
  );
};

export default MainCategories;
