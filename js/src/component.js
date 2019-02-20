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
        callback(_self);
    });
    return this;
}

Component.prototype.click = function( callback )
{
    var _self = this;
    this.data.DOMElement.addEventListener("click", function(e)
    {
        callback(_self, e);
    })
    return this;
}

Component.prototype.hover = function(over=function(){}, leave=function(){})
{
    var _self = this;
    this.data.DOMElement.addEventListener("mouseover", function(e) {
        over(_self, e);
    })
    this.data.DOMElement.addEventListener("mouseleave", function(e) {
        leave(_self, e);
    })
    return this;
};

// css stylings

/* Display CSS */
Component.prototype.hide = function()
{
    this.data.StyleManager.setStyle('display', 'none');
    return this;
}

Component.prototype.show = function(attr="inline-block")
{
    if(attr == "none") { console.log("Don't use .show() with 'none', use .hide() instead.") }
    this.data.StyleManager.setStyle('display', attr);
    return this;
}

Component.prototype.showBlock = function()
{
    this.show('block');
    return this;
}

Component.prototype.showInlineBlock = function()
{
    this.show('inline-block');
    return this;
}

Component.prototype.showInline = function()
{
    this.show('inline');
    return this;
}

/* Overflow Css */
Component.prototype.overflow = function(attr="scroll") {
    this.data.StyleManager.setStyle('overflow', attr);
    return this;
}

Component.prototype.hideOverflow = function()
{
    this.overflow('hidden');
    return this;
}

// states
Component.prototype.setState = function(state)
{
    this._state = state;

    if(this._statesListeners[state])
    {
        this._statesListeners[state](this);
    }
    else { console.log("State is not set: " + state) }

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
