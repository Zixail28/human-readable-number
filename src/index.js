module.exports = function toReadable (number) {
  const strNumEdin = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const strNumEd = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const strNumTT = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const strNumDes = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const getStr = number.toString()
  if(getStr.length === 1){
  let num = Number(getStr)
  return `${strNumEdin[num]}`
  } else if (getStr.length === 2){
      if(Number(getStr[0]) === 1){
        let num = Number(getStr[1])
        return `${strNumTT[num]}`
      } return `${strNumDes[Number(getStr[0])]}${checkdes(getStr)}${strNumEd[Number(getStr[1])]}`
  } else if(getStr.length === 3){
      let result = ''
      result = `${strNumEd[Number(getStr[0])]} hundred`
      if(getStr[1] === '0' && getStr[2] === '0'){
          return result
      } else if(getStr[1] === '0' && getStr[2] !== '0') {
          result = `${result} ${strNumEd[Number(getStr[2])]}`
      } else if(getStr[1] !== '0' && getStr[2] === '0'){
        result = `${result} ${strNumDes[Number(getStr[1])]}`
      } else if(getStr[1] == '1' && getStr[2] !== '0'){
        result = `${result} ${strNumTT[Number(getStr[2])]}`
      } else if(getStr[1] !== '0' && getStr[2] !== '0'){
          result = `${result} ${strNumDes[Number(getStr[1])]} ${strNumEd[Number(getStr[2])]}`
      }
      return result
  }

  function checkdes(getStr){
      if(getStr[1] === '0'){return ''} return ' '
  }
}
