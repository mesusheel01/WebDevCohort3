# Notes

- Top level  is to orgranize your application's code and static assets

- App router in the app folder of Next.js is a key feauter of next js where it introduces new routing paradigm. It replaces the older page routing  and provide more flexibility, scalability, and mordern features for building React applications.

- The routing pages will be inside of the /app folder for page routing.

- Structure of the app router: 
app/
  layout.js       // Root layout for all pages
  page.js         // Route: '/' (Home Page)
  about/
    page.js       // Route: '/about'
    layout.js     // Nested layout for '/about'
  dashboard/
    settings/
      page.js     // Route: '/dashboard/settings'

- Top level files are userd to configure your application, manage dependencies, run middleware , integrate monitoring tools, and define enviroment vaiables.

- Should we use traditional seperate backend folder for api routing or writing backend or should we use next.js backend structure ?
  - It depends if :
   
    - Small to Medium Projects: Ideal for projects where backend logic is lightweight, like form submissions, basic CRUD operations, or simple data processing.

    - Server-Side Rendering (SSR) or Static Site Generation (SSG): When you need tight integration with Next.js features like SSR, SSG, or Incremental Static Regeneration (ISR).

    - Prototyping or MVPs: Simplifies the stack and reduces setup overhead.

    - Low Backend Complexity: For applications with minimal business logic or server-side operations.

***Why should we have both frontend and backend in a single file in next.js?***

- Single codebase for all your codebase.
- No cors issues, single domain name for your FE and BE.
- Ease of deployment, deploy a single codebase.

***How to render the loading state if we dont use state in next js?***

- Just create another page in the particular route folder named loading and if the page.tsx have too many asynchronous operations than next js will fall back to loading page until page.tsx is full returned.


**How to write routes or backends in Next.js**

- We can create our routing folder structure and the file we will name inside as route.ts rather than page.tsx because it shows that it is a routing page.





