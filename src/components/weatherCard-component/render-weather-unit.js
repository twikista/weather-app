function togglerSwitch(isToggled, target) {
  //const toggleOn = document.querySelector(".toggle-on");
  // const toggleOff = document.querySelector(".toggle-off");

  const toggleOff = target.nextElementSibling.children[0];
  const toggleOn = target.nextElementSibling.children[1];
  const celsius = target.previousElementSibling;
  const fahrenheit = target.nextElementSibling.nextElementSibling;

  console.log(fahrenheit);
  if (isToggled) {
    //switch toggler
    toggleOn.classList.remove("hidden");
    toggleOff.classList.add("hidden");
    //switch between active weather unit
    celsius.classList.remove("text-purple-400");
    celsius.classList.add("text-gray-500");
    fahrenheit.classList.remove("text-gray-500");
    fahrenheit.classList.add("text-purple-400");
  }

  if (!isToggled) {
    toggleOn.classList.add("hidden");
    toggleOff.classList.remove("hidden");

    celsius.classList.add("text-purple-400");
    celsius.classList.remove("text-gray-500");
    fahrenheit.classList.add("text-gray-500");
    fahrenheit.classList.remove("text-purple-400");
  }
}

export default togglerSwitch;
