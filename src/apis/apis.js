const url = 'https://jsonplaceholder.typicode.com/posts'

export const getPosts = async () => {
    // adding {cache: 'force-cache'} will cache api response for later fast rendering this is default
    // adding {cache: 'no-store'} will refetch data each time 
    // adding {next: {revalidate: 3600}} will refetch data after each 3600s

    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Something went wrong in line 6 apis');
    }

    return res.json();
}

export const getSinglePostById = async (id) => {
 
    const res = await fetch(`${url}/${id}`)
    if (!res.ok) {
        throw new Error('Something went wrong in line 20 apis');
    }

    return res.json();
}