(function () {
const $trigger =  $('.js-account-orders-btn');
const $parent = $trigger.closest(".js-account-orders");

let currentState = "current"

function removeActive(value, target) {
  if(value) {
    target.addClass("active")
  } else {
    target.removeClass("active")
  } 
}

$trigger.click(function () {
  let $id = $(this).data("id");

  removeActive(false, $trigger)
  removeActive(true, $(this))

  if(!$parent.hasClass($id)) {
    $parent.removeClass(currentState)
    currentState = $id
    $parent.addClass(currentState)
  }

})

} ())