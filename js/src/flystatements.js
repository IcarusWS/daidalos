// fly = {};
// fly.storedActions = {};
fly.dataSetStatementString = 'statement';

// fly.actions = function(actions)
// {
//     Object.assign(fly.storedActions, actions);
//     return true;
// }

// fly.runAll & fly.runAll are merged in the final fly.js file
// fly.runAll = function()
// {
//     var elements = document.querySelectorAll('*');
    
//     elements.forEach( function(key)
//     {
//         if(fly.hasStatement(key))
//         {
//             fly.runStatements(key);
//         }
//     })
// }

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

