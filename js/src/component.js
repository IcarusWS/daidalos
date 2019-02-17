// Component Class

var Component = function(DOMElement)
{
    this.data = {};
    this.data.DOMElement = DOMElement;
}

// general event handler
Component.prototype.on = function(event, callback)
{
    var _self = this;
    this.data.DOMElement.addEventListener(event, function (e)
    {
        e.preventDefault();
        callback(_self);
    });
    
}

Component.prototype.hover = function(over, leave)
{
    var _self = this;
    this.data.DOMElement.addEventListener("mouseover", function(e) {
        e.preventDefault();
        over(_self);
    })
    this.data.DOMElement.addEventListener("mouseleave", function(e) {
        e.preventDefault();
        leave(_self);
    })

};
