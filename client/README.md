This is a [Next.js](https://nextjs.org/), Systemic functional linguistics project.
Developed by Keith O'Hanlon & Ross Ward as a final year project in Maynooth University 2022.

The project is configured with best practices and CICD in mind. For this reason, there are many config files that will cause errors if not followed. See headings below for info on each config file. See [video here](https://youtu.be/Iu5aZDqZt8E) which was the basis for these features.

## Getting Started

Run `npm install`, then `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Husky

Husky is responsible for build / auto ci settings

When you run git commit ..., the command `npm run lint` will run automatically. It will scan all files making sure they are following the rules set out in the `.eslintrc.json` file. If you dont follow the rules an error will be thrown in the console and you will not be able to commit.

When you run git push, the command `npm run build` will run automatically. If the build fails, an error will be thrown in the console and you will not be able to push to the repo.

## Commit Lint

When you commit a file, the commit message must start with one of the following conventional headings, and be all lowercase:

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

## .nvmrc

This is the node version required for the project. When writing this that is node version >=18.0.0 or its code name lts/hydrogen.

## .npmrc

Enforces use of npm over yarn or other.

## .prettier

Formats basic code styles. `.prettierignore` contains files for prettier to not format.

## .vscode

Only useful if you use vscode. No effect otherwise. Contains 2 file:

- `settings.json` are local vscode project settings for autoformatting on save ... that only effect this project
- `launch.json` adds debug modes for client side, server side and full stack. Code taken directly from nextJS website.

## Cross-env (Crossplatform environment variables)

Set environment variables on the command line for both linux, mac and windows. used to inspect server side logs in-browser. See package.json dev script.
