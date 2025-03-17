ctx.prototype.__applyStyleState = function (styleState) { 
    this.__handleStyles(styleState);
}; 

ctx.prototype.__setDefaultStyles = function () { 
    this.__handleStyles(STYLES, false, true);
}

ctx.prototype.__getStyleState = function () {
    return this.__handleStyles(STYLES, true);
};

ctx.prototype.__handleStyles = function(source, isDefaultStyles = false, isGettingState = false) {
    var i, styleState = {}, keys = Object.keys(STYLES), key; 
    for (i=0; i<keys.length; i++) {
        key = keys[i]; 
        if(isGettingState) {styleState[key] = this[key];}
        else if (isDefaultStyles && source[key].canvas !== undefined) 
           {this[key] = source[key].canvas;}
            else 
                {this[key] = source[key];}
    } 

    if(isGettingState) return styleState; 
}