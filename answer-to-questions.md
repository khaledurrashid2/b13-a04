1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer-1:

getElementById will return a single element. Because, ID's are unique and only one element can have that unique ID inside a html file.

getElementsByClassName will return a 'html collection' because multiple elements can have a class. HtmlCollection looks like an array as it has 'lenght' and we can access it's items by index([0], [1], etc.). But array methods (e.g., arrayName.forEach(...), arrayName.map(), arrayName.push()  etc) will not work. Html collection is actually a DOM object. IF the DOM changes, the htmlCollection updates automatically

querySelector is a DOM method in Javascript that we can use to select an element using CSS selectors. We can use [docuemnt.querySelector("myID");] or [document.querySelector(".myClass");]. 

If want to find out many elements with similar characteristics, we use querySelectorAll(). Example: document.querySelectorAll(".box");
But results we will receive in a nodeList, not in an array or HtmlCollection.

2. How do you create and insert a new element into the DOM?
Answer-2:
We can use the 'document.createElement()' method to create element in a html document. 
Example: 
    const div = document.createElement("div");



3. What is Event Bubbling? And how does it work?
Answer-3:
When we click an element, the event doesn't just happen on that element, it bubbles up throught its parent elements. Say, we have a button inside a div name box1. A click on the button will move up to the box1 div, then then body element and the the whole html docuemnt.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer-4:


5. What is the difference between preventDefault() and stopPropagation() methods?
Answer-5:
