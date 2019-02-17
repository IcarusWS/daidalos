# Component <class>
The component class is the central backbone of the UX part of Daidalos.
A component object is automaticaly generated when you use the ```daidalos()``` function, but you can also create one yourself:
```javascript
var element = document.getElementById('banner');
var myComponent = new Component(element);
```

### Proporties
##### ```data``` <object>
Stores all the data of a component object.
Proporties:
* ```DOMelement```<element> - The HTML element that the component represents

### Prototypes / Methods
##### ```on([event], [callback])```
Adds an event listener to the component.
Parameters:
* ```event```(string): The event to listen to. Can be every HTMLElement Event Listener event. E.g.: "click" or "mouseover"
* ```callback```(function): This function is called when the event is triggered. This callback has one parameter: ```component``` (the parent component)

##### ```hover([hover callback], [leave callback])```
Adds two event listeners to the compononent, one for when you hover your mouse over the component and one for when you leave the component with your mouse.
Parameters:
* ```hover callback```(function): This function is called when you start hovering over the component. This callback has one parameter: ```component``` (the parent component)
* ```leave callback```(function): This function is called when you leave the component. This callback has one parameter: ```component``` (the parent component)


