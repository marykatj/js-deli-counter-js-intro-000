var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {

    katzDeliLine.push(`${newName}`);
    return `Welcome, ${newName[i]}. You are number ${katzDeliLine.length} in line.`
    }

function nowServing(katzDeliLine) {
    if (1 < katzDeliLine.length) {
      return "There is nobody waiting to be served!"
    } else {
      var firstPerson = katzDeliLine.shift();
      return `Currently serving ${firstPerson}.`
    }
}

function currentLine(katzDeliLine) {

  if (1 > katzDeliLine.length) {
    return "The line is currently empty."
  } else {
    var lineInformation = [];
    for (let i = 0; 1 < katzDeliLine.length; i++) {
      lineInformation.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${lineInformation.join(' , ')}`
  }
}
