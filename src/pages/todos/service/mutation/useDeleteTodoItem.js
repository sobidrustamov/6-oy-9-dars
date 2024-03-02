import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
export const useDeleteTodoItem = () => {
  return useMutation({
    mutationFn: (id) => request.delete(`/todos/${id}`),
  });
};
