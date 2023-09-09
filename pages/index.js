import Section1 from "@/components/HomeComponents/Section1/Section1";
import Section2 from "@/components/HomeComponents/Section2/Section2";
import { Suspense, useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";
export default function Home(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center">
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      </div>
    );
  }
  return (
    <div className="align-element py-20">
      <Suspense fallback={<p>...Loading</p>}>
        <Section1 />
      </Suspense>
      <Suspense fallback={<p>...Loading</p>}>
        <Section2 products={props.products} />
      </Suspense>
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
