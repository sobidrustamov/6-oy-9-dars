import { Link } from "react-router-dom";
import { useGetTodo } from "./service/query/useGetTodo";
import { Card } from "../../components/card";
import { Form } from "../../components/form";

export const Todos = () => {
  const { data, isLoading } = useGetTodo();

  return (
    <div className="pt-5">
      <Link className="text-2xl hover:bg-yellow-100 p-3" to="/users">
        Users
      </Link>
      <Form />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {data?.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};
