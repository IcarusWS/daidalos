// ES5 Daidalos Library
var d = function( component )
{
    var element = document.getElementById(component);
    if(element){ return new Component(element) }
    else { return false };
}

