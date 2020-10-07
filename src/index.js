module.exports = function check(str, bracketsConfig) {
  let arr = [];
 let similarElements = [];

  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < bracketsConfig.length; k++) {
          
          /*Если символ равен первому элементу массива*/
          if (str[i] == bracketsConfig[k][0]) {   
                        
            /*Если первый элемент массива равен второму элементу массива*/
            if (bracketsConfig[k][0] === bracketsConfig[k][1]) {

                if (similarElements.find(item => item == bracketsConfig[k][0]) === undefined) {
                  similarElements.push (bracketsConfig[k][0]); 
                  arr.push (bracketsConfig[k][1]);
              } else {
                  let filteredSimilar = similarElements.filter(item => item == bracketsConfig[k][0]);
                  if (filteredSimilar.length % 2 === 0) {
                    arr.push (bracketsConfig[k][1]); 
                    similarElements.push (bracketsConfig[k][0]); 
                  } else {
                    if (str[i] == arr[arr.length - 1]) {
                      arr.pop();
                      similarElements.push (bracketsConfig[k][0]); 
                    } else return false;
                  }
              } 
       /*-------------------------КОНЕЦ ОБРАБОТКИ ОДИНАКОВЫХ ЭЛЕМЕНТОВ-------------------*/         
             }else {
                arr.push (bracketsConfig[k][1]); 
              }    
            /*Если символ равен второму элементу массива*/
            
            }else if (str[i] == bracketsConfig[k][1]) {
            if (str[i] == arr[arr.length - 1]) {
              arr.pop();
            } else return false;
            }
          
      }
    }
  if (arr.length > 0) return false;
  return true;
}
