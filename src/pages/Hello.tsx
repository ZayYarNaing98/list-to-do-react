import React from "react";
import { getUsers } from "../api/userRequest";
import { useQuery } from "@tanstack/react-query";

const Hello = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({ queryKey: ["users"], queryFn: getUsers });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <h1>This is Hello Page</h1>
        {users.data.map((user: any, key: number) => (
          <ul key={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.gender}</li>
            <li>{(user.status = 1 ? "active" : "suspend")}</li>
            <li>{user.address}</li>
            <li>{user.phone}</li>
          </ul>
        ))}
    </>
  );
};

export default Hello;
