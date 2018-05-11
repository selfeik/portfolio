function toggle_visibility(id) {
 for (var i = 1; i <=58; i++) {
  $( "#img"+i ).hide();
  $(".active").removeClass("active");
}
  $("#"+id).show(500);
  $(".btn-"+id).addClass("active");
}