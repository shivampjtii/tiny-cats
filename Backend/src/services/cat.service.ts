import catModel from "../models/cat.model.ts";

export const createCatService = async (payload: object)=>{
    // console.log(payload)
    return await catModel.create(payload);
};

// get all cats
export const getAllCatsService = async()=>{
    return await catModel.find();
}

// single cat service
export const getSingleCatService = async (id: string)=>{
    return await catModel.findById(id)
}


export const searchCatService = async (query: string)=>{
    return await catModel.find({
        $or:[
            {
                name:{
                    $regex: query,
                    $options: 'i',
                }
            },
            {
                breed:{
                    $regex: query,
                    $options: 'i',
                }
            }
        ]
    })
}

export const recommendService = async (kidsFriendly: boolean, appartmentFriendly: boolean)=>{
    return catModel.find({
        kidsFriendly,
        appartmentFriendly
    })
}

