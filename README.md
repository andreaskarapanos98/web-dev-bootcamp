# Web Development Bootcamp Projects

19 smaller projects I built while learning web development, organized by topic. The HTML, CSS and JavaScript ones run live in your browser:

**Live site: https://andreaskarapanos98.github.io/web-dev-bootcamp/**

Larger projects from the same course have their own repositories: [secrets-auth-app](https://github.com/andreaskarapanos98/secrets-auth-app), [family-travel-tracker](https://github.com/andreaskarapanos98/family-travel-tracker), [blog-rest-api](https://github.com/andreaskarapanos98/blog-rest-api) and [permalist](https://github.com/andreaskarapanos98/permalist).

| Folder | Projects | Practices |
|---|---|---|
| `html/` | Movie Ranking, Birthday Invite, Multi-page Portfolio | HTML structure, links, images, file paths |
| `css/` | Color Vocab, Motivation Meme, Flag of Laos, Web Design Agency, Flexbox Pricing Table, Mondrian, TinDog | Selectors, box model, positioning, flexbox, grid, media queries, Bootstrap |
| `javascript/` | Dicee, Simon Game | DOM, events, jQuery, game state, audio |
| `node-express/` | QR Code Generator, Password-protected Page, Band Name Generator | Node.js modules, npm, Express routes, EJS |
| `apis/` | Random Secrets, Jokes API | axios, consuming and building REST APIs |
| `sql/` | Travel Tracker, World Capital Quiz | PostgreSQL with Express |

## Running the Node.js and SQL projects

```bash
cd node-express/band-name-generator   # or any other server project
npm install
node index.js
```

The two SQL projects need PostgreSQL: run `psql -d world -f setup.sql` in the project folder, copy `.env.example` to `.env`, then `npm start`.

## Credits

Built while completing [The Complete Full-Stack Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/) by Dr. Angela Yu (The App Brewery). Project ideas and starter templates come from the course.
