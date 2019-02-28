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

