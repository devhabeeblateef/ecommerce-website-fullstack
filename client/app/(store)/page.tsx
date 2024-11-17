import ProductsView from "@/components/ProductsView";
import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import Image from "next/image";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  console.log("The Products from main: ", products)
  return (
       <>
       <p>Hello World 123!</p>

       {/* Render all products */}
       <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">

        <ProductsView products={products} categories={categories}/>
       </div>
       </>
  );
}
