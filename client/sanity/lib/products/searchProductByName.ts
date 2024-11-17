import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live";

export const searchProductByName = async (searchParams: string) => {
    const PRODUCT_SEARCH_QUERY = defineQuery(`
        * [
        _type == "product"
        && name match $searchParams
        ] | order(name asc)
         `);

         try{
            // Use Sanity Fetch to send the query and pass the search parameter with a wildcard

            const products = await sanityFetch({
                query: PRODUCT_SEARCH_QUERY,
                params: {
                    searchParams: `${searchParams}*`, 
                    // Append wild card for partial match
                },
            });

            // Return the list of products or an empty array if none are found
            return products.data || [];
         }catch (error){
            console.error("Error fetching products by name: ", error);
            return [];
         }
};