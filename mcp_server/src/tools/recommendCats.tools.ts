import axios from "axios"

export const recommendCatsTool = async (kidsFriendly:boolean, appartmentFriendly:boolean)=>{
    const res = await axios.post("http://localhost:3000/api/cats/recommend",{
        kidsFriendly,
        appartmentFriendly
    });

    return res.data;
};

