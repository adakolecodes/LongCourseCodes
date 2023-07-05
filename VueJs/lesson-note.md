# VUE JS

**What is Vue Js?**

Vue is a frontend JavaScript framework for building websites, webapps and user interfaces

There are two major ways we can build a project using vue. First is by building the project using vue CDN (majorly for prototyping and learning purpose) and secondly by building the project using vue CLI (for development purpose)

# Setting up vue js on windows & creating project

1. Ensure Node.js is installed on PC. Download from https://nodejs.org/en/ 
2. Install vue js globally on your pc by running: `npm install -g @vue/cli` on your command prompt
3. Create project by running: `vue create nameofproject` in command prompt
4. Select vue version (vue 3)
5. Navigate into the project folder by running: `cd nameofproject`
6. Run the project on a local host by running: `npm run serve`

Your vue project should now be started on a local host, press ctrl and click on link or copy the link and open in browser

(To exit out of the connection, enter ctrl+c)

(To create new project next time, simply run `vue create nameofproject` in your terminal)

# Open created project in vs code

Locate the folder where vue project was created (Typically this should be in the users directory)

(If you want to resume work on your project after you’ve terminated the localhost connection, open your project in vs code, click on terminal and then new terminal at the top bar and type `npm run serve` to start the connection on the localhost port)

It is recommended to also have the Vetur extension installed in your vs code editor. Install the extension from the extensions tab.

# Vue folder structure

**Public folder:**
- Index.html: this is the single page loaded in the browser, everything you code will be spitted in the div with the id of app

**src folder:**
- main.js: this is the entry point to vue. We import createApp method from vue and also we import our root app component which is in App.vue
We call createApp method and pass the main app component and mount It to the div with the id of app
- App.vue: this is like our root component, every component we create will be embedded here.

# Parts of a component

- **Template:** This section is basically your output – where you can add html tags, expressions, variables.
- **Script:** This section defines our logic – where you can declare your data, methods, props etc.
- **Style:** This is where you add your styles (CSS)

# Explanation on how components work

When we create a component, we import it into our App.vue within the script tag, we then define/register it in the component object, then we parse the component into our template tag.

Some components have props which are defined within them and parsed in the component within the template tag of App.vue


