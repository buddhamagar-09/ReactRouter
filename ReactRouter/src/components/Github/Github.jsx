import React, { useState, useEffect } from "react";
import {useLoaderData} from "react-router-dom";
function GitHub() {
  const data = useLoaderData();

  if (!data) {
    return (
      <div className="text-white text-center mt-10">
        Failed to load GitHub profile
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-900 text-black dark:text-white flex flex-col space-y-10 items-center justify-center">

      <h1 className="font-bold text-3xl">
        Name: {data.login}
      </h1>

      <p className="text-xl">Id: {data.id}</p>

      <img
        src={data.avatar_url}
        alt={data.login}
        className="h-64 w-64 rounded-full border-4 border-white"
      />

      <p className="max-w-md text-center">
        Bio: {data.bio || "No bio available"}
      </p>
    </div>
  );
}
export default GitHub;

export const GithubInfoLoader = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/buddhamagar-09"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};