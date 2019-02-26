var fe = {};

fe.listeners = {};
fe.storedActions = {};

fe.actions = function(actions)
{
    Object.assign(actions, storedActions);
    return true;
}

fe.init = function()
{
    var elements = document.querySelectorAll('*');
    
    elements.forEach( function(key)
    {
        if(fe.isEventEmitter(key))
        {
            // console.log('element is event emitter: ' + key.dataset)
            fe.register(key);
        }
    })

}

fe.isEventEmitter = function(element)
{
    var dataset = element.dataset;
    
    // TODO: Add more flexible code
    // Element is an emitter when it has a data-target attribute
    if(dataset.target)
    {
        return true;
    }
    else {
        return false;
    }
}

fe.register = function(element)
{
    var dataset = element.dataset;
    var target = document.getElementById(dataset.target);
    if(!target) {return fe.util.warn('Event target "' + dataset.target + '" is not found.')}

}

fe.util = {};
fe.util.warn = function(text)
{
    var statement = 'FlyEvents: \n' + text;
    console.warn(statement)
}