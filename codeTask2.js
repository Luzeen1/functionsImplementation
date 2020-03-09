
////function n.1 : performs an action only when a specific condition is met - recursive function - everytime the toCheckHandler returns false it invokes itself with times --
function doOnlyWhenAsync(toDoHandler,toCheckHandler,interval=1000,times=20,failHandler){

    if(times == 0 ) //stop condition - when times = 0 , it means that the condition false and we invoke the failHandler 
        return failHandler();


    if(toCheckHandler()) //if the condition returns true then invoke toDoHandler function
        return toDoHandler();
    

    //if the toCheckHandler returns false then invoke doOnlyWhenAsync again with times-1
    else { 
        times--;
        setTimeout(doOnlyWhenAsync(toDoHandler,toCheckHandler,interval,times,failHandler),interval);
            }
 } //end-doOnlyWhenAsync



//------------------------------------------------------------------------------------------------------------------------------------//



////funcion n.2 : gets a parameter as a html element, checks if it's visible or not, and returns a boolean value (true/false) depending on the result 
//visibility prop has 4 values : visible / hidden / inherit / collapse | display prop has 3 values : none / block / inline

function isVisible(htmlElement){

    if(htmlElement==null){
        alert("null parameter");
        return false;
    }//endIf

    //The element isn't NULL : 
    else { 
    
        var visibilityProp = window.getComputedStyle(htmlElement).visibility; //The visibilityProp has the visibility property of the html element 
                                                                              // got it by returning an object contains the values of all CSS properties of it and taking the visib.
        var displayProp = window.getComputedStyle(htmlElement).display;       //same
        var opacityProp = window.getComputedStyle(htmlElement).opacity;       //same
        var parentOfHTMLElement = htmlElement.parentElement;//gets the properties of the elements' parent
         if(parentOfHTMLElement.style.visibility=="visible" || parentOfHTMLElement.style.display !=="none"){
        
            if(!((visibilityProp)=='visible')) //if it's not the default it means that the property has been setted to some value -> need a check.
                return checkVisibilityValue(visibilityProp);
            else if (!((displayProp)=='inline')) //if it's not the default it means that the property has been setted to some value, we need to check it.
                 return checkDisplayValue(displayProp); 
            else if (!((opacityProp)=='1')) //if it's not the default it means that the property has been setted to some value, and there's a need to check.
                 return checkOpacityValue(opacityProp);
            else return true; //if no property defined for the element , then the element is visible(the properties have the default values) 

         }
        else return false; //if the parent is hidden then the element ( child) is also not visible

      } // endElse
    
}
//end-isVisible

// Checker functions:

//#1
function checkVisibilityValue(visibilityValue){


    //default = visible
    switch(visibilityValue){
        case "visible" : 
                    return true;
                    break;
        case "hidden" : 
                    return false;
                    break;
        case "inherit": 
                    return true;
                    break;
        case "collapse" :
                    return false;
                    break;
        default:
                     return true;
                     break;
            }//endVisibilitySwitch
}

//#2
function checkDisplayValue(displayValue){

    //default !=none
    switch(displayValue){
        case "none":
                 return false;
                 break;
         default:
                 return true;
                 break;

            }//endDisplaySwitch
}

//#3
function checkOpacityValue(opacityValue){

    //default != 0
    switch(opacityValue){
        case 0:
            return false;
            break;
        case 1:
            return true;
            break;
        case "inherit":
            return true;
            break;
        }
}

//end-checker functions 


//------------------------------------------------------------------------------------------------------------------------------------//


////function n.3 : gets (css selector ,style string ) and appends the style element to the header section
//DONE!

function createStyle(selectorElement,rule){
   var header = document.getElementsByTagName("head")[0]; // gets the header section and assign it to the header variable
   var styleElementnode = document.createElement("style"); //creating a node (tag) it's type is style
   var styleElementToAppend=selectorElement + "{"+ rule + "}"; //styleElementToAppended contain the selector element + the style rule.
   styleElementnode.innerHTML=styleElementToAppend; //the style tag contain the style element
   header.appendChild(styleElementnode);//appending the styleElement (style tag) to the header section
}
//end-createStyle


//------------------------------------------------------------------------------------------------------------------------------------//


////function n.4 - DONE!
//The unmask function gets the event as an input | I set the eventListener at the tag input in HTML file -> oninput=unmask(event)
function unmask(event){

    var elements = document.getElementsByTagName("input"); //in elements there are all the input tags we have in the HTML file
    var insertedInput=elements[0];//setting the insertedInput var to the first tag input
    var newInput = elements[1]; //setting newInput var to the second input tag

    newInput.value=insertedInput.value; //setting the newInput by taking each inserted value from the first tag input and put it in the second tag input.

}
//end-unmask