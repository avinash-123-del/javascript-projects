let arr = ['',
    "HTML and Semantics",
    "Starting with CSS",
    "Working Template",
    "Mobile responsive webpages",
    "Grid and Flex-box in CSS",
    "Projects using HTML &amp; CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database ",
    "Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers",
    "Starting and Completing Full Fledge Projects"
]
console.log(arr.length)
let display = document.getElementById("display")
let ul = document.getElementById("ul")
let initialValue = parseInt(display.textContent)
function add() {
    let list = document.createElement("li")
    initialValue = initialValue + 1
    display.textContent = initialValue
    if(initialValue<arr.length){
        list.textContent = arr[initialValue]
        ul.appendChild(list)
        console.log(arr[initialValue])
        console.log(initialValue)
    }
    else if(initialValue>=arr.length){
        let end = document.getElementById("end")
        end.classList.add = "endclass"
        end.textContent = "all items have been added"
    }
    
}



