import { api, baseUrl } from "./constants";

const postsUrl = baseUrl+api.posts;
const usersUrl = baseUrl+api.users;

export const getPosts = async () => {    
    const res = await fetch(postsUrl, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Something went wrong in line 6 apis');
    }

    return res.json();
}

export const getSinglePostById = async (id) => {
 
    const res = await fetch(`${postsUrl}/${id}`)
    if (!res.ok) {
        throw new Error('Something went wrong in line 20 apis');
    }

    return res.json();
}

export const getSingleUserById = async (userId) => {
 
    const res = await fetch(`${usersUrl}/${userId}`)
    console.log(res)
    if (!res.ok) {
        console.log("error ********", res)
        throw new Error('Something went wrong in line 20 apis');
    }

    return res.json();
}