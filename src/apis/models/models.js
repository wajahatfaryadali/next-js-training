import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            min: 5,
            max: 20
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        img: {
            type: String
        },
        isAdmin: {
            type: Boolean,
            default: false

        }
    },
    { timestamps: true }
)

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img: {
            type: String
        },
        userID: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
            unique: true,

        }
    },
    { timestamps: true }
)


export const User = mongoose.model('User') || mongoose.model('User', userSchema);
export const Post = mongoose.model('Post') || mongoose.model('Post', postSchema);