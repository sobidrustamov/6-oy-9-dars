import { useDeleteTodoItem } from "../pages/todos/service/mutation/useDeleteTodoItem";
import { client } from "../config/query-client";
export const Card = (props) => {
  const { mutate, isPending } = useDeleteTodoItem();

  const deleteItem = () => {
    mutate(props.id, {
      onSuccess: (res) => {
        console.log(res.data);
        client.invalidateQueries(["todo"]);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  return (
    <div className="border p-3 ">
      <h1 className="mb-3 text-3xl">{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={deleteItem} className="mt-3 bg-red-300 p-2">
        {isPending ? "Loading..." : "delete"}
      </button>
    </div>
  );
};
