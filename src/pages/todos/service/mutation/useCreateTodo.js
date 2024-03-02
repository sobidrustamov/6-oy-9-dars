import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: (data) =>
      request.post("/todos", data).then((res) => {
        return res.data;
      }),
  });
};
