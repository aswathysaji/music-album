import {  GetCollectionsResponseSchema } from "../../../../schema";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCollectionsFetch = () => {
  const fetchCollections = async () => {
    const res = await axios.get("http://localhost:3000/collections");
    // Validate with Zod
    const result = GetCollectionsResponseSchema.safeParse(res.data);
    if (!result.success) {
      throw new Error("Invalid API response format");
    }
    return result.data; // Return validated data
  };
  const {
    data: collections,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["collections"],
    queryFn: fetchCollections,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
  return { collections, isLoading, error };
};
