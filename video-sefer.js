window.onload = function() {
  let link = document.createElement("link");
  link.href = "chumas.css";
  link.rel = "stylesheet"; 
  link.type = "text/css";
  frames['chumas'].document.head.appendChild(link);

  let link2 = document.createElement("link");
  link2.href = "rasi.css";
  link2.rel = "stylesheet"; 
  link2.type = "text/css"; 
  frames['rasi'].document.head.appendChild(link2);
}
