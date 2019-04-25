
let sniffleList = $(".achoo")
let toggleButton = $('#toggleDoggle')

$(document).ready(() => {

  let toggieDoggie = (event) => {
    sniffleList.toggle()
  }

  let submitButton = $('#add')

  let ingredientCount
  let appendAwesomeItem = (event) => {
    event.preventDefault()
    let inputText= $('#awesomeType').val()

    if (inputText.includes("dog")){
      alert("This awesome sauce has too much dog already!!")
    } else {
      const awesomeList = $('#list')

      let numOfIngredients = awesomeList.children().length

      if(numOfIngredients > 4 && numOfIngredients < 8){
        awesomeList.append(`<li class="yellowWarning"> ${inputText} </li>`)
      }

      else if(numOfIngredients===8){
        awesomeList.append(`<li class="blueWarning"> ${inputText} </li>`)

      }
      else if(numOfIngredients===9){
        awesomeList.fadeOut(4000)
        $('#awesomeTime').fadeIn(4000)
      }
      else{
        awesomeList.append(`<li> ${inputText} </li>`)
      }

      numOfIngredients = awesomeList.children().length
      ingredientCount = $("#count")
      ingredientCount.text(`Number of Awesome Ingredients: ${numOfIngredients}`)
    }

    $('#awesomeType').val("")
  }

  submitButton.click(appendAwesomeItem)
  toggleButton.click(toggieDoggie)

  $('#awesomeTime').hide()
  let $count = $('#count')
  if ($count.innerText === '10') {
    $("#awesomeTime").fadeIn(5000)
  }
});
