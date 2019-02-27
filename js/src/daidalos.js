fe.actions({
    'cl-tabview':
    {
        'setTab': 
        {
            event: function(element, value)
            {

            }
        }
    }
})

fs.statements({
    'cl-tab': {
        'hide': function(element, value)
        {
            console.log('hidden');
            element.style.display = 'none';
        }
    }
})

fs.runAll();

fe.runAll();
