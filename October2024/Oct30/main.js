//Example fetch using DnD5eAPI - place subclasses in ul
const subClassList = document.getElementById("subclass-list");
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    subClassList.textContent = "";
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data);
        document.querySelector("h2").innerHTML = data.name;
        document.querySelector("h3").innerHTML = data.classes[0].name;
        data.subclasses.forEach(obj => {
            console.log(obj.name);
            const li = document.createElement("li");
            li.textContent = obj.name;
            subClassList.appendChild(li);
        });

        
        })
  
      .catch(err => {
          console.log(`error ${err}`)
      });
}

