#capturing vs bubbling
Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.

With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

With capturing, the event is first captured by the outermost element and propagated to the inner elements.

#Examples
The two examples are capturing.html and bubbling.html
Both examples console.log all items from the body to the button and vice versa.

#capturing
Notice when clicking on the button the console will show all items in order from body, first, second, third, and button.

This is done by adding true at the end of the function.

#bubbling
Notice when clicking on the button the console will show all items in order from button, third, second, first, and body.

This is done by adding false at the end of the function.

#testing
Open the html files in a browser and click the button.  When looking at the console you will be able to further investigate the information that is shown.
