1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

<!-- 
*** The getElementById only gets a unique id. ***
*** The getElementsByClassName returns htmlcollection and can get more than one elemenet by same classname. ***
*** The querySelector is a powerfull and it gets by first css selector name. ***
*** The querySelectorAll gets by all css selector name. *** -->

2. How do you create and insert a new element into the DOM?

<!--
 At first declare const div = document.creatElement('div')
then div.innerText = 'something' or div.innerHTML = ` html tag like <div> <p> something </p> </div>
after that inject the div to container eg: document.body.appendChild('div'); 
-->

3. What is Event Bubbling? And how does it work?

<!-- 
Event bubbling is going upward from event=child to document such as
<section id="container">
  <div id="parent">
    <button id="child">Click</button>
  </div>
</section>
event happening on child then going upward to parent then to container then to body then document
button -> div -> section -> body -> document 
-->

4. What is Event Delegation in JavaScript? Why is it useful?

<!-- 
Event delegation is getting the parent of child using eventlistener and then targeting the child elements under parent

--Usefulness--
  dynamic to use and not necessary to add event handler for each target or button
  it can be applied on new button if added 
-->

5. What is the difference between preventDefault() and stopPropagation() methods?

<!-- 
event.preventDefault() stops browser's default behaviour
we use preventDefault() to run our page on our demand
event.stopPropagation() stop event bubbling 
we use event.stopPropagation() when we need to limit the event and not to go parent. 
-->