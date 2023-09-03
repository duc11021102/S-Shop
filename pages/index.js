import Loading from "@/components/Layout/Loading";
import dynamic from "next/dynamic";
const Section1 = dynamic(
  () => import("../components/HomeComponents/Section1/Section1"),
  {
    loading: () => {
      <Loading />;
    },
  }
);

const Section2 = dynamic(
  () => import("../components/HomeComponents/Section2/Section2"),
  {
    loading: () => {
      <Loading />;
    },
  }
);

export default function Home(props) {
  return (
    <div className="align-element py-20">
      <Section1 />
      <Section2 products={props.products} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://fakestoreapi.com/products").catch(
    (error) => {
      console.log(error);
    }
  );
  const result = await response.json();

  return {
    props: {
      products: result,
      loading: false,
    },
  };
}
