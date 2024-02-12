import { api, baseUrl } from "./constants";

const postsUrl = baseUrl+api.posts;
const usersUrl = baseUrl+api.users;

export const getPosts = async () => {
    // adding {cache: 'force-cache'} will cache api response for later fast rendering this is default
    // adding {cache: 'no-store'} will refetch data each time 
    // adding {next: {revalidate: 3600}} will refetch data after each 3600s

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
 
    console.log('*************** userId *************** ', userId)
    const res = await fetch(`${usersUrl}/${userId}`)
    console.log(res)
    if (!res.ok) {
        throw new Error('Something went wrong in line 20 apis');
    }

    return res.json();
}