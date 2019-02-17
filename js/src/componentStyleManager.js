// Component style manager

var ComponentStyleManager = function(component)
{
    this.data = {}
    this.data.Component = component;
}

ComponentStyleManager.prototype.setStyle = function(key, value)
{
    this.data.Component.data.DOMElement.style[key] = value;
    return true;
}

ComponentStyleManager.prototype.removestyle = function(key)
{
    this.data.Component.data.DOMElement.style[key] = null;
    return true;
}