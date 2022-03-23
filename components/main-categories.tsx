import Head from "next/head";
import Link from "next/link";

export const MainCategories: React.FC = ({ children }) => {
  return (
    <div className="container">
      <h4>Main Categories :</h4>
      <Link href={"/vehicles"}>
        <a><strong>List of all vehicles</strong></a>
      </Link>
    </div>
  );
};

export default MainCategories
