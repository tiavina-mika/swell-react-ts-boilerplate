import * as React from "react";
import { useEffect, useState } from "react";
import swell from 'swell-js';
import { SwellResponse } from 'swell-response-type';
import "./styles.css";

const App = () => {
  const [products, setProdroducts] = useState<SwellResponse>();
  console.log(products);

  useEffect(() => {
    const getProducts = async (): SwellResponse => {
      swell.init('mystore', 'pk_myapikeys');

      const result = await swell.products.list({
        // category: 't-shirts',
        limit: 15,
        page: 1
      });
      setProdroducts(result);
      return result;
    };
    getProducts();
  }, []);
  return (
    <div className="App">
      <h1>Swell</h1>
      <h2>Hi! This is a swell api starter pack for TypeScript and React</h2>
      <p>The results are shown in the console below if your keys are correct</p>
    </div>
  );
}

export default App;
