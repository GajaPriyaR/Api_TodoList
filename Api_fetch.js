// https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((res) => {
        let rows = '';
    res.forEach(element => {
        // console.log(element.title);
        rows += `<tr><td>${element.id}</td><td>${element.title}</td><td>${element.completed}</td></tr>`
    });
    document.getElementById("apiRow").innerHTML = rows
  })
  .catch(err=>console.log(err))
