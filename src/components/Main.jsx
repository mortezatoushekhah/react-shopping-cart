import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <>
      <main className="row bg col-2">

        <div className="product-row">
          {
            products.map((product) => 
            (
              <Product key={product.id} product={product} onAdd={onAdd} />
            ))
          }
        </div>
      </main>
    </>
  );
}

// import React from 'react';
// import Product from './Product';

// export default function Main(props) {
//   const { products } = props;
//   return (
//     <main className="block col-2">
//       <h2>Products</h2>
//       <div className="row">
//         {products.map((product) => (
//           <Product key={product.id} product={product} ></Product>
//         ))}
//       </div>
//     </main>
//   );
// }
