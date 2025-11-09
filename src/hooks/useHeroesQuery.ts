import axios from "axios";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";

const onError = () => {
  console.log("is Error in fatching heroes Data");
};
const onSuccess = () => {
  console.log("is Success in fatching heroes Data");
};
export const useHeroesQuery = (
  queryName: string,
  queryId?:string 
) => {
  
  const getSuperheroes = () => {
    return axios.get(
      `http://localhost:4000/superheroes${queryId ? "/" + queryId : ""}`
    );
  };
  // const [QueryWithID, setQueryWithID] = useState();
  const queryClient = useQueryClient();
const queryKey = queryId ? ["super-heroes", queryId] : ["super-heroes"]
  
 const queryHandlerOptions = queryId
    ? {
        initialData: () => {
          const cachedList = queryClient.getQueryData([queryName]);
          
          if (cachedList) {
            const found = cachedList.data.find(
              (e: any) => e.id === queryId
            );

            if (found) {
              return { data: found };
            }
          }

          return undefined;
        },
      }
    : {
        // select: (data) => {
        //   const handlerDate = data.data.map((data: any) => data.name);
        //   return handlerDate;
        // },
      };

 const query= useQuery(
    queryKey,
    getSuperheroes,
    // {    cacheTime: 5000,
    // staleTime: 30000,
    //   refetchOnMount: true,
    // refetchOnWindowFocus:'always',

    //   enabled: false,
    // onError: onError,
    // onSuccess: onSuccess,
    // }
    queryHandlerOptions
    //  {
    //   initialData: () => {
    //    console.log("res");
    //    const res = queryClient.getQueryData(queryName).data.find((result: any) => result.id === parseInt(queryId));
    //    console.log("res");
    //       if (res) {
            
    //         return { data: res };
    //       }
    //       return undefined;
    //     },}
  );
console.log("query",query);

  return query
};
