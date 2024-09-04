"use client";

import { requestFetchTrips } from "@/requests/trip";

export default function Test() {
  const fetchUsers = () => {
    requestFetchTrips({
      populate: [
        { path: "owner", select: ["name"] }
      ]
    })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <div
      onClick={() => {
        fetchUsers();
      }}
    >
      Test
    </div>
  );
}
