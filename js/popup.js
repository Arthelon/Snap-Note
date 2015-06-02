/*jslint undef: true, sloppy: true, browser: true */
var $overlay = $("#overlay");
var dropclick = false;
$(function() {
  //"Settings" button drop-down
  $(".dropdown").click(function() {
    //Boolean used to create a button toggle.
    if (dropclick) {
      dropclick = false;
      $(".dropdown-menu").hide(300);
    } else {
      dropclick = true;
      $(".dropdown-menu").show(300);
    }
  });

  //Overlay & Lightbox show/hide
  $overlay.hide();
  $("#dd_style").click(function() { //.click() event handler attached to "Customisation" options. When they are clicked their allocated lightbox appears
    $("#ft_style").show(500);
    $overlay.show();
  });
  $("#dd_size").click(function() {
    $("#ft_size").show(500);
    $overlay.show();
  });
  $("#dd_color").click(function() {
    $("#ft_color").show(500);
    $overlay.show();
  });
  $("#dd_theme").click(function() {
    $("#themes").show(500);
    $overlay.show();
  });
  $("#edit").click(function() {
    $("#notes").show(500);
    $overlay.show();
  });
});
