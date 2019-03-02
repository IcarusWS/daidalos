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