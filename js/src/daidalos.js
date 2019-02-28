fe.actions({
    'cl-tabview':
    {
        'SetTab': 
        {
            event: function(element, sender, value)
            {
                console.log(0.5)
                var tabElement = element.querySelector('#' + value);
                setTab(tabElement);
            }
        }
    }
})

fs.actions({
    'cl-tab': {
        'Active': 
        {
            event: function(element, value)
            {
                setTab(element);
            }
        }
    }
})

function setTab(tab_element)
{
    var tabs = document.querySelectorAll('.cl-tab');
    console.log(1);
    tabs.forEach(function(key)
    {
        if(key.parentNode == tab_element.parentNode)
        {
            console.log(2);
            if(key != tab_element)
            {
                console.log(3);
                key.style.display = 'none';
            }
            else {
                key.style.display = 'block';
            }
        }
    })
}

fs.runAll();

fe.runAll();
