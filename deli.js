
function takeANumber(deli, customer) {
  deli.push(customer)
  return `Welcome, ${customer}. You are number ${deli.length} in line.`
}

function nowServing(deli) {
  if (deli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${deli.shift()}.`
  }
}

function currentLine(deli) {
  if (deli.length === 0) {
    return "The line is currently empty."
  } else {
    var string = "The line is currently:"
    for (var i = 0; i < deli.length; i++) {
      string = string.concat(` ${i+1}. ${deli[i]}`)
      if (i < deli.length - 1) {
        string = string.concat(",")
      }
    } 
  }
  return string
}