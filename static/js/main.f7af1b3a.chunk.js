(this["webpackJsonpaac-app"]=this["webpackJsonpaac-app"]||[]).push([[0],[,,,,,,,function(e,a,n){e.exports=n(17)},,,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var i=n(0),m=n.n(i),d=n(4),t=n.n(d),r=n(3),o=n(2);var s=()=>m.a.createElement("div",{className:"home"},m.a.createElement(r.b,{to:"/dashboard"},m.a.createElement("button",null,"Start Communicating")),m.a.createElement(r.b,{to:"/settings"},m.a.createElement("button",null,"Settings")));var l=e=>{let{category:a,onClick:n}=e;return m.a.createElement("div",{className:"category",onClick:()=>n(a)},a.image&&m.a.createElement("img",{src:a.image,alt:a.name}),m.a.createElement("p",null,a.name))},c=n(6);var u=e=>{let{subcategory:a}=e;const{speak:n}=Object(c.useSpeechSynthesis)();return m.a.createElement("div",{className:"subcategory",onClick:()=>n({text:a.name})},a.image&&m.a.createElement("img",{src:a.image,alt:a.name}),m.a.createElement("p",null,a.name))};var g=e=>{let{images:a,onSelect:n}=e;return m.a.createElement("div",{className:"image-picker"},a.map((e,a)=>m.a.createElement("img",{key:a,src:e.src,alt:e.name,onClick:()=>n(e.src),style:{cursor:"pointer",margin:"10px",maxWidth:"100px"}})))};var h=[{id:1,name:"Greetings",subcategories:[{id:1,name:"Hello"},{id:2,name:"Goodbye"},{id:3,name:"Good morning"},{id:4,name:"Good night"},{id:5,name:"How are you?"},{id:6,name:"Nice to meet you"},{id:7,name:"See you later"},{id:8,name:"Take care"},{id:9,name:"What's up?"},{id:10,name:"Have a nice day"},{id:11,name:"Bye"},{id:12,name:"Good afternoon"},{id:13,name:"Welcome"},{id:14,name:"Long time no see"},{id:15,name:"Good evening"},{id:16,name:"Pleasure to meet you"},{id:17,name:"What's new?"},{id:18,name:"Greetings"},{id:19,name:"Hi"},{id:20,name:"How have you been?"}]},{id:2,name:"People",subcategories:[{id:1,name:"Mom"},{id:2,name:"Dad"},{id:3,name:"Brother"},{id:4,name:"Sister"},{id:5,name:"Friend"},{id:6,name:"Teacher"},{id:7,name:"Grandma"},{id:8,name:"Grandpa"},{id:9,name:"Aunt"},{id:10,name:"Uncle"},{id:11,name:"Cousin"},{id:12,name:"Neighbor"},{id:13,name:"Baby"},{id:14,name:"Classmate"},{id:15,name:"Nurse"},{id:16,name:"Doctor"},{id:17,name:"Dentist"},{id:18,name:"Coach"},{id:19,name:"Principal"},{id:20,name:"Therapist"}]},{id:3,name:"Actions",subcategories:[{id:1,name:"Eat"},{id:2,name:"Drink"},{id:3,name:"Sleep"},{id:4,name:"Play"},{id:5,name:"Read"},{id:6,name:"Write"},{id:7,name:"Draw"},{id:8,name:"Run"},{id:9,name:"Walk"},{id:10,name:"Jump"},{id:11,name:"Sing"},{id:12,name:"Dance"},{id:13,name:"Swim"},{id:14,name:"Talk"},{id:15,name:"Listen"},{id:16,name:"Watch"},{id:17,name:"Help"},{id:18,name:"Learn"},{id:19,name:"Teach"},{id:20,name:"Cook"}]},{id:4,name:"Feelings",subcategories:[{id:1,name:"Happy"},{id:2,name:"Sad"},{id:3,name:"Angry"},{id:4,name:"Excited"},{id:5,name:"Scared"},{id:6,name:"Bored"},{id:7,name:"Tired"},{id:8,name:"Surprised"},{id:9,name:"Nervous"},{id:10,name:"Calm"},{id:11,name:"Confused"},{id:12,name:"Frustrated"},{id:13,name:"Shy"},{id:14,name:"Sick"},{id:15,name:"Proud"},{id:16,name:"Lonely"},{id:17,name:"Hopeful"},{id:18,name:"Hungry"},{id:19,name:"Thirsty"},{id:20,name:"Grateful"}]},{id:5,name:"Food & Drink",subcategories:[{id:1,name:"Apple"},{id:2,name:"Banana"},{id:3,name:"Orange"},{id:4,name:"Grapes"},{id:5,name:"Water"},{id:6,name:"Juice"},{id:7,name:"Milk"},{id:8,name:"Sandwich"},{id:9,name:"Pizza"},{id:10,name:"Burger"},{id:11,name:"Fries"},{id:12,name:"Pasta"},{id:13,name:"Rice"},{id:14,name:"Chicken"},{id:15,name:"Fish"},{id:16,name:"Egg"},{id:17,name:"Salad"},{id:18,name:"Soup"},{id:19,name:"Cake"},{id:20,name:"Ice Cream"}]},{id:6,name:"Places",subcategories:[{id:1,name:"Home"},{id:2,name:"School"},{id:3,name:"Park"},{id:4,name:"Store"},{id:5,name:"Restaurant"},{id:6,name:"Library"},{id:7,name:"Beach"},{id:8,name:"Zoo"},{id:9,name:"Hospital"},{id:10,name:"Dentist"},{id:11,name:"Playground"},{id:12,name:"Gym"},{id:13,name:"Mall"},{id:14,name:"Museum"},{id:15,name:"Cinema"},{id:16,name:"Airport"},{id:17,name:"Train Station"},{id:18,name:"Bus Stop"},{id:19,name:"Church"},{id:20,name:"Swimming Pool"}]},{id:7,name:"Clothing",subcategories:[{id:1,name:"Shirt"},{id:2,name:"Pants"},{id:3,name:"Dress"},{id:4,name:"Shoes"},{id:5,name:"Socks"},{id:6,name:"Hat"},{id:7,name:"Jacket"},{id:8,name:"Gloves"},{id:9,name:"Scarf"},{id:10,name:"Belt"},{id:11,name:"Shorts"},{id:12,name:"Skirt"},{id:13,name:"Sweater"},{id:14,name:"Boots"},{id:15,name:"Sandals"},{id:16,name:"Underwear"},{id:17,name:"Swimsuit"},{id:18,name:"T-shirt"},{id:19,name:"Pajamas"},{id:20,name:"Coat"}]},{id:8,name:"School",subcategories:[{id:1,name:"Teacher"},{id:2,name:"Student"},{id:3,name:"Classroom"},{id:4,name:"Desk"},{id:5,name:"Book"},{id:6,name:"Pencil"},{id:7,name:"Eraser"},{id:8,name:"Board"},{id:9,name:"Homework"},{id:10,name:"Recess"},{id:11,name:"Lunch"},{id:12,name:"Bus"},{id:13,name:"Gym"},{id:14,name:"Library"},{id:15,name:"Principal"},{id:16,name:"Nurse"},{id:17,name:"Art"},{id:18,name:"Music"},{id:19,name:"Math"},{id:20,name:"Science"}]},{id:9,name:"Home",subcategories:[{id:1,name:"Living Room"},{id:2,name:"Kitchen"},{id:3,name:"Bedroom"},{id:4,name:"Bathroom"},{id:5,name:"Garden"},{id:6,name:"Garage"},{id:7,name:"Dining Room"},{id:8,name:"Basement"},{id:9,name:"Attic"},{id:10,name:"Laundry Room"},{id:11,name:"Hallway"},{id:12,name:"Closet"},{id:13,name:"Balcony"},{id:14,name:"Patio"},{id:15,name:"Roof"},{id:16,name:"Stairs"},{id:17,name:"Door"},{id:18,name:"Window"},{id:19,name:"Floor"},{id:20,name:"Ceiling"}]},{id:10,name:"Body",subcategories:[{id:1,name:"Head"},{id:2,name:"Face"},{id:3,name:"Hair"},{id:4,name:"Eyes"},{id:5,name:"Nose"},{id:6,name:"Mouth"},{id:7,name:"Ears"},{id:8,name:"Neck"},{id:9,name:"Shoulders"},{id:10,name:"Arms"},{id:11,name:"Hands"},{id:12,name:"Fingers"},{id:13,name:"Chest"},{id:14,name:"Stomach"},{id:15,name:"Legs"},{id:16,name:"Feet"},{id:17,name:"Toes"},{id:18,name:"Back"},{id:19,name:"Heart"},{id:20,name:"Brain"}]},{id:11,name:"Toys",subcategories:[{id:1,name:"Doll"},{id:2,name:"Car"},{id:3,name:"Ball"},{id:4,name:"Puzzle"},{id:5,name:"Blocks"},{id:6,name:"Train"},{id:7,name:"Action Figure"},{id:8,name:"Stuffed Animal"},{id:9,name:"Legos"},{id:10,name:"Board Game"},{id:11,name:"Toy Kitchen"},{id:12,name:"Toy Tools"},{id:13,name:"Playdough"},{id:14,name:"Toy Phone"},{id:15,name:"Toy Car"},{id:16,name:"Toy Boat"},{id:17,name:"Toy Plane"},{id:18,name:"Toy House"},{id:19,name:"Toy Robot"},{id:20,name:"Toy Dinosaur"}]},{id:12,name:"Animals",subcategories:[{id:1,name:"Dog"},{id:2,name:"Cat"},{id:3,name:"Bird"},{id:4,name:"Fish"},{id:5,name:"Horse"},{id:6,name:"Cow"},{id:7,name:"Sheep"},{id:8,name:"Pig"},{id:9,name:"Chicken"},{id:10,name:"Duck"},{id:11,name:"Rabbit"},{id:12,name:"Turtle"},{id:13,name:"Snake"},{id:14,name:"Frog"},{id:15,name:"Monkey"},{id:16,name:"Lion"},{id:17,name:"Tiger"},{id:18,name:"Bear"},{id:19,name:"Elephant"},{id:20,name:"Giraffe"}]},{id:13,name:"Weather",subcategories:[{id:1,name:"Sunny"},{id:2,name:"Cloudy"},{id:3,name:"Rainy"},{id:4,name:"Stormy"},{id:5,name:"Snowy"},{id:6,name:"Windy"},{id:7,name:"Foggy"},{id:8,name:"Hot"},{id:9,name:"Cold"},{id:10,name:"Warm"},{id:11,name:"Cool"},{id:12,name:"Hail"},{id:13,name:"Thunder"},{id:14,name:"Lightning"},{id:15,name:"Rainbow"},{id:16,name:"Humid"},{id:17,name:"Dry"},{id:18,name:"Freezing"},{id:19,name:"Breezy"},{id:20,name:"Drizzle"}]},{id:14,name:"Colors",subcategories:[{id:1,name:"Red"},{id:2,name:"Blue"},{id:3,name:"Green"},{id:4,name:"Yellow"},{id:5,name:"Orange"},{id:6,name:"Purple"},{id:7,name:"Pink"},{id:8,name:"Brown"},{id:9,name:"Black"},{id:10,name:"White"},{id:11,name:"Gray"},{id:12,name:"Violet"},{id:13,name:"Indigo"},{id:14,name:"Turquoise"},{id:15,name:"Magenta"},{id:16,name:"Lime"},{id:17,name:"Olive"},{id:18,name:"Maroon"},{id:19,name:"Navy"},{id:20,name:"Teal"}]},{id:15,name:"Shapes",subcategories:[{id:1,name:"Circle"},{id:2,name:"Square"},{id:3,name:"Triangle"},{id:4,name:"Rectangle"},{id:5,name:"Oval"},{id:6,name:"Diamond"},{id:7,name:"Star"},{id:8,name:"Heart"},{id:9,name:"Hexagon"},{id:10,name:"Pentagon"},{id:11,name:"Octagon"},{id:12,name:"Parallelogram"},{id:13,name:"Trapezoid"},{id:14,name:"Arrow"},{id:15,name:"Crescent"},{id:16,name:"Cube"},{id:17,name:"Cylinder"},{id:18,name:"Cone"},{id:19,name:"Sphere"},{id:20,name:"Pyramid"}]},{id:16,name:"Numbers",subcategories:[{id:1,name:"One"},{id:2,name:"Two"},{id:3,name:"Three"},{id:4,name:"Four"},{id:5,name:"Five"},{id:6,name:"Six"},{id:7,name:"Seven"},{id:8,name:"Eight"},{id:9,name:"Nine"},{id:10,name:"Ten"},{id:11,name:"Eleven"},{id:12,name:"Twelve"},{id:13,name:"Thirteen"},{id:14,name:"Fourteen"},{id:15,name:"Fifteen"},{id:16,name:"Sixteen"},{id:17,name:"Seventeen"},{id:18,name:"Eighteen"},{id:19,name:"Nineteen"},{id:20,name:"Twenty"}]},{id:17,name:"Letters",subcategories:[{id:1,name:"A"},{id:2,name:"B"},{id:3,name:"C"},{id:4,name:"D"},{id:5,name:"E"},{id:6,name:"F"},{id:7,name:"G"},{id:8,name:"H"},{id:9,name:"I"},{id:10,name:"J"},{id:11,name:"K"},{id:12,name:"L"},{id:13,name:"M"},{id:14,name:"N"},{id:15,name:"O"},{id:16,name:"P"},{id:17,name:"Q"},{id:18,name:"R"},{id:19,name:"S"},{id:20,name:"T"},{id:21,name:"U"},{id:22,name:"V"},{id:23,name:"W"},{id:24,name:"X"},{id:25,name:"Y"},{id:26,name:"Z"}]},{id:18,name:"Time",subcategories:[{id:1,name:"Morning"},{id:2,name:"Afternoon"},{id:3,name:"Evening"},{id:4,name:"Night"},{id:5,name:"Day"},{id:6,name:"Week"},{id:7,name:"Month"},{id:8,name:"Year"},{id:9,name:"Monday"},{id:10,name:"Tuesday"},{id:11,name:"Wednesday"},{id:12,name:"Thursday"},{id:13,name:"Friday"},{id:14,name:"Saturday"},{id:15,name:"Sunday"},{id:16,name:"Yesterday"},{id:17,name:"Today"},{id:18,name:"Tomorrow"},{id:19,name:"Calendar"},{id:20,name:"Clock"}]},{id:19,name:"Questions",subcategories:[{id:1,name:"Who"},{id:2,name:"What"},{id:3,name:"Where"},{id:4,name:"When"},{id:5,name:"Why"},{id:6,name:"How"},{id:7,name:"Can"},{id:8,name:"Could"},{id:9,name:"Would"},{id:10,name:"Should"},{id:11,name:"Is"},{id:12,name:"Are"},{id:13,name:"Was"},{id:14,name:"Were"},{id:15,name:"Will"},{id:16,name:"Did"},{id:17,name:"Do"},{id:18,name:"Does"},{id:19,name:"Has"},{id:20,name:"Have"}]},{id:20,name:"Requests",subcategories:[{id:1,name:"Please"},{id:2,name:"Thank you"},{id:3,name:"Yes"},{id:4,name:"No"},{id:5,name:"Help"},{id:6,name:"Stop"},{id:7,name:"Go"},{id:8,name:"More"},{id:9,name:"Wait"},{id:10,name:"Come"},{id:11,name:"Sit"},{id:12,name:"Stand"},{id:13,name:"Turn"},{id:14,name:"Look"},{id:15,name:"Listen"},{id:16,name:"Quiet"},{id:17,name:"Ready"},{id:18,name:"Clean"},{id:19,name:"Wash"},{id:20,name:"Change"}]},{id:21,name:"Vehicles",subcategories:[{id:1,name:"Car"},{id:2,name:"Bus"},{id:3,name:"Bicycle"},{id:4,name:"Train"},{id:5,name:"Airplane"},{id:6,name:"Boat"},{id:7,name:"Truck"},{id:8,name:"Motorcycle"},{id:9,name:"Scooter"},{id:10,name:"Helicopter"},{id:11,name:"Van"},{id:12,name:"Taxi"},{id:13,name:"Subway"},{id:14,name:"Skateboard"},{id:15,name:"Rollerblades"},{id:16,name:"Tractor"},{id:17,name:"Ambulance"},{id:18,name:"Firetruck"},{id:19,name:"Police Car"},{id:20,name:"Spaceship"}]},{id:22,name:"Nature",subcategories:[{id:1,name:"Tree"},{id:2,name:"Flower"},{id:3,name:"Grass"},{id:4,name:"Bush"},{id:5,name:"Leaf"},{id:6,name:"Mountain"},{id:7,name:"River"},{id:8,name:"Lake"},{id:9,name:"Ocean"},{id:10,name:"Sky"},{id:11,name:"Star"},{id:12,name:"Moon"},{id:13,name:"Sun"},{id:14,name:"Rock"},{id:15,name:"Sand"},{id:16,name:"Dirt"},{id:17,name:"Rain"},{id:18,name:"Snow"},{id:19,name:"Wind"},{id:20,name:"Cloud"}]},{id:23,name:"Sports",subcategories:[{id:1,name:"Soccer"},{id:2,name:"Basketball"},{id:3,name:"Baseball"},{id:4,name:"Football"},{id:5,name:"Tennis"},{id:6,name:"Golf"},{id:7,name:"Swimming"},{id:8,name:"Running"},{id:9,name:"Cycling"},{id:10,name:"Hiking"},{id:11,name:"Skiing"},{id:12,name:"Skating"},{id:13,name:"Surfing"},{id:14,name:"Boxing"},{id:15,name:"Wrestling"},{id:16,name:"Gymnastics"},{id:17,name:"Yoga"},{id:18,name:"Dancing"},{id:19,name:"Martial Arts"},{id:20,name:"Cheerleading"}]},{id:24,name:"Occupations",subcategories:[{id:1,name:"Doctor"},{id:2,name:"Nurse"},{id:3,name:"Teacher"},{id:4,name:"Police Officer"},{id:5,name:"Firefighter"},{id:6,name:"Chef"},{id:7,name:"Farmer"},{id:8,name:"Pilot"},{id:9,name:"Engineer"},{id:10,name:"Artist"},{id:11,name:"Musician"},{id:12,name:"Scientist"},{id:13,name:"Dentist"},{id:14,name:"Lawyer"},{id:15,name:"Mechanic"},{id:16,name:"Builder"},{id:17,name:"Architect"},{id:18,name:"Journalist"},{id:19,name:"Actor"},{id:20,name:"Photographer"}]},{id:25,name:"Technology",subcategories:[{id:1,name:"Computer"},{id:2,name:"Phone"},{id:3,name:"Tablet"},{id:4,name:"TV"},{id:5,name:"Camera"},{id:6,name:"Radio"},{id:7,name:"Headphones"},{id:8,name:"Watch"},{id:9,name:"Printer"},{id:10,name:"Microwave"},{id:11,name:"Fridge"},{id:12,name:"Oven"},{id:13,name:"Washing Machine"},{id:14,name:"Dryer"},{id:15,name:"Fan"},{id:16,name:"Light"},{id:17,name:"Charger"},{id:18,name:"Battery"},{id:19,name:"Router"},{id:20,name:"Speaker"}]},{id:26,name:"Furniture",subcategories:[{id:1,name:"Chair"},{id:2,name:"Table"},{id:3,name:"Sofa"},{id:4,name:"Bed"},{id:5,name:"Desk"},{id:6,name:"Dresser"},{id:7,name:"Wardrobe"},{id:8,name:"Shelf"},{id:9,name:"Cupboard"},{id:10,name:"Cabinet"},{id:11,name:"Lamp"},{id:12,name:"Rug"},{id:13,name:"Curtain"},{id:14,name:"Mirror"},{id:15,name:"Cushion"},{id:16,name:"Blanket"},{id:17,name:"Pillow"},{id:18,name:"Mattress"},{id:19,name:"Bench"},{id:20,name:"Stool"}]},{id:27,name:"Tools",subcategories:[{id:1,name:"Hammer"},{id:2,name:"Screwdriver"},{id:3,name:"Wrench"},{id:4,name:"Pliers"},{id:5,name:"Saw"},{id:6,name:"Drill"},{id:7,name:"Tape Measure"},{id:8,name:"Level"},{id:9,name:"Chisel"},{id:10,name:"Sander"},{id:11,name:"Paintbrush"},{id:12,name:"Roller"},{id:13,name:"Ladder"},{id:14,name:"Wheelbarrow"},{id:15,name:"Shovel"},{id:16,name:"Hoe"},{id:17,name:"Rake"},{id:18,name:"Spade"},{id:19,name:"Ax"},{id:20,name:"Screw"}]},{id:28,name:"Music",subcategories:[{id:1,name:"Guitar"},{id:2,name:"Piano"},{id:3,name:"Drums"},{id:4,name:"Violin"},{id:5,name:"Flute"},{id:6,name:"Trumpet"},{id:7,name:"Saxophone"},{id:8,name:"Harp"},{id:9,name:"Cello"},{id:10,name:"Clarinet"},{id:11,name:"Trombone"},{id:12,name:"Oboe"},{id:13,name:"Accordion"},{id:14,name:"Banjo"},{id:15,name:"Mandolin"},{id:16,name:"Harmonica"},{id:17,name:"Bass Guitar"},{id:18,name:"Triangle"},{id:19,name:"Tambourine"},{id:20,name:"Maracas"}]},{id:29,name:"Holidays",subcategories:[{id:1,name:"Christmas"},{id:2,name:"Easter"},{id:3,name:"Halloween"},{id:4,name:"Thanksgiving"},{id:5,name:"New Year"},{id:6,name:"Valentine's Day"},{id:7,name:"Independence Day"},{id:8,name:"Hanukkah"},{id:9,name:"St. Patrick's Day"},{id:10,name:"Labor Day"},{id:11,name:"Mother's Day"},{id:12,name:"Father's Day"},{id:13,name:"Memorial Day"},{id:14,name:"Veterans Day"},{id:15,name:"Earth Day"},{id:16,name:"Cinco de Mayo"},{id:17,name:"Martin Luther King Jr. Day"},{id:18,name:"Presidents Day"},{id:19,name:"Groundhog Day"},{id:20,name:"April Fool's Day"}]},{id:30,name:"Emergency",subcategories:[{id:1,name:"Help"},{id:2,name:"Call 911"},{id:3,name:"Fire"},{id:4,name:"Police"},{id:5,name:"Ambulance"},{id:6,name:"Danger"},{id:7,name:"Stop"},{id:8,name:"Don't Touch"},{id:9,name:"Run"},{id:10,name:"Hide"},{id:11,name:"Stay"},{id:12,name:"Emergency"},{id:13,name:"First Aid"},{id:14,name:"Doctor"},{id:15,name:"Nurse"},{id:16,name:"Medicine"},{id:17,name:"Poison"},{id:18,name:"Sick"},{id:19,name:"Hurt"},{id:20,name:"Lost"}]}];var y=[{src:"/images/sample1.jpg",name:"Sample 1"},{src:"/images/sample2.jpg",name:"Sample 2"},{src:"/images/sample3.jpg",name:"Sample 3"}];n(14);var p=()=>{const[e,a]=Object(i.useState)(h),[n,d]=Object(i.useState)(null),[t,r]=Object(i.useState)(""),[o,s]=Object(i.useState)(""),[c,p]=Object(i.useState)(null),S=e=>{e.target.files&&e.target.files[0]&&p(URL.createObjectURL(e.target.files[0]))};return m.a.createElement("div",{className:"dashboard"},n?m.a.createElement("div",{className:"subcategories"},m.a.createElement("h2",null,n.name),m.a.createElement("button",{onClick:()=>d(null)},"Back"),m.a.createElement("div",{className:"subcategories-grid"},n.subcategories.map(i=>!i.hidden&&m.a.createElement("div",{key:i.id},m.a.createElement(u,{subcategory:i}),m.a.createElement("button",{onClick:()=>(i=>{const m=e.map(e=>e.id===n.id?{...e,subcategories:e.subcategories.map(e=>e.id===i?{...e,hidden:!0}:e)}:e);a(m)})(i.id)},"Hide")))),m.a.createElement("input",{type:"text",value:o,onChange:e=>s(e.target.value),placeholder:"New Subcategory Name"}),m.a.createElement("input",{type:"file",accept:"image/*",onChange:S}),m.a.createElement(g,{images:y,onSelect:p}),m.a.createElement("button",{onClick:()=>{const i=e.map(e=>{if(e.id===n.id){const a={id:e.subcategories.length+1,name:o,image:c,hidden:!1};return{...e,subcategories:[...e.subcategories,a]}}return e});a(i),s(""),p(null)}},"Add Subcategory")):m.a.createElement("div",null,m.a.createElement("div",{className:"categories-grid"},e.map(n=>!n.hidden&&m.a.createElement("div",{key:n.id},m.a.createElement(l,{category:n,onClick:d}),m.a.createElement("button",{onClick:()=>{return i=n.id,void a(e.map(e=>e.id===i?{...e,hidden:!0}:e));var i}},"Hide")))),m.a.createElement("input",{type:"text",value:t,onChange:e=>r(e.target.value),placeholder:"New Category Name"}),m.a.createElement("input",{type:"file",accept:"image/*",onChange:S}),m.a.createElement(g,{images:y,onSelect:p}),m.a.createElement("button",{onClick:()=>{const n={id:e.length+1,name:t,subcategories:[],image:c,hidden:!1};a([...e,n]),r(""),p(null)}},"Add Category")))};var S=()=>m.a.createElement("div",null,m.a.createElement(p,null));var b=()=>{const[e,a]=Object(i.useState)(h);return m.a.createElement("div",{className:"settings"},m.a.createElement("h2",null,"Settings"),m.a.createElement("div",{className:"categories-settings"},e.map(n=>n.hidden&&m.a.createElement("div",{key:n.id},m.a.createElement("p",null,n.name),m.a.createElement("button",{onClick:()=>{return i=n.id,void a(e.map(e=>e.id===i?{...e,hidden:!1}:e));var i}},"Show"),m.a.createElement("div",{className:"subcategories-settings"},n.subcategories.map(i=>i.hidden&&m.a.createElement("div",{key:i.id},m.a.createElement("p",null,i.name),m.a.createElement("button",{onClick:()=>((n,i)=>{const m=e.map(e=>e.id===n?{...e,subcategories:e.subcategories.map(e=>e.id===i?{...e,hidden:!1}:e)}:e);a(m)})(n.id,i.id)},"Show"))))))))};var C=()=>m.a.createElement("div",null,m.a.createElement(b,null));n(15);var E=function(){return m.a.createElement(r.a,null,m.a.createElement("div",{className:"App"},m.a.createElement("header",{className:"App-header"},m.a.createElement("h1",null,"AAC App")),m.a.createElement(o.c,null,m.a.createElement(o.a,{path:"/",element:m.a.createElement(s,null)}),m.a.createElement(o.a,{path:"/dashboard",element:m.a.createElement(S,null)}),m.a.createElement(o.a,{path:"/settings",element:m.a.createElement(C,null)}))))};n(16);t.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(E,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.f7af1b3a.chunk.js.map