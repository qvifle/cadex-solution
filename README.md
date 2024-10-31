# Next.js Project - Cadex Solution 

This project is a [Next.js](https://nextjs.org) application, initially bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), showcasing a responsive website with modern form handling, routing, and UI design.

## Getting Started

To get started, first run the development server:

```bash
npm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser to view the result.

## Tech Stack

This project leverages a range of cutting-edge technologies:

- **Next.js** – Framework for React with server-side rendering and static site generation
- **TypeScript** – Type-safe JavaScript for more maintainable code
- **Panda CSS** – A CSS-in-JS library for styling
- **Shadcn UI** – A UI kit for consistent, reusable components
- **React Hook Form + Zod** – Form handling and validation
- **Next.js Route Handlers** – Simplified backend routes within Next.js

## Website

The solution is hosted on Vercel. Visit the live site [here](https://cadex-solution-uudz.vercel.app/).

## Features Completed

- **Responsive Design** – Optimized for various screen sizes
- **Sticky Header and Footer** – Persistent navigation for easy access
- **Embedded YouTube Video** – With optimizations for better performance
- **Required Form Fields** – Validation handled with `react-hook-form` and `zod`
- **Functional API** – Integrated with Next.js route handlers
- **Hosted on Vercel** – Deployed on a modern platform for fast and reliable performance

## Project Insights

This project was built using **Panda CSS**, a CSS-in-JS library, as specified in the assignment. While CSS-in-JS is often useful for creating component-based styling in libraries like Panda CSS and Stitches, I found it less suitable for this particular task because it increases component size by embedding CSS within the component itself.

For simpler styling tasks, such as centering an element, a new style has to be added in the code. To manage this, I divided the main layout into smaller, reusable components, structuring the homepage into sections. This approach helps keep the code modular and organized.

CSS-in-JS libraries like Panda CSS are, in my view, most beneficial when developing a custom UI kit. Since this project uses an existing UI kit (Shadcn UI), simpler styling methods may have been more efficient here.

---

Enjoy exploring this project!