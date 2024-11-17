import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllCategories = async () => {
    const ALL_CATEGORIES_QUERY = defineQuery(`
        *[_type == "category"] | order(name asc)
        `);

        try{
            // Use sanityFetch to send the query
            const categories = await sanityFetch({
                query: ALL_CATEGORIES_QUERY,
            });

            // Return the list of categories, or an empty array if none are found
            return categories.data || [];
        } catch (error) {
            console.error("Error fetching all categories:", error);
            return [];
        }
}