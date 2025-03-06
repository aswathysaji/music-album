import { z } from "zod";

// Collection Schema
export const CollectionSchema = z.object({
  id: z.string(),
  name: z.string(),
  artist: z.string(),
  type: z.enum(["EP", "Album", "Single"]),
  songCount: z.number().int().nonnegative(),
  durationInSeconds: z.number().int().nonnegative(),
  sizeInBytes: z.number().int().nonnegative(),
  releasedOn: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date-time format",
  }),
  songs: z.array(
    z.object({
      title: z.string(),
      durationInSeconds: z.number().int().nonnegative(),
      sizeInBytes: z.number().int().nonnegative(),
      performers: z.array(z.string()),
    })
  ),
});

// API Responses
export const GetCollectionsResponseSchema = z.array(CollectionSchema);
export const GetCollectionDetailsResponseSchema = CollectionSchema;

// Infer TypeScript Type from Zod
export type Collection = z.infer<typeof CollectionSchema>;
export type CollectionsResponse = z.infer<typeof GetCollectionsResponseSchema>;
export type CollectionDetailsResponse = z.infer<typeof GetCollectionDetailsResponseSchema>;
