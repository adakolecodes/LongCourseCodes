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

# Primary Files in Vue js
## App.vue
App.vue is the main entry point of your **Vue js application** where your app's components, logic, and layout come together. It's like the front door of your app, where everything starts.

Think of App.vue as the container that holds all the other components, pages, and views together.

Any component or code we put in the `App.vue` becomes a global component/code, meaning we would see that component or code appear in all other views. A good use case for this would be the NavBar.

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

# Directives in Vue Js
Directives in Vue.js are special tokens that you can use to change the behavior of your HTML tags. Standard directives are prefixed with “v-“.

## Examples of standard Vue directives
### v-bind directives
**`v-bind`** is a directive in Vue that helps you bind data to HTML attributes. It allows you to dynamically set attributes on HTML elements such as class, style, src, href, etc. and pass dynamic data to them.

Example:
```html
<img v-bind:src="'assets/images/' + image_name" />
```

Explanation:
- `v-bind:src` is a Vue directive that binds the src attribute of the img tag to some data.
- `'assets/images/'` is the path to where the image is located
- `+` is a sign for concatenating the dynamic data property `image_name` to the path. `image_name` holds the name of the image file. 

The term "dynamic" means the value of `image_name` data property can change or be updated at runtime, rather than hardcoding it's value. By using `image_name` data property in the `v-bind:src` directive, the image path is constructed dynamically, allowing the image to be loaded based on the value of `image_name`. So, if `image_name` data property changes, the image path will also update, and the new image will be loaded automatically!

When you combine the path and the data property by concatenating them, you get the full file path: `'assets/images/image_name'`.

So, the code is essentially saying: "Hey, display an image from this specific file path!"

Note: `v-bind` directive in vue js is usually shortened to `:`, so `v-bind:src` becomes `:src`

### v-if and v-else directives
`v-if` and `v-else` are directives in Vue that help you control what content to display based on conditions.

**`v-if`**:
Think of `v-if` like a gatekeeper. It only allows content to pass through if a certain condition is true.

Example:

```html
<div v-if="isAuthenticated">Welcome, user!</div>
```
Here, the div will only be visible if the isAuthenticated variable is true.

**`v-else`**:
`v-else` is like a backup plan. It displays content when the condition in the `v-if` directive is false.

Example:

```html
<div v-if="isAuthenticated">Welcome, user!</div> 
<div v-else>Please login</div>
```

Here, if isAuthenticated is true, it shows the first message of "Welcome, user!", otherwise it shows the second message of "Please login".

In summary:
- `v-if` shows content if a condition is true
- `v-else` shows content if the condition is false

### v-for directives
The `v-for` directive in Vue.js is used to render a list of items by iterating over an array or an object. It's like a loop in JavaScript, but it's used directly in the HTML template to repeat a piece of the template for each item in the array or object.

**Example - Using v-for to loop through an array:**

Imagine you have an array of fruits and you want to display each fruit in a list. Here's how you can do it with v-for:

**Step 1**: Define the Array
In your Vue component script section, define an array of fruits:

```javascript
<script setup>
const fruits = ['Apple', 'Banana', 'Cherry']
</script>
```

**Step 2**: Use v-for in Template
Use the v-for directive to iterate over the fruits array and display each fruit in a list:

```html
<template>
    <ul>
        <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    </ul>
</template>
```

**How It Works**
- `v-for="fruit in fruits"`: This tells Vue to loop through each item in the fruits array. For each item, it will create a new `<li>` element.
- fruit: This is a variable that represents the current item in the loop. You can name it whatever you like (e.g., item, fruit, element).
- `:key="fruit"`: The key attribute helps Vue keep track of which items have changed, been added, or removed. It's a good practice to provide a unique key for each item. Here, we use fruit as the key because it's unique in this simple example.

**Example - Using v-for to loop through an object:**
If your data is an array of objects, you can access properties of each object:

Imagine you have an array of objects of employees details such as their id, name, and occupation and you want to display each employee details in a table. Here's how you can do it with v-for:

**Step 1**: Define the Array of Objects of employees

```javascript
<script setup>

    const employees = [
        { id: 1, name: 'John Doe', occupation: 'Teacher' },
        { id: 2, name: 'Jane Smith', occupation: 'Doctor' },
        { id: 3, name: 'Tom Johnson', occupation: 'Engineer' }
    ]

</script>
```

**Step 2**: Use v-for in Template
Use the `v-for` directive to iterate over the employees array of objects and display each employee details in a table row:

```html
<template>
    <table>
        <tr>
            <th>id</th>
            <th>Name</th>
            <th>Occupation</th>
        </tr>

        <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.id }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.occupation }}</td>
        </tr>
    </table>
</template>
```

**How It Works**:
- `v-for="employee in employees"`: This tells Vue to loop through each item or object in the employees array.
- employee: Represents the current object in the loop.
- `:key="employee.id"`: The key attribute uses `employee.id` to uniquely identify each item in the list.
- `<td>{{ employee.id }}</td>, <td>{{ employee.name }}</td>, <td>{{ employee.occupation }}</td>`: Display the id, name and occupation of an employee as the table data.

**Summary**
- `v-for`: Used to loop through arrays or objects in the template.
- Key: Always provide a unique key for each item to help Vue efficiently update the DOM.

Using `v-for`, you can easily create dynamic lists in your Vue templates by iterating over arrays or objects.


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

# State Management
State management is all about how you handle data (state) in your application and how this data is shared between different components. In Vue.js 3, state management can be done in several ways, but the most common and powerful tool for this is **Vuex**.

## What is State?
State is the data or information that your application needs to function. For example, user information, list of items etc.

## Why Do We Need State Management?
As your application grows, managing state (data) can become complex, especially when multiple components need to share and update the same state. State management helps to:

- Keep State Centralized: Instead of having state scattered across many components, you keep it in one place.
- Make State Predictable: Changes to the state follow a clear, structured process, making your app easier to understand and debug.
- Share State Easily: Different components can access and update the state without complex event handling or prop drilling.

# State Management with Vuex Store
Vuex is a state management library for Vue.js applications. It provides a centralized store for all the components in an application. Think of it as a big warehouse where you store and manage your apps data that multiple components of your app need to use and modify.

## Key Concepts in Vuex
1. **State**: This is where we define the data that our app will use. Imagine our state as a library with a shelf (our data) where we place different books which can be accessed by different library users.
2. **Getters**: This is where we define functions that will return data from our app in a specified manner. Imagie a specific getter as a device that gives us the total number of books on the shelf.
3. **Mutations**: This is where we define functions that will change/update the data in our state. Imagine mutations as a librarian who constantly updates and adds books on the shelf.
4. **Actions**: This is where we define functions to perform complex operations such as functions that will make HTTP requests to fetch data from an API and then commit mutations. Imagine an action as a book supplier who supplies/commits books to the librarian who in turn set/add these books on the shelf.

