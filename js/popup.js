/*jslint undef: true, sloppy: true, browser: true */

var dropclick = false;
var $overlay = $("#overlay");
$(function () {
    //"Settings" button drop-down
    $(".dropdown").click(function () {
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
    $("#dd_style").click(function () {
        $("#ft_style").show(500);
        $overlay.show();
    });
    $("#dd_size").click(function () {
        $("#ft_size").show(500);
        $overlay.show();
    });
    $("#dd_color").click(function () {
        $("#ft_color").show(500);
        $overlay.show();
    });
    $("#dd_theme").click(function () {
        $("#themes").show(500);
        $overlay.show();
    });
    $("#edit").click(function() {
        $("#notes").show(500);
        $overlay.show();
    });
    $overlay.click(function () {
        $(".lightbox").hide(400);
        $(this).hide();
    });

    //Large part of the next bit was taken from runnable.com
    $("#download").click(function () {
      var savedText = document.getElementById("txt").value;
      var textBlob = new Blob([savedText], {type:'text/plain; charset=UTF-8'});
      var downloadLink = document.createElement("a");
      var textFileName = "blank.txt";
      downloadLink.download = textFileName;
      downloadLink.innerHTML = "HiddenLink";
      downloadLink.click();
      window.URL = window.URL || window.webkitURL;
      downloadLink.href = window.URL.createObjectURL(textBlob);
      downloadLink.onclick = destroyLink;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
    });
    function destroyLink(event) {
      document.body.removeChild(event.target);
    }
});
