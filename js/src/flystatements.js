fs = {};
fs.storedStatements = {};

fs.statements = function(statements)
{
    Object.assign(fs.storedStatements, statements);
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
            console.log('Has a statement: ' + key)
            //fs.runStatementCode(key);
        }
    })
}

fs.hasStatement = function(element)
{
    if(element.dataset)
    {
        return true;
    }
    else {
        return false;
    }
}