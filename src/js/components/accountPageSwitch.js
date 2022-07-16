(function () {
const $buttons = $('.js-account-button');
const $parent = $buttons.closest('.js-account-main');
const $back = $('.js-account-back-btn');

let current = 'preview';


function removeActive() {
  $buttons.removeClass('account__sidebar-button_active')
}

function setPageValue(value) {
  $parent.removeClass(current)
  current = value
  $parent.addClass(current)
}


$buttons.click(function () {
  const $t = $(this) 
  let $id = $t.data("id");

  if(!$parent.hasClass($id)) {
    removeActive();
    if($id != 'preview') {
      $t.addClass('account__sidebar-button_active')
    }

    setPageValue($id)
  }
})

$back.click(function() {
  removeActive()
  setPageValue('preview')
})
}());
