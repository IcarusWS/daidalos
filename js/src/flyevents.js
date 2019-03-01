var fly = {};

fly.listeners = {};
fly.storedActions = {};
// dataSetActionString is the prefix to the action name, like data-action-set-text, but using the JavaScript notation
fly.dataSetActionString = 'action';

fly.actions = function(actions)
{
    Object.assign(fly.storedActions, actions);
    return true;
}

fly.runAll = function()
{
    var elements = document.querySelectorAll('*');
    
    elements.forEach( function(key)
    {
        if(fly.isEventEmitter(key))
        {
            fly.register(key);
        }
        // flystatements
        if(fly.hasStatement(key))
        {
            fly.runStatements(key);
        }
    })
    
}

fly.run = function(element)
{
    if(fly.isEventEmitter(element))
    {
        fly.register(element);
    }
}

fly.createEventListener = function(element, data)
{
    fly.util.warn('Executing fly.createEventListener function: void()')
    
    function preprocessevent(e)
    {
        data.action(data.target, element, data.value);
    }
    element.addEventListener(data.event, preprocessevent);
}

fly.isEventEmitter = function(element)
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

fly.register = function(element)
{
    var dataset = element.dataset;
    var target = document.getElementById(dataset.target);
    if(!target) {return fly.util.warn('Event target "' + dataset.target + '" is not found.')}

    var targetClassAll = target.className;
    // Process all classes
    var targetClasses = targetClassAll.split(" ");

    for(var i = 0; i < targetClasses.length; i++)
    {
        // Get the actions from the class
        var cc = targetClasses[i];
        if(fly.storedActions[cc])
        {
            var ac = fly.storedActions[cc];
            // check for every action stored if the element has it
            var ack = Object.keys(ac);
            for(var y = 0; y < ack.length; y++)
            {
                var itkey = ack[y];
                var dataSetString = fly.dataSetActionString + itkey;
                if(dataSetString in dataset)
                {
                    // TODO: execute the event assign method

                    var data = {
                        event: 'click',
                        action: ac[itkey].event,
                        value: dataset[dataSetString],
                        target: target
                    }
                    fly.createEventListener(element, data);
                }
            }
        }
    }

}

fly.util = {};
fly.util.warn = function(text)
{
    var statement = 'FlyEvents: \n' + text;
    console.warn(statement)
}