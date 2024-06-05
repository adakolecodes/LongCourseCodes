# What is Vue Js?
Vue.js is a JavaScript framework used to build interactive and dynamic web applications. It makes it easier to create and manage the user interface (UI) of your web pages. Here are some key points to understand about Vue.js:

1. Reactive Data Binding: Vue.js allows you to bind data to your HTML in such a way that when the data changes, the HTML automatically updates to reflect those changes.
2. Component-Based: Vue.js lets you create reusable components, which are like building blocks for your application. Each component can contain its own HTML, CSS, and JavaScript, making your code organized and easier to manage.
3. Composition API: In Vue.js 3, the Composition API provides a more flexible way to write components, especially for complex applications. It helps you organize your code better and make it more readable.
4. `<script setup>`: This is a simpler way to use the Composition API. It allows you to write less boilerplate code and makes your components cleaner and easier to understand.

# What are views in Vue Js?
A view is a type of component that represents a complete page that users can visit such as Home view, About view, Contact view etc. They are created and organized in the views directory of your project. They are used in conjunction with Vue Router to navigate between pages.

# What are components in Vue Js?
A component is a small, reusable piece of code that represents a part of your app's UI, like a nav bar, a header, a footer, a list, or a button. It's like a LEGO brick that can be used to build different things! We can have many components in a view, we can also have a component within another component. Components are created and organized in the components folder of our project.

## Parts of a component
A component typically consists of:
1. Template: In this section we write HTML-like codes that defines the component's structure and layout.
2. Script: In this section we write JavaScript codes that defines the component's behavior and logic.
3. Style: In this section we write CSS codes that defines the component's visual styling.

# Props in Vue Js
Props are used to pass data from a parent component (view) to another component called the child component. For example we can have a parent component/view called ProductsView that displays variety of products in a card view. We can also have a child component called ProductCard.

In this case:
- ProductsView is the parent component,
- ProductCard is the child component,
- The ProductsView component is the main container or page, and the ProductCard component is a smaller, reusable piece of code that is used inside the ProductsView component. The ProductsView component contains the ProductCard components, and passes data to the ProductCard component as props, allowing the ProductCard to render the relevant information.

So, to summarize:
- ProductsView is the parent component, serving as the main container or page.
- ProductCard is the child component, a reusable piece of code that lives inside the ProductsView.
- ProductsView may contain single or multiple ProductCard components, each receiving data as props to display the desired information.

# Vue Router
Vue Router is like a navigator for your Vue.js app. It helps users move between different pages or views within your app, without having to reload the entire page.

Think of it like a map that shows different routes or paths to take within your app. When a user clicks on a link or button, Vue Router directs them to the corresponding page or view, making it easy to navigate through your app.

The different routes in our app can be defined in the `index.js` file which is located in the router folder

# Files
## App.vue
App.vue is the main entry point of your **Vue js application** where your app's components, logic, and layout come together. It's like the front door of your app, where everything starts. Every component we create will be embedded here.

Think of App.vue as the container that holds all the other components, pages, and views together.

## Main.js
Main.js is like the ignition switch of your Vue js app. It's the file that starts everything up!

Think of main.js as the file that:
- Boots up your app
- Imports and initializes the `App.vue` component
- Tells Vue Router where to render the app
- Kicks off the whole application

In short, main.js is the file that gets everything moving, connecting all the dots to make your app come to life!

## index.html
The index.html file is the main entry point of your **web application**, which is the file that the web browser loads first when you visit a website.

Here's what's happening in the index.html file:
1. `<div id="app">` is a container where your Vue app will be rendered.
2. The src attribute in the `<script>` tag points to the main JavaScript file (`main.js`) that boots up your Vue app.

## Understanding the relationship between the 3 files (App.vue, main.js and index.html)
- **`index.html` as the Door to Your House**: When a user visits your website, the browser loads `index.html` first. This file contains a placeholder (usually a `<div>` with an id, like id="app") where the Vue app will be mounted. It also includes the src attribute in the `<script>` tag which points to the main JavaScript file (`main.js`) that boots up your Vue app.
- **`App.vue` as the Living Room**: Once index.html is loaded, the JavaScript files (in `main.js`) are executed, initializing the Vue application. The `main.js` file typically mounts the Vue instance to the #app element in `index.html`. The `App.vue` component is rendered at this point, and it serves as the starting point for your Vue application's component tree.
- **`main.js` as the Bridging Point**: The `main.js` (or sometimes main.ts if using TypeScript) file acts as the bridge between `index.html` and `App.vue`.

## Let's visualize the relationship between the 3 files
1. **Browser loads `index.html`**:
- Loads initial HTML structure.
- Includes script to load the `main.js` file.
2. **JavaScript files execute**:
- `main.js` is executed, which initializes the Vue application.
3. **Vue mounts `App.vue` to #app**:
- The content of `App.vue` is rendered inside the #app element in `index.html`.