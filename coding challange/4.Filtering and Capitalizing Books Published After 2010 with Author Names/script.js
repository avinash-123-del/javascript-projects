let bookList ={
    "Machine" : {
        "m.h.harry":2009
    },

    "CS Fundamentals": {
        "t.n rao" : 2012
    },

    "Electrical" : {
        "ss yadav" : 2007
    }
} 
let bookYear = []
let bookArr = Object.values(bookList)
for(i=0; i<bookArr.length; i++){
   bookYear.push(Object.values(bookArr[i]))
}
bookyear = bookYear.filter(e=>{
    return (e<2010)
})
console.log(bookyear)