// ES5 Daidalos Library
var d = function( component )
{
    
    if(dlos[component])
    {
        return dlos[component];
    }
    else {
        var element = document.getElementById(component);
        if(element){ 
            var cmp = new Component(element);
            dlos[component] = cmp;
            return cmp;
        }
        else { return false };
    }
}

var dlos = {};
