$(function() {
  let $list = $("ul");
  let $newItem = $("#newItem");

  $newItem.on("submit", function(e) {
    e.preventDefault();
    let text = $('input[type="text"]').val();
    $list.append(`<li>${text}</li>`);
    $('input[type="text"]').val("");
  });

  $list.on("click", "li", function() {
    let $this = $(this);
    $this.remove();
  });
});
