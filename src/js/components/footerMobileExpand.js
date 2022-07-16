(function () {
  const $trigger = $(".js-footerLinks-btn-trigger");

  $trigger.click(function () {
    const $t = $(this);
    const $parent = $t.closest(".js-footerLinks-item");

    console.log(this)

    if ($parent.hasClass("pre-footer__mobile-open")) {
      $parent.removeClass("pre-footer__mobile-open");
    } else {
      $parent.addClass("pre-footer__mobile-open")
    }
  })
})();