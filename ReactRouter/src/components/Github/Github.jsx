import React, { useState, useEffect } from "react";
import {useLoaderData} from "react-router-dom";
function GitHub() {
    const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/buddhamagar-09")
//       .then((resolve) => resolve.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className="h-124 w-full bg-gray-700 flex  flex-col space-y-10">
      <div className=" h-24 flex items-center justify-center text-white mt-10 space-x-10">
        <h1 className="font-bold text-3xl">Name: {data.login}</h1>
        <p className="text-xl">Id:{data.id}</p>
      </div>
    <div className="flex space-x-8 items-center justify-center text-white">
        
      <img src={data.avatar_url} alt="" className="h-64 w-64" />
      <p className="">Bio: {data.bio}</p>
    </div>
      
    </div>
  );
}
export default GitHub;

export const GithubInfoLoader = async () => {
    let response = await fetch('https://api.github.com/users/buddhamagar-09');

    let data = await response.json();
    return data;
}