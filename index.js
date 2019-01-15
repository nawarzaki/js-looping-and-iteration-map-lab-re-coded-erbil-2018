// Code your solution in this file.

  function lowerCaseDrivers(drivers) {
    let x = drivers.map(function (name) {
return name.toLowerCase()
})
return x
}

function nameToAttributes(drivers) {

  let x = drivers.map(function (c) {
    return  c.split(" ")
  })
let y = x.map(function (c) {

    return  Object.assign({firstName: c[0], lastName: c[1] })
})


    return y
  }

function attributesToPhrase(drivers) {
  let x = drivers.map(function (c) {
    return  (`${c['name']} is from ${c['hometown']}`)
  })
  return x
}
