import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetTodo = () => {
  return useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      request.get("/todos").then((res) => {
        return res.data;
      }),
  });
};
