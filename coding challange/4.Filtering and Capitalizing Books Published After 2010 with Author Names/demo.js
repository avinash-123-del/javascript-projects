let booklist = [
    {
        book: "Machine",
        Author: "anurag yadav",
        Year: 2012
    },
    {
        book: "C++",
        Author: "nt rao",
        Year: 2013
    },

    {
        book: "Electrical",
        Author: "kusum sahu",
        Year: 2009
    },

    {
        book: "CS Fundamentals",
        Author: "harry jason",
        Year: 2007
    }
]
let CapitalAuthorbook = []
function fun(booklist) {
    let a,b
    let bookB2010 = []
    let bookA2010 = []
    booklist.filter((e)=>{
        if(e.Year<2010){
            bookB2010.push(e)
        }
        else{
            bookA2010.push(e)
        }
    })
    bookA2010.map((e)=>{
    a = (e.Author[0]).toUpperCase()
    b = e.Author.slice(1)
    e.Author = (a+b)
    // console.log(e.Author)
})
console.log("Book published after 2010:",bookA2010)
    bookB2010.map((e)=>{
    a = (e.Author[0]).toUpperCase()
    b = e.Author.slice(1)
    e.Author = (a+b)
    // console.log(e.Author)
})
console.log("Book published before 2010:",bookB2010)

}
fun(booklist)
