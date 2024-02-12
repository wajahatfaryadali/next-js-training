## Node Js version  21.4.0

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Day 1
Basic Structure and Pages added with routes

### Day 2
Layout out and Navbar for both desktop and mobile

### Day 3
Image tag of Next js : use for optimizing image and handle responsiveness itself
Height and weidth is important or we can use container but while using container
give Image tag fill attribute

Next Js Image didn't allow us to use external image links until we add them into 
next.config.js
```
images:{
    remotePatterns: {
        protocol: 'https',
        hostname: 'www.imgUrl.com'
    }
}
```

#### Client and Server Side Rendering
- CSR : everything on client side, initial loading maybe slow but after intial loading make site faster, better for user attraction, and not good for seo
- SSR : everything on server, server sends files to browser that may make it slower, but it is good for slow and old devices, we cannot use event handlers on server site rendering, it is good for seo point of view

### Day 4
- #### Hydration error
    - means when next js render component it render's first on server and then on client (as in case of client side rendering) it checks that data (variables or states) should be same on both client and server side if it's not then it shows error.
    - ex: suppose we want to render a = 10; as it is constant it will render 10 on both sides SSR and CSR 
    - but if use use a = math.random() it will gen two differnet values for CS and SS it will cause error 
    - ##### Solution
    - We have 3 posible solutions for this
    - ###### first is using useState and useEffect hook
    - set state to false and on initial render in useEffect set state to true then it will render only on CS
    - ###### second is using dynamic import of next js 
    ```
    const comp = dynamic(() => '@/component/path/comp.js', {ssr: false})
    ```
    - ###### third is using surpassHydrationWarning in html tag 
    - <div surpassHydrationWarning> {a} </div>
    - the above line says there is error but i want to ignore it

- #### Combining CSC and SSC
    - if we use client side component inside of server side component then it will still remain SSC.

- ## Client Side Navigation
    - Link 
        ```
        // using link tag is useful but it prefetch the links before user click on it 
        // which help us to navigate faster
        // but if we have multiple links then it can cuase performance issues
        // we can stop prefetch using the below prop in link
        <Link href='/' prefetch={false} />
        ```

    - useRouter() hook
        ```
        // useRouter is a routing hook 
        // next/router is an older version and next/navigation is new version router
        // we can use this by doing this

        const router = useRouter();

        1- router.push(path); // to perform client side navigation

        2- router.replace(path) // it will not add new entry to browser history stack
            
        3- router.refresh() // it will refresh current route 

        3- router.back() // it move to back route we came from

        4- router.forward() // it move to next route we came back from
        ```

    - usePathname() hook
        ```
        // will give us pathname like /, or /home, or /contact

        const path = usePathname();

        consle.log(path);
        ```

    - useSearchParams() hook
        ```
        // will give us query parameters from url 
        // suppose we have a url 
        // www.url.com?id=123

        const queryParams = useSearchParams();

        const id = queryParams.get("id")
        consle.log(id);
        ```

- ## Server Side Navigation
    ```
        // destruct params or searchParams from props and console and check 
    ```