const database = [
    {name: "John", country: "Israel", age: 19, isMarried: true},
    {name: "Mary", country: "Israel", age: 29, isMarried: false},
    {name: "Bill", country: "Belgium", age: 10, isMarried: false},
    {name: "Jane", country: "France", age: 30, isMarried: true},
    {name: "Hanna", country: "France", age: 9, isMarried: false},
    {name: "George", country: "Israel", age: 80, isMarried: true}
];

// ---1---
function isMarried() {
    const res = database.filter(function (value) {
        if (value.isMarried) {
            return value
        }
    })
    console.log(res)
}

// ---2---
const comparatorFun = function (a, b) {
    if (a.age > b.age) return 1
    if (a.age === b.age) return 0
    if (a.age < b.age) return -1
}

function sortByAge() {
    console.log(database.sort(comparatorFun))
}

// ---3---
function averageAge() {
    const res = database.reduce(function (accum, value, index, array) {
        accum += value.age
        if (index === array.length - 1) {
            return accum / array.length
        } else {
            return accum
        }
    }, 0)
    console.log(res)
}

// ---4---
function statisticByCountry() {
    const res = database.reduce(function (accum, value) {
        if (accum[value.country]) {
            accum[value.country]++
        } else {
            accum[value.country] = 1
        }
        return accum
    }, {})

    console.log(JSON.stringify(res))
}

// ---5---   // Why prints another one object in array??
function sortMarried() {
    const res = database.filter(function (value) {
        if (value.isMarried) {
            return database.sort((value1, value2) => {
                if (value1.name > value2.name) return 1
                if (value1.name === value2.name) return 0
                if (value1.name < value2.name) return -1
            })
        }
    })
    console.log(res)

    const res2 = database.filter(function (value) {
        if (!value.isMarried) {
            return database.sort((value1, value2) => {
                if (value1.age > value2.age) return -1
                if (value1.age === value2.age) return 0
                if (value1.age < value2.age) return 1
            })
        }
    })
    console.log(res2)
// ???
    const res3 = database.filter(function (value) {
        if (value.isMarried){
          return database.reduce(function (accum, value,index, array) {
              accum += value.age
              if (index === array.length){
                  return accum / array.length
              }else {
                  return accum
              }
            },0)
        }
    })
    console.log(res3)
}

// ---6---
const positionInput = document.getElementById('user_position')

function remove() {
    if (positionInput.value === ''){
        alert('Please get a number user')
    }else if (positionInput.value < 0) {
        alert('Wrong user number')
    }else{
        database.splice(positionInput.value, 1 )
    }
    console.log(database)
}



