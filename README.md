# Quick Install And Run

1. Run the following lines in your console:

```bash
npm install
npm start
```

# How To Create This Project From Scratch

1. In your Bash / Cmd, create a minimal `Typescript + React-DOM` project by running the following commands in an empty folder:

```bash
npm init -y
npm i typescript @types/node --save-dev
npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
```

2. Install and configure `react-dom` using the following commands:

```bash
npm i react-dom @types/react @types/react-dom --save-dev
```

3. In `tsconfig.json`, uncomment the `"jsx": "preserve",` line and change it to `"jsx": "react-jsx",`. This enables Typescript to identify and transpile `.tsx` files.

4. Install and configure `nodemon` using the following commands:

```bash
mkdir src
touch src/index.ts
npm i ts-node nodemon --save-dev
touch nodemon.json
```

5. Add the following lines inside `nodemon.json`:

```json
{
    "watch": ["src"],
    "ext": ".ts,.js,.tsx,.jsx",
    "ignore": [],
    "exec": "ts-node ./src/index.ts"
}
```

6. Add `"start": "nodemon"` line to the `"scripts"` attribute in `package.json` like so:

```json
{
    ... stuff ...

    "scripts": {
        "start": "nodemon",
        
        ... rest of stuff ...
    }

    ... stuff ...
}
```

5. Add a simple console.log line to `src/index.ts`, this is the root file of the project:

```javascript
console.log('Hello World!')
```

7. Start the `nodemon` project with:

```
npm start
```

The project will auto reload when you save changes to any `.ts, .js, .tsx, .jsx` file in the `src` folder. You are now ready to begin!