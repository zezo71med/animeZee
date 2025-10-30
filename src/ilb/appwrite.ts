const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;

import { Client, Databases, ID, Query } from "appwrite";
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);
export const databases = new Databases(client);
export const updateSearchCount = async (searchTerm: string, movie: any) => {
  try {
    const result = await databases.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.equal("movie_id", movie.id),
    ]);
    if (result.documents.length > 0) {
      const doc = result.documents[0];
      const response = await databases.updateDocument(
        DATABASE_ID,
        TABLE_ID,
        doc.$id,
        { count: doc.count + 1 }
      );
      return response;
    } else {
      const response = await databases.createDocument(
        DATABASE_ID,
        TABLE_ID,
        ID.unique(),
        {
          movie_id: movie.id,
          searchTerm: searchTerm,
          count: 1,
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }
      );
      return response;
    }
  } catch (error) {
    console.error("Error updating search count:", error);
    throw error;
  }
};
export const getTrendingSearches = async () => {
  try {
    const result = await databases.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.orderDesc("count"),
      Query.limit(5),
    ]);
    return result.documents;
  } catch (error) {
    console.error("Error fetching trending searches:", error);
    throw error;
  }
};
