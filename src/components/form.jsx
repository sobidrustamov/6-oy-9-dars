import { useForm } from "react-hook-form";
import { useCreateTodo } from "../pages/todos/service/mutation/useCreateTodo";
import { client } from "../config/query-client";

export const Form = () => {
  const { register, reset, handleSubmit } = useForm();
  const { mutate, isPending } = useCreateTodo();

  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        console.log(res);
        client.invalidateQueries(["todo"]);
      },
      onError: (error) => {
        console.log(error);
      },
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <input
          className="border p-2 my-1"
          type="text"
          {...register("title", { required: true })}
          placeholder="Title"
        />
      </div>
      <div>
        <input
          className="border p-2 my-1"
          type="text"
          {...register("description", { required: true })}
          placeholder="Description"
        />
      </div>
      <button className="bg-blue-300 p-2">save</button>
    </form>
  );
};
