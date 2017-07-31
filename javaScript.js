var greetingElement = document.getElementById("simran");

// now we want to attach an event listener to this element
// this is doing a few things:
// 1. Add the event listener to the greetingElement
// 2. We're "listening" for the 'click' event
// 3. When the button gets clicked, the function will be called

// so this is the general format (ps: there are more ways to do this!!!):
// element.addEventListener("event", callback function)
greetingElement.addEventListener("click", function(){
  document.getElementById("btn-text").innerHTML = "you clicked me, thanks!";
});


