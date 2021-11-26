d3.json("https://gist.githubusercontent.com/josejbocanegra/d3b9e9775ec3a646603f49bc8d3fb90f/raw/3a39300c2a2ff8644a52e22228e900251ec5880a/population.json").then(data => {
    console.log(data);
});



/*const canvas = d3.select("#canvas");

const data = [
    {
        name : "Juan",
        age : 5,
    },
    { name : "Rodrigo",
        age : 15,

    }, 
    { name : "Sebastian",
    age : 25,

    }
]
//Creacion de elementos 
const ol = canvas.append ("ol");

//Creacio dinamica de elementos 
const li = ol.selectAll("li").data(data);

//enter relaciona los parametros con el numero de elementos
// que se crean
li.enter()
    .append("li")
    .text(d=> d.name);


//data.forEach(d => ol.append("li").text(d.name));



// Figuras geometricas, hacer zoom sin perder resolucion, imagen en mapa de bits

const canvas = d3.select("#canvas");

const svg = canvas.append("svg");

//Ancho del elemento
svg.attr("width", 800);
svg.attr("height", 800);

svg.append("react")
    .attr("x",0)
    .attr("y",0)
    .attr("width", 200)
    .attr("height", 200)
    .style ("fill", "steelblue");



// Barras 
const canvas = d3.select("#canvas");
const data = [
    {name: "Juan", age :3},
    {name: "Juan", age :3},
    {name: "Juan", age :3},
    {name: "Juan", age :3},
    {name: "Juan", age :3},
    {name: "Juan", age :3},
    {name: "Juan", age :3}
];

const width = 700;
const height = 500;
const margin = { top : 10, left : 50, bttom : 40, right: 10};
const iwidth = width - margin.left - margin.right;
const iheight = height - margin.top - margin.bttom;

const svg = canvas.append ("svg");
svg.attr("width", width);
svg.attr("height", height);

let g = svg
    .append("g")
    .append("transform", `translate(${margin.left}, ${margin.top})`);

const y = d3
    .scaleLinear()
    .domaind([0,45])
    .range([iheight,0])

const x = d3
    .scaleBan()
    .domaind(data.map((d)=> d.name))
    .range([0,width])
    .padding (0.1);

const bars = g.selectAll("react").data(data);

bars
    .enter()
    .append("react")
    .attr("class","bar")
    .style("fill", "steelblue")
    .attr("x", (d) => x(d.name))
    .attr("y", (d) => y (d.age))
    .attr("height", d => iheight - y(d.age))
    .attr("width", x.bandwidth());

g.append("g")
    .classed("x--axis", true)
    .call(d3.axisBottom(x))
    .attr("transform", `translate(0, ${iheight})`);  
    
g.append("g")
    .classed("y--axis", true)
    .call(d3.axisLeft(y));
*/