// Component Class

var Component = function(DOMElement)
{
    // data object
    this.data = {};
    this.data.DOMElement = DOMElement;
    this.data.StyleManager = new ComponentStyleManager(this);
    // state object
    this._state = 0;
    this._statesListeners = {};

}

// event handlers
Component.prototype.on = function(event, callback)
{
    var _self = this;
    this.data.DOMElement.addEventListener(event, function (e)
    {
        e.preventDefault();
        callback(_self);
    });
    return this;
}

Component.prototype.hover = function(over=function(){}, leave=function(){})
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
    return this;
};

// css stylings
Component.prototype.hide = function()
{
    this.data.StyleManager.setStyle('display', 'none');
    return this;
}

Component.prototype.showBlock = function()
{
    this.data.StyleManager.setStyle('display', 'block');
    return this;
}

Component.prototype.showInlineBlock = function()
{
    this.data.StyleManager.setStyle('display', 'inline-block');
    return this;
}

Component.prototype.showInline = function()
{
    this.data.StyleManager.setStyle('display', 'inline');
    return this;
}

// states
Component.prototype.setState = function(state)
{
    this._state = state;
    return this;
}

Component.prototype.getState = function()
{
    return this._state;
}

Component.prototype.states = function(states)
{
    this._statesListeners = states;
    return this;
}
