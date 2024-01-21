const task = document.querySelector("#t");

const dis = document.querySelector("#d");

document.querySelector("button").addEventListener("click", () => {
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");

  const para1Text = document.createTextNode(task.value);
  para1.appendChild(para1Text);

  const para2Text = document.createTextNode(dis.value);
  para2.appendChild(para2Text);

  const btn = document.createElement("button");
  const btnText = document.createTextNode("Mark as Done");

  btn.appendChild(btnText);

  document.querySelector("section").appendChild(para1);
  document.querySelector("section").appendChild(para2);
  document.querySelector("section").appendChild(btn);
});
