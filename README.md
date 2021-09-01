<h1 align="center">
  Sanity Portfolio Website
</h1>

## 🧐 What's inside?

The following technologies were used to develop this website:

1.  **React**
2.  **Sanity.io**
3.  **TailwindCSS**
4.  **Netlify**
5.  **GitHub**

## 💻 What was installed?

### GitHub setup

    echo "# sanity-portfolio" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/vbarsott/sanity-portfolio.git
    git push -u origin main

### React setup

    npx create-react-app sanity-portfolio
    cd sanity-portfolio/
    npm start
    npm i react-router-dom
    npm i react-social-icons

### Sanity.io setup

    sanity init (PS: considering sanity alredy installed)
    project name: studio
    sanity start (redirected to localhost:3333)
    npm i @sanity/client
    npm i @sanity/block-content-to-react
    npm i @sanity/image-url
    Add CORS origin: http://localhost:3000 (sanity.io website)

## 💫 Deploy with Netlify

https://vanessareactsanityportfolio.netlify.app
