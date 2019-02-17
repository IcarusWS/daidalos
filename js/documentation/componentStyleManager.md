# ComponentStyleManager <class>
Manages the CSS style of a component. Used by the Component class under ```data.StyleManager```.
The constructor takes one argument: ```component```<instance>, the component instance.

### Proporties
##### ```data``` <object>
Stores all the data of a componentStyleManager object.
Proporties:
* ```Component```<element> - The Component instance

### Prototypes / Methods
##### ```setStyle([attribute], [value])```
Sets a specific style attribute to a value.
Arguments:
* ```attribute```: The style attribute (same nomenclature as the HTML element.style), like "display" or "margin".
* ```value```: The style attribute value, like "none" or "20px".

##### ```removeStyle([attribute])```
Removes the value of a style attribute.
Arguments:
* ```attribute```: The style attribute (same nomenclature as the HTML element.style), like "display" or "margin".