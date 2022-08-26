// Event Bubbling and Capturing in JavaScript

//Event Bubbling − Whenever an event happens on an element, the event handlers will first run on it and then on its parent and finally all the way up to its other ancestors.

// In JavaScript, propagation of events is done, which is known as 'Event Flow'. Event Flow is the sequence or order in which the particular web page receives the event. Thus, in JS, the process of event flow depends on the three aspects, which are:

// Event Capturing

// Event Target

// Event Bubbling

// Event Bubbling
// While developing a webpage or a website via JavaScript
// , the concept of event bubbling is used where the event handlers are invoked when one element is nested on to the other element and are part of the same event. This technique or method is known as Event Bubbling. Thus, while performing event flow for a web page, event bubbling is used. We can understand event bubbling as a sequence of calling the event handlers when one element is nested in another element, and both the elements have registered listeners for the same event. So beginning from the deepest element to its parents covering all its ancestors on the way to top to bottom, calling is performed.

// andar se bahar jata hai simple bhasa me 


// Stopping Bubbling
// Beginning from the target and moving towards the top is the bubbling i.e. starting from the child to its parent, it moves straight upwards. But a handler can also take decision to stop the bubbling when the event has been processed completely. In JavaScript, we use the event.stopPropagation () method.