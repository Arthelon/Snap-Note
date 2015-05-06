// function SaveTextFile() {
//   var savedText = document.getElementByID("txt").value;
//   var textBlob = new Blob([savedText], {type:'text/plain; charset=UTF-8'});
//   var downloadLink = document.createElement("a");
//   var textFileName = "blank.txt";
//   downloadLink.download = textFileName;
//   downloadLink.innerHTML = "HiddenLink";
//   downloadLink.click();
//   window.URL = window.URL || window.webkitURL
//   downloadLink.href = window.URL.createObjectURL(textBlob);
//   downloadLink.onclick = destroyLink;
//   downloadLink.style.display = "none";
//   document.body.appendChild(downloadLink);
//   downloadLink.click();
// }
// function destroyLink(event) {
//   document.body.removeChild(event.target);
// }

var noteDelete;
var deleteClick;
var fontcolor;
var txt = document.getElementById("txt");
var colors = ["#ff0000", "#000000", "#FFFFFF", "#FFFF00", "#00FF00", "#6fdcff"];
var $img = $("<img class='tick' src='images/tick.png'/>");
var $img2 = $("<img class='tick' src='images/tick.png'/>");
var $img3 = $("<img class='tick' src='images/tick.png'/>");
var $img4 = $("<img class='tick' src='images/tick.png'/>");
var tick1 = 2;
var tick2 = 1;
var tick3 = 1;
var tick4 = 4;
var noteNum = 0;
var noteArray = [[]];
// noteArray[0][0] = 1;
noteArray[0][1] = "";


(function () {
    //Font-Style Customisation
    $("#fstyle1").click(function () {
        $("#txt").css("font-family", "Crimson Text");
        tick1 = 0;
    });
    $("#fstyle2").click(function () {
        $("#txt").css("font-family", "Open Sans");
        tick1 = 1;
    });
    $("#fstyle3").click(function () {
        $("#txt").css("font-family", "Lato");
        tick1 = 2;
    });
    $("#fstyle4").click(function () {
        $("#txt").css("font-family", "Pontano Sans");
        tick1 = 3;
    });
    $("#fstyle5").click(function () {
        $("#txt").css("font-family", "PT Sans");
        tick1 = 4;
    });
    $("#fstyle6").click(function () {
        $("#txt").css("font-family", "Arvo");
        tick1 = 5;
    });
    $("#ft_style ul li").click(function() {
        $("."+tick1).remove();
        $img.appendTo("#fstyle"+(tick1+1));
    });

    //Font-Color Customisation
    $("#fcolor1").click(function () {
        $("#txt").css("color", "#ff0000");
        fontcolor = 0;
        tick2 = 0;
    });
    $("#fcolor2").click(function () {
        $("#txt").css("color", "#000000");
        fontcolor = 1;
        tick2 = 1;
    });
    $("#fcolor3").click(function () {
        $("#txt").css("color", "#FFFFFF");
        fontcolor = 2;
        tick2 = 2;
    });
    $("#fcolor4").click(function () {
        $("#txt").css("color", "#FFFF00");
        fontcolor = 3;
        tick2 = 3;
    });
    $("#fcolor5").click(function () {
        $("#txt").css("color", "#00FF00");
        fontcolor = 4;
        tick2 = 4;
    });
    $("#fcolor6").click(function () {
        $("#txt").css("color", "#6fdcff");
        fontcolor = 5;
        tick2 = 5;
    });
    $("#ft_color ul li").click(function() {
        $("."+tick2).remove();
        $img2.appendTo("#fcolor"+(tick2+1));
    });


    //Font-size Customisation
    $("#fsize1").click(function () {
        $("#txt").css("font-size", "16px");
        tick3 = 0;
    });
    $("#fsize2").click(function () {
        $("#txt").css("font-size", "14px");
        tick3 = 1;
    });
    $("#fsize3").click(function () {
        $("#txt").css("font-size", "12px");
        tick3 = 2;
    });
    $("#ft_size ul li").click(function() {
        $("."+tick3).remove();
        $img3.appendTo("#fsize"+(tick3+1));
    });

    //Themes Customisation
    $("#t1").click(function () {
        $("body").css("background-color", "#EBEBEB");
        $(".button").css("background-color", "#EBEBEB");
        $(".4").remove();
        $img4.appendTo(this);
        tick4 = 0;
    });
    $("#t2").click(function () {
        $("body").css("background-color", "#FFFFFF");
        $(".button").css("background-color", "#FFFFFF");
        $(".4").remove();
        $img4.appendTo(this);
        tick4 = 1;
    });
    $("#t3").click(function () {
        $("body").css("background-color", "#912573");
        $(".button").css("background-color", "#912573");
        $(".4").remove();
        $img4.appendTo(this);
        tick4 = 2;
    });
    $("#t4").click(function () {
        $("body").css("background-color", "#FFA500");
        $(".button").css("background-color", "#FFFFFF");
        $(".4").remove();
        $img4.appendTo(this);
        tick4 = 3;
    });
    $("#t5").click(function () {
        $("body").css("background-color", "#FFF977");
        $(".button").css("background-color", "#FFF977");
        $(".4").remove();
        $img4.appendTo(this);
        tick4 = 4;
    });
    $("#t6").click(function () {
        $("body").css("background-color", "#D7EAFB");
        $(".button").css("background-color", "#D7EAFB");
        $(".4").remove();
        $img4.appendTo(this);
        tick4 = 5;
    });
    $("#themes ul li").click(function() {
        $("."+tick4).remove();
        $img4.appendTo("#t"+(tick4+1));
    });
    // if (noteArray.)

    //Autosave function
    function storeData() {
      if (noteArray.length === 0) {
        noteArray = [[]];
        noteArray[0][0] = 1;
        noteArray[0][1] = "";
        init2();
      }
      console.log(noteArray);
      noteNum = parseInt(localStorage.getItem("noteNum"));
      noteArray[noteNum][1] = txt.value; //noteNum undefined?s
      localStorage.setItem("fstyle", txt.style.fontFamily);
      localStorage.setItem("fsize", txt.style.fontSize);
      localStorage.setItem("theme", document.body.style.backgroundColor);
      localStorage.setItem("fcolor", colors[fontcolor]);
      localStorage.setItem("notes", JSON.stringify(noteArray));
      localStorage.setItem("tick1", tick1);
      localStorage.setItem("tick2", tick2);
      localStorage.setItem("tick3", tick3);
      localStorage.setItem("tick4", tick4);

      var height = parseInt(txt.style.height) - 400;
      if (height < 400) height = 400;
      txt.style.height = height + "px";
      //txt.style.height = parseInt(txt.scrollHeight) + 'px';
    }
    function init() {
      console.log("hi");
      noteArray = JSON.parse(localStorage.getItem("notes"));
      $("#plus").click(function() {
        noteArray.push([parseInt(noteArray[noteArray.length - 1]) + 1,""]);
        $("#scroll ul").append("<li id='"+noteArray[noteArray.length - 1][0]+"'>Blank</li>");
        noteNum = noteArray[noteArray.length - 1][0] - 1;
      });
      $("#scroll ul").on("click", "li", function() {
        var $liID = $(this).attr("id");
        for(var i = 0; i < noteArray.length; i++) { //indexOf does not work for multi-dimensional arrays
          if(noteArray[i][0] == $liID) {
            noteNum = i;
            localStorage.setItem("noteNum", noteNum);
            txt.value = noteArray[noteNum][1];
          }
        }
      });
      $("#delete").click(function() {
        deleteClick = true;
        if (deleteClick) {
          deleteClick = false;
          $("#scroll ul").on("click", "li", function() {
            var liID = $(this).attr("id");
            $(this).remove();
            for(var i = 0; i < noteArray.length; i++) {
              if(noteArray[i][0] == liID) {
                noteDelete = i;
                break;
              }
            }
            noteArray.splice(noteDelete, 1);
            if (noteDelete < noteNum) {
              noteNum--;
            } else if (noteNum == noteDelete) {
              noteNum = 0;
            }
          });
        }
      });
      noteNum = parseInt(localStorage.getItem("noteNum"));
      // txt.value = parseInt(localStorage.getItem("noteNum"));
      txt.value = noteArray[noteNum][1];
      // txt.value = noteArray;

      //Customisations
      var newColor = localStorage.getItem("fcolor");
      txt.style.fontFamily = localStorage.getItem("fstyle");
      txt.style.fontSize = localStorage.getItem("fsize");
      $("#txt").css("color", newColor);
      document.body.style.backgroundColor = localStorage.getItem("theme");

      tick1 = localStorage.getItem("tick1");
      tick2 = localStorage.getItem("tick2");
      tick3 = localStorage.getItem("tick3");
      tick4 = localStorage.getItem("tick4");

      $img.appendTo("#ft_style ul li:eq("+ tick1 +")"); //nth-child method deprecated
      $img2.appendTo("#ft_color ul li:eq("+ tick2 +")");
      $img3.appendTo("#ft_size ul li:eq("+ tick3 +")");
      $img4.appendTo("#themes ul li:eq("+ tick4 +")");
     }
    function init2() {
      for (num=0; noteArray!==null && noteArray.length > 0 && num < noteArray.length; num++) {
         $("#scroll ul").append("<li id='"+noteArray[num][0]+"'><a>Blank</a></li>");
      }
      txt.onkeyup = storeData;
      storeData();
    }
    init();
    init2();
}());
