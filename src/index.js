import "./style.css";

const hello = document.createElement("h1");
const wrapper = document.createElement("div");
//const wrapper1 = document.createElement("div");

function addClass(ele, classes) {
  classes.forEach((i) => ele.classList.add(i));
}

hello.textContent = "Hello World!";
addClass(hello, [
  "bg-gradient-to-r",
  "from-green-400",
  "to-blue-500",
  "text-transparent",
  "text-9xl",
  "bg-clip-text",
  "font-extrabold",
]);

wrapper.classList.add(
  "flex",
  "w-full",
  "h-screen",
  "justify-center",
  "items-center"
);

document.body.classList.add("bg-gradient-to-b", "from-gray-700", "to-gray-900");

wrapper.appendChild(hello);
document.body.appendChild(wrapper);
