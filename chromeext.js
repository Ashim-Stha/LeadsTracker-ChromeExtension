let arr = [];

const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const ul = document.getElementById("ul-el");
const del = document.getElementById("del");
const savetab = document.getElementById("savetab");

const val = JSON.parse(localStorage.getItem("myLeads"));
if (val) {
  arr = val;

  render(arr);
}

btn.addEventListener("click", function () {
  arr.push(inp.value);
  render(arr);
  localStorage.setItem("myLeads", JSON.stringify(arr));
  inp.value = "";
});

function render(arg) {
  let listItems = "";
  for (let i = 0; i < arg.length; i++) {
    //   ul.innerHTML += "<li>" + arr[i] + "</li>";

    //anothermethod
    //   const li = document.createElement("li"); //creating html element
    //   li.textContent = arr[i]; //asssigning value to html element
    //   ul.append(li); //appending to html where we need

    // listItems +=
    //   "<li><a target='-blank' href='" + arr[i] + "'>" + arr[i] + "</li>";

    listItems += `<li><a target='-blank' href='${arg[i]}'>${arg[i]}</li>`;
  }
  ul.innerHTML = listItems;
}

del.addEventListener("dblclick", function () {
  localStorage.clear();
  arr = [];
  render(arr);
});

savetab.addEventListener("click", function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    arr.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(arr));
    render(arr);
  });
});
