import { useParams } from "react-router-dom";

function User()
 {
    const {userName} = useParams();
return(
    <h1 className="text-center bg-gray-700 p-5 text-2xl text-white font-bold">Hi,{userName}</h1>
)
 }
 export default User;