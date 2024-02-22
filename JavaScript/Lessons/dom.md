# DOM

In interacting with the DOM using JavaScript, we have 3 course of action - WHERE, WHICH AND WHAT

1. WHERE: We first specify where we want to target - in this case we are targeting our html document, and it is written as `document`
2. WHICH: We then specify which element in our html document we want to target. In targetting our html element, we can target and get the element by it's id, class or selector, however we would be dealing more with getting the element by it's id and this is written as `getElementById("idName")`
3. WHAT: The next course of action is to specify what we want to do/the changes we want to effect. What to do is very broad thus we can't list out all that can be done. However we can sight an example. Eg: If we want to change the inner content of a h1 tag to read "Hello World", this would be written as thus `innerHTML = "Hello World"`

Note: Each course of action is seperated with a dot

# Example

Assuming we have a h1 tag and we want to set the inner content to read "Hello World" using JS:

`<h1 id="head"></h1>`

<div>
    <h1>Hello World</h1>
</div>