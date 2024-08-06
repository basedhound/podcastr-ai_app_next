<div align="center">
    <a href="https://podcastr-fv.vercel.app" target="_blank">
      <img src="public/preview.png" alt="Project Banner">
    </a>
  <h3 align="center">AI Podcast Platform</h3>
</div>

##  <br /> 📋 <a name="table">Table of Contents</a>

- ✨ [Introduction](#introduction)
- ⚙️ [Tech Stack](#tech-stack)
- 📝 [Features](#features)
- 🚀 [Quick Start](#quick-start)

##  <br /> <a name="introduction">✨ Introduction</a>

**[EN]** A cutting-edge AI SaaS platform that empowers users to create, discover, and enjoy podcasts with advanced features such as text-to-audio conversion using multi-voice AI powered by OpenAI API, podcast thumbnail image generation, and seamless playback. The platform includes secure authentication using Clerk, ensuring a safe and personalized user experience.

**[FR]** Une plateforme SaaS d'IA de pointe qui permet aux utilisateurs de créer, découvrir et apprécier des podcasts avec des fonctionnalités avancées telles que la conversion texte-en-audio utilisant une IA multi-voix alimentée par l'API OpenAI, la génération d'images miniatures de podcasts et une lecture fluide. La plateforme inclut une authentification sécurisée utilisant Clerk, garantissant une expérience utilisateur sûre et personnalisée.

##  <br /> <a name="tech-stack">⚙️ Tech Stack</a>

- [**React**](https://react.dev/reference/react) is a popular JavaScript library for building user interfaces, particularly single-page applications, by creating reusable UI components and managing the state of the application efficiently.

- [**Next.js**](https://nextjs.org/docs) is a powerful React framework for building server-rendered applications and static websites with ease. It offers features like automatic code splitting, server-side rendering, and static site generation.

- [**TypeScript**](https://www.typescriptlang.org/docs/) is a statically typed superset of JavaScript that enhances code quality and maintainability by providing optional static typing, early error detection, and robust tooling.

- [**Convex**](https://docs.convex.dev/home) is a modern backend-as-a-service (BaaS) that simplifies data management, real-time synchronization, and serverless functions, allowing developers to focus on building features without worrying about infrastructure.

- [**OpenAI API**](https://platform.openai.com/docs/api-reference/introduction) is a leading artificial intelligence research and deployment company known for its advanced AI models, including GPT-4, which provides state-of-the-art natural language processing capabilities.

- [**Clerk**](https://clerk.com/docs) is an authentication and user management platform that simplifies adding secure and scalable authentication to web applications, providing features like multi-factor authentication, social logins, and user profiles.

- [**shadcn/ui**](https://ui.shadcn.com/docs) is a component library that provides reusable, customizable, and accessible UI components, designed to work seamlessly with modern frontend frameworks like React.

- [**Tailwind**](https://v2.tailwindcss.com/docs) is a utility-first CSS framework that allows developers to rapidly build custom designs without writing custom CSS, promoting consistency and productivity through pre-defined classes.



## <br/> <a name="features">📝 Features</a>

👉 **Robust Authentication**: Secure and reliable user login and registration system.

👉 **Modern Home Page**: Showcases trending podcasts with a sticky podcast player for continuous listening.

👉 **Discover Podcasts Page**: Dedicated page for users to explore new and popular podcasts.

👉 **Fully Functional Search**: Allows users to find podcasts easily using various search criteria.

👉 **Create Podcast Page**: Enables podcast creation with text-to-audio conversion, AI image generation, and previews.

👉 **Multi Voice AI Functionality**: Supports multiple AI-generated voices for dynamic podcast creation.

👉 **Profile Page**: View all created podcasts with options to delete them.

👉 **Podcast Details Page**: Displays detailed information about each podcast, including creator details, number of listeners, and transcript.

👉 **Podcast Player**: Features backward/forward controls, as well as mute/unmute functionality for a seamless listening experience.

👉 **Responsive Design**: Fully functional and visually appealing across all devices and screen sizes.


## <br /> <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

<br/>**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

<br/>**Cloning the Repository**

```bash
git clone {git remote URL}
```

<br/>**Installation**

Let's install the project dependencies, from your terminal, run:

```bash
npm install
# or
yarn install
```

<br/>**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Convex
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'
NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'

# OpenAI (Use it in Convex dashboard -> https://dashboard.convex.dev)
OPENAI_API_KEY=
```

Replace the placeholder values with your actual credentials:

- [Clerk](https://dashboard.clerk.com)
- [Convex](https://dashboard.convex.dev)
- [OpenAI](https://platform.openai.com/)

<br/>**Running the Project**

Installation will take a minute or two, but once that's done, you should be able to run the following command:

```bash
npm run dev
# or
yarn dev
```

Open [`http://localhost:3000`](http://localhost:3000) in your browser to view the project.