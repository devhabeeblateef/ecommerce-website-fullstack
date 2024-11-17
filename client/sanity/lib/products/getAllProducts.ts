import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";


export const getAllProducts = async () => {
    const ALL_PRODUCTS_QUERY = defineQuery(`
        *[
            _type == "product"
        ] | order(name asc)
         `);

         try{
            // use sanity fetch to send teh query
            const products = await sanityFetch({
                query: ALL_PRODUCTS_QUERY,
            });
            console.log("API Fetch: ", products)

            // Return the list of products, or an empty array if none are found
            return products.data || [];
            
        } catch (error) {
            console.error("Error fetching all products: ", error);
            return []
        }
};