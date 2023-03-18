let bookList =[
    {"Machine" : {"m.h.harry":2009}},{"CS Fundamentals": {"t.n.rao" : 2012}},{"Electrical":{"ss yadav" : 2007}}]

let bookBefore2010 = []
let bookAfter2010 = []
let bookArr = Object.values(bookList)
bookArr.filter((e,i,a) => {
    if(Object.values(e)<2010){
        bookBefore2010.push(e)
    }
    else{
        bookAfter2010.push(e)
    }
});
console.log("Book Published Before 2010:",bookBefore2010)
console.log("Book Published after 2010:",bookAfter2010)
bookList.forEach(element => {
    console.log(element)
});
