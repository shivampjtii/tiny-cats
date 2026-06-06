// import type { Document } from "mongoose";

export interface ICat{
    name: string;
    breed: string;
    description:string;
    kidsFriendly: boolean
    appartmentFriendly: boolean
    lifeSpan: number;
    energyLevel: string;
    image: string;
    color: string;
    createdAt?: Date;
    updatedAt?: Date;
}