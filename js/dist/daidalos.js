var fe = {};

fe.listeners = {};
fe.storedActions = {};
// dataSetActionString is the prefix to the action name, like data-action-set-text, but using the JavaScript notation
fe.dataSetActionString = 'action';

fe.actions = function(actions)
{
    Object.assign(fe.storedActions, actions);
    return true;
}

fe.runAll = function()
{
    var elements = document.querySelectorAll('*');
    
    elements.forEach( function(key)
    {
        if(fe.isEventEmitter(key))
        {
            fe.register(key);
        }
    })

}

fe.run = function(element)
{
    if(fe.isEventEmitter(element))
    {
        fe.register(element);
    }
}

fe.createEventListener = function(element, data)
{
    fe.util.warn('Executing fe.createEventListener function: void()')
    
    function preprocessevent(e)
    {
        data.action(data.target, element, data.value);
    }
    element.addEventListener(data.event, preprocessevent);
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

    var targetClassAll = target.className;
    // Process all classes
    var targetClasses = targetClassAll.split(" ");

    for(var i = 0; i < targetClasses.length; i++)
    {
        // Get the actions from the class
        var cc = targetClasses[i];
        if(fe.storedActions[cc])
        {
            var ac = fe.storedActions[cc];
            // check for every action stored if the element has it
            var ack = Object.keys(ac);
            for(var y = 0; y < ack.length; y++)
            {
                var itkey = ack[y];
                var dataSetString = fe.dataSetActionString + itkey;
                if(dataSetString in dataset)
                {
                    // TODO: execute the event assign method

                    var data = {
                        event: 'click',
                        action: ac[itkey].event,
                        value: dataset[dataSetString],
                        target: target
                    }
                    fe.createEventListener(element, data);
                }
            }
        }
    }

}

fe.util = {};
fe.util.warn = function(text)
{
    var statement = 'FlyEvents: \n' + text;
    console.warn(statement)
}
fs = {};
fs.storedActions = {};
fs.dataSetStatementString = 'statement';

fs.actions = function(actions)
{
    Object.assign(fs.storedActions, actions);
    return true;
}

// fe.runAll & fs.runAll are merged in the final fly.js file
fs.runAll = function()
{
    var elements = document.querySelectorAll('*');
    
    elements.forEach( function(key)
    {
        if(fs.hasStatement(key))
        {
            fs.runStatements(key);
        }
    })
}

fs.hasStatement = function(element)
{
    var keys = Object.keys(element.dataset);
    if(keys.length === 0)
    {
        return false;
    }
    else {
        return true;
    }
}

fs.runStatements = function(element)
{
    var dataset = element.dataset;

    // For every dataset item in the element
    for(var i in dataset)
    {
        // The dataset string contains the starting word: 'dataSetString'
        var dataSetString = fs.dataSetStatementString;
        if(i.startsWith(dataSetString))
        {
            // It is a statement
            var st = i.substr(dataSetString.length);
            var value = dataset[i];

            var targetClassAll = element.className;
            // Process all classes
            var targetClasses = targetClassAll.split(" ");
            
            for(var i = 0; i < targetClasses.length; i++)
            {
                // Get the actions from the class
                var cc = targetClasses[i];
                if(fs.storedActions[cc])
                {
                    var statements = fs.storedActions[cc];
                    if(statements[st])
                    {
                        statements[st].event(element, value);
                    }
                }
            }
            

        }
    }
}


