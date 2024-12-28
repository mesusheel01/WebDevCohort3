# Route groups

- We can use create folders like : (auth)/signin/page.tsx, has signin code and in page routing we need not to write auth/signin it will be just signin/ route to get to the signin page.

# [id] slug folder

- A folder or file in the form `[slug]` defines a **dynamic** parameter in the route (e.g., `/blog/[slug]` might match `/blog/hello-world` or `/blog/another-post`).

Inside your components, you can access this parameter via `params.slug`.

# [...module] catch all segment

- Maan lo kai saare routes hai after a course page like course/1/fo/2/3 to hum kai saare folders bana k code ko bs messy krenge and also we dont know how much folders or files we do have inside a partiucular module so rather than doing that we can
- check the app and go to http://localhost:3000/course/2/24/4/3445/24/242/42 it still will show catched route page.


# Catch all slug [[..slug]]

- You can also use double brackets like [[...slug]] to make the catch-all optional (so it can match /docs as well as /docs/anything/here).


**Client side rendering**

- React client side pr se request hit hota hai server pr au phir jo bhi html css js compile hota hai vo browser me show hota hai.

**ServerSide Rendering

- It is provided by nextjs where when we hit our deployed app it return initial html that is called server side rendering and if it have some async logic to load it will run and compiler on server dide only and then it will compile an return to DOM.

# Authentication in Next.js

- Next auth is a libray that lets you tdo authentication in NExt.s
- We can do this without next-auth but we should use next-auth

**Why not use localstorage and JWT?**

- As Next.js does server side rendering so we cant access jwt from localstorage and header approach and send it to backend for authentication or so if we try to do authentication with localstorage then we will have to use CSR and will lose the benefits of Next.js.
- Locastorage is a client side feature not server side so we cannot use in server side coding and so we cannot use jwt and localstorage in authentication in next.js.
