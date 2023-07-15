# VUE JS

**What is Vue Js?**

Vue is a frontend JavaScript framework for building websites, webapps and user interfaces

There are two major ways we can build a project using vue. First is by building the project using vue CDN (majorly for prototyping and learning purpose) and secondly by building the project using vue CLI (for development purpose)

# Setting up vue js on windows & creating project (Without vue router)
1. Ensure Node.js is installed on PC. Download from https://nodejs.org/en/ 
2. Install vue js globally on your pc by running: `npm install -g @vue/cli` on your command prompt
3. Create project by running: `vue create nameofproject` in command prompt
4. Select vue version (vue 3) by navigating to it using the arrow key on your keyboard and press enter
5. Navigate into the project folder by running: `cd nameofproject`
6. Run the project on a local host by running: `npm run serve`

Your vue project should now be started on a local host, press ctrl and click on link or copy the link and open in browser

(To exit out of the connection, enter ctrl+c)

(To create new project next time, simply run `vue create nameofproject` in your terminal, you don't need to carry out step 1 and 2 again)


# Setting up vue js on windows & creating project (With vue router)
1. Ensure node.js and vue js are installed properly on your pc. Confirm Node installation by running `node` in command prompt. Confirm vue installation by running `vue --version` in command prompt
2. Create project by running: `vue create nameofproject` in command prompt
3. Select `Manually select features` by navigating to it using the arrow key on your keyboard and press enter
4. Navigate to `Router` and select it by pressing the space bar, afterwards press enter
5. Select version of vue.js (version 3 (3.x))
6. Type `Y` for yes to use history mode for router
7. Pick a linter/formatter config by selecting `ESLint with error prevention only`
8. Select `Lint on save`
9. Select `In dedicated config files` for where do you prefer placing config for Babel, ESLint, etc.
10. Type `N` for no to Save this as a preset for future projects
11. Navigate into the project folder by running: `cd nameofproject`
12. Run the project on a local host by running: `npm run serve`


# Installing Vue Router on already existing vue project that does not have vue router
1. Open your command prompt (ensure you have nagivated to your project directory) and then run `vue add router`
2. When asked to Use history mode for router?, type `Y` for yes and enter, router should be successfully installed on your existing project
3. To confirm router has been successfully installed, check your src folder of your project you will see two new folders - router and views


# Open created project in vs code

Locate the folder where vue project was created (Typically this should be in the users directory in the local disk if no location was manually specified)

It is recommended to also have the Vetur extension installed in your vs code editor. Install the extension from the extensions tab.


# Resume work on project

(If you want to resume work on your project after you’ve terminated the localhost connection, open your project in vs code, click on terminal and then new terminal at the top bar and type `npm run serve` to start the connection on the localhost port). Alternatively you can also start the connection through the command prompt, however ensure you have navigated into the project directory before running the command


# Vue folder structure

**Public folder:**
- Index.html: this is the single page loaded in the browser, everything you code will be spitted in the div with the id of app

**src folder:**
- main.js: this is the entry point to vue. We import createApp method from vue and also we import our root app component which is in App.vue

We call createApp method and pass the main app component and mount It to the div with the id of app

- App.vue: this is like our root component, every component we create will be embedded/imported here.


# Parts of a component

- **Template:** This section is basically your output – where you can add html tags, expressions, variables.
- **Script:** This section defines our logic – where you can declare your data, methods, props etc.
- **Style:** This is where you add your styles (CSS)


# Explanation on how components work

When we create a component, we import it into our App.vue within the script tag, we then define/register it in the component object, then we parse the component into our template tag.

Some components have props which are defined within them and parsed in the component within the template tag of App.vue


# Extra - Installing Bootstrap to vue js
1. Open your terminal, navigate to your project directory and run `npm install bootstrap@5.3.0` to install Bootstrap version 5.3.0
2. After installation is completed, open your project in vs code and import bootstrap into your main.js file to make it accessible globally by typing `import 'bootstrap/dist/css/bootstrap.css'`

If you are going to make use of components like nav bar that requires the js component, then import bootstrap js by typing `import 'bootstrap/dist/js/bootstrap.min.js'`


# Making API calls to server on vue js (Using Axios)
1. Open your terminal, navigate to your project directory and run `npm install axios` to install axios