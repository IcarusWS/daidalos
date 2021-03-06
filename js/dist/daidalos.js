var fly = {};

fly.listeners = {};
fly.storedActions = {};
// dataSetActionString is the prefix to the action name, like data-action-set-text, but using the JavaScript notation
fly.dataSetActionString = 'action';

fly.useDebug = true;
fly.log = function(txt) { if(fly.useDebug) console.log(txt) }

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

// fly.run = function(element)
// {
//     if(fly.isEventEmitter(element))
//     {
//         fly.register(element);
//     }
// }

fly.createEventListener = function(element, data)
{
    
    function preprocessevent(e)
    {
        data.action(data.target, data.value, element);
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
    fly.log('[fly] Registering ' + element);
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
                    // If there is an 'event' data-tag, use it under the event category
                    var event;
                    if('event' in dataset)
                    {
                        event = dataset.event;
                    }
                    else {
                        event = 'click'
                    }
                    var data = {
                        event: event,
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

fly.dataSetStatementString = 'statement';


fly.hasStatement = function(element)
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

fly.runStatements = function(element)
{
    var dataset = element.dataset;

    // For every dataset item in the element
    for(var i in dataset)
    {
        // The dataset string contains the starting word: 'dataSetString'
        var dataSetString = fly.dataSetStatementString;
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
                if(fly.storedActions[cc])
                {
                    var statements = fly.storedActions[cc];
                    if(statements[st])
                    {
                        statements[st].event(element, value);
                    }
                }
            }
            

        }
    }
}



// given constants: cn & fly

var __tabPageClassName = '.cl-tab';

class tabview
{
    constructor(element)
    {
        if(typeof element != 'object') { return false }
        this.element = element;
        this.tabs = element.querySelectorAll(__tabPageClassName);
    }

    setTab(tab_id)
    {
        var tabs = this.tabs;
        // Set all the elements that not match the tab_id to 'not display'
        for(var i = 0; i < tabs.length; i++)
        {
            var id = tabs[i].dataset['tab'];
            console.log(i);
            console.log(tabs[i]);
            // console.log(tab_id);
            if(id == tab_id)
            {
                tabs[i].style.display = 'block';
            }
            else {
                tabs[i].style.display = 'none';
            }
        }
        
    }
}
fly.actions({
    'cl-tabview': {
        'SetTab': {
            event: function(element, value)
            {
                var thisTabview = new tabview(element);
                thisTabview.setTab(value);
            }
        }
    }
});
fly.runAll();
console.log('Fly has completed!')

