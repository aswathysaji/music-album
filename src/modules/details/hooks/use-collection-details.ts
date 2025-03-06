import { GetCollectionDetailsResponseSchema } from "../../../../schema";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

export const useCollectionDetails = () => {
  const params = useParams();
  const collectionId = params.id;
  if (!collectionId) throw new Error("Invalid collection id");
  const fetchCollections = async () => {
    const res = await axios.get(`http://localhost:3000/collections/${collectionId}`);
    // Validate with Zod
    const result = GetCollectionDetailsResponseSchema.safeParse(res.data);
    if (!result.success) {
      console.error("Validation Error:", result.error.format());
      throw new Error("Invalid API response format");
    }
    return result.data; // Return validated data
  };
  const {
    data: collection,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["collectionDetails"],
    queryFn: fetchCollections,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
  const collectionName = collection?.name
  return { collection, collectionName,isLoading, error };
};
