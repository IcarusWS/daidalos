// ES5 Daidalos Library
var daidalos = function( component )
{
    var element = document.getElementById(component);
    if(element){ return new Component(element) }
    else { return false };
}
