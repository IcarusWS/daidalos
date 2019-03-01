// given constants: cn & fly
class tabview
{
    constructor(element)
    {
        if(typeof element != 'object') { return false }
        this.element = element;
        this.tabs = element.querySelectorAll(cn.tabPageClassName);
    }

    setTab(tab_id)
    {
        this.tabs.forEach(element => {
            element.style.display = 'none';
        });
        
        
        
    }
}