# Portfolio Project

Here too.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Directory Structure](#directory-structure)
3. [Functionality Overview](#functionality-overview)
4. [Packages Used](#packages-used)
5. [Scripts](#scripts)
6. [Installation](#installation)
7. [Running the Project](#running-the-project)

## Project Overview

The Personal Portfolio Website is a project designed to create a simple and attractive online space where I can show off my personal information, education, and social media links. It uses tools like React and Material-UI to make the site look good and work well on any device. Users can easily navigate between different sections, including a homepage for introductions, an academics page for my educational background, a social page with links to my profiles, a projects page to display my work, and a contact page for getting in touch. Overall, this portfolio will help me share my skills and experiences with potential employers and collaborators in an easy-to-understand way.

## Directory Structure

```bash
root/
│
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Academics.jsx
│   │   ├── Dashbord.jsx
│   │   ├── Home.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── Profile.jsx
│   │   └── Projects.jsx
│   ├── redux/
│   │   ├── slices/
│   │   │   └── navSlice.js
│   │   └── store.js
│   ├── resources/
│   │   ├── css/
│   │   │   ├── academics.css
│   │   │   ├── dashbord.css
│   │   │   ├── home.css
│   │   │   ├── profile.css
│   │   │   ├── projects.css
│   │   │   └── shared.css
│   │   └── images/
│   ├── Utils/
│   │   └── Constants.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── pakage.json
└── README.md
```

## Functionality Overview

### Home Page

- Personalized greeting

### Profile Page

- Links to social profiles

### Projects Page

- Grid of personal projects with descriptions and links

### Academics Page

- Timeline of educational background

### 404 Page

- Custom error page
- User data fetch (for learning express)

## Packages Used

- React
- Material UI
- React Router
- Redux Toolkit
- Axios

## Scripts

Runs the app in development mode

```bash
npm start
```

Builds the app for production

```bash
npm run build
```

Runs tests

```bash
npm run test
```

Checks code quality

```bash
npm run lint
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Ann2902/PorfolioProject
```

Navigate to the project directory:

```bash
cd PorfolioProject
```

Install dependencies:

```bash
npm install
```

## Running the Project

After installation, run the project locally:

```bash
npm start
```
