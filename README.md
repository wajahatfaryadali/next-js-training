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

