# Creating a Vue Application
1. Ensure Node.js is installed on your PC. Download from https://nodejs.org/en/ 
2. Open your command prompt terminal and navigate to the directory where you want to create your project, or simply right click in the directory and click 'Open in terminal'. Run the following command in your command line
```cmd
npm create vue@latest
```

This command will install and execute create-vue. You will be presented with the following prompts for several optional features. Select 'No' for all, except for "Add Vue Router..." where you select 'Yes'. Use the arrow right and left to naviagate selections and enter to proceed to next:

✔ Project name: … `your-project-name`
✔ Package name: … `same-with-project-name`
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

3. Once the project is created, navigate to the just created project by typing cd `your-project-name` in your command prompt and enter
4. Type `npm install` to install dependencies
5. Type `npm run dev` to start the dev server
6. Copy the url of the Local server where your vue app is running and paste in your browser to see your created app

Congratulations, you should now have your first Vue project running!


# Open created project in vs code
Locate the folder where vue project was created (Typically this should be in the users directory in the local disk if no location was manually specified) and open with VS Code

# VS Code extension for Vue Js
It is recommended to also have the **Vetur** extension installed in your vs code editor. Install the extension from the extensions tab.


# Resume work on project
If you want to resume work on your project after you’ve terminated the localhost connection, open your project in vs code, click on terminal and then new terminal at the top bar and type `npm run dev` to start the connection on the localhost port. Alternatively you can also start the connection through the command prompt, however ensure you have navigated into the project directory before running the command.