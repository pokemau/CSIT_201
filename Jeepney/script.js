const btn = document.getElementById("btn");
const input = document.getElementById("jeepCode");

const body = document.getElementById("main-body");

let count = {};

btn.addEventListener("click", () => {
  count = {};
  const vals = input.value.split(",");
  for (const val of vals) {
    if (!(val in routes)) {
      alert("INVALID INPUT!");
      // input.value = "";
      return;
    } else {
      for (const route of routes[val]) {
        if (route in count) count[route] += 1;
        else count[route] = 1;
      }
    }
  }

  console.log(count);

  createRoute(vals);
});

const createRoute = (vals) => {
  body.innerHTML = "";
  for (const val of vals) {
    const n = document.createElement("h1");
    n.textContent = val;
    n.classList.add("route-title");

    body.appendChild(n);

    const routesCont = document.createElement("div");
    routesCont.classList.add("routes-cont");
    const currRoute = routes[val];
    for (let i = 0; i < currRoute.length; i++) {
      const route = currRoute[i];
      const r = document.createElement("p");
      r.textContent = route;

      if (count[route] > 1) {
        r.style.color = colors[route];
      }
      routesCont.appendChild(r);
      if (i < currRoute.length - 1) {
        const s = document.createElement("p");
        s.textContent = "----";
        routesCont.appendChild(s);
      }
    }
    body.appendChild(routesCont);
  }
};

const routes = {
  "01A": ["Alpha", "Bravo", "Charlie", "Echo", "Golf"],
  "02B": ["Alpha", "Delta", "Echo", "Foxtrot", "Golf"],
  "03C": ["Charlie", "Delta", "Foxtrot", "Hotel", "India"],
  "04A": ["Charlie", "Delta", "Echo", "Foxtrot", "Golf"],
  "04D": ["Charlie", "Echo", "Foxtrot", "Golf", "India"],
  "06B": ["Delta", "Hotel", "Juliet", "Kilo", "Lima"],
  "06D": ["Delta", "Foxtrot", "Golf", "India", "Kilo"],
  "10C": ["Foxtrot", "Golf", "Hotel", "India", "Juliet"],
  "10H": ["Foxtrot", "Hotel", "Juliet", "Lima", "November"],
  "11A": ["Foxtrot", "Golf", "Kilo", "Mike", "November"],
  "11B": ["Foxtrot", "Golf", "Lima", "Oscar", "Papa"],
  "20A": ["India", "Juliet", "November", "Papa", "Romeo"],
  "20C": ["India", "Kilo", "Lima", "Mike", "Romeo"],
  "42C": ["Juliet", "Kilo", "Lima", "Mike", "Oscar"],
  "42D": ["Juliet", "November", "Oscar", "Quebec", "Romeo"],
};

const colors = {
  Alpha: "red",
  Bravo: "blue",
  Charlie: "green",
  Delta: "orange",
  Echo: "violet",
  Foxtrot: "yellow",
  Golf: "indigo",
  Hotel: "brown",
  India: "skyblue",
  Juliet: "aquamarine",
  Kilo: "darkolivegreen",
  Lima: "lavender",
  Mike: "maroon",
  November: "navy",
  Oscar: "orchid",
  Papa: "pink",
  Quebec: "royalblue",
  Romeo: "steelblue",
};
