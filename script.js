
$("h1").on("mouseover", function(){
  $("h1").css("color", "purple");
});


// $(".nav-item1").mouseover(function(){
//     $(".div1").animate({
//       width: '60px'
//     },"fast");
//   });
//   $(".nav-item1").mouseleave(function(){
//       $("div1").css("background-color", "lightgray");
//     });
//   $(".nav-item2").mouseover(function(){
//       $(".div2").animate({
//         width: '60px'
//       },"fast");
//     });
//
//     $(".nav-item3").mouseover(function(){
//         $(".div3").animate({
//           width: '60px'
//         },"fast");
//       });
//
//       $(".nav-item4").mouseover(function(){
//           $(".div4").animate({
//             width: '60px'
//           },"fast");
//         });
//
//         // MOUSE LEAVE
//
//         $(".nav-item1, .nav-item2, .nav-item3, .nav-item4 ").mouseleave(function(){
//      $(".div1, .div2 .div3 .div4").css("background-color", "none");
//      });
//

        // net k code
reload();
  function reload() {
    // $(".brand").css("visibility","visible");
    $(".brand").animate({
           right: '0px'
   },"slow");
  }

       $(".nav-item1").mouseenter(function(){
         $(".div1").animate({
                width: '60px'
        },"fast");
        $(".div1").animate({
               height: '7px'
       },"fast");
        });
        $(".nav-item1").mouseleave(function(){
          $(".div1").animate({
                 width: '0px'
            },"fast");
        });

        $(".nav-item2").mouseenter(function(){
          $(".div2").animate({
                 width: '40px'
         },"fast");
         $(".div2").animate({
                height: '7px'
        },"fast");
         });
         $(".nav-item2").mouseleave(function(){
           $(".div2").animate({
                  width: '0px'
             },"fast");
         });

         $(".nav-item3").mouseenter(function(){
           $(".div3").animate({
                  width: '90px'
          },"fast");
          $(".div3").animate({
                 height: '7px'
         },"fast");
          });
          $(".nav-item3").mouseleave(function(){
            $(".div3").animate({
                   width: '0px'
              },"fast");
          });

          $(".nav-item4").mouseenter(function(){
            $(".div4").animate({
                   width: '70px'
           },"fast");
           });
           $(".nav-item4").mouseleave(function(){
             $(".div4").animate({
                    width: '0px'
               },"fast");
           });
           // BUTTON
///////////////////////////////////// box1///////////////////////////////////////////
           $(".div-arrow").mouseenter(function(){
             $(".button-side").css("visibility","visible")
            });
            $(".div-arrow").mouseleave(function(){
              $(".button-side").css("visibility", "hidden")
            });

           $(".box").mouseenter(function(){
             $(".box-inner").css("visibility", "visible");
             $(".button-side").css("visibility", "visible");
             $(".box").animate({
                 width: '200px'
             },"fast");
             $(".box").animate({
                 height: '521px'
             },"fast");
             $(".box-inner").css("width", "100%");
             $(".button-side").text("<<")
             // $(".box").css("border-top-right-radius", "100%");
             // $(".box").css("border-bottom-right-radius", "100%");
             $(".button-side").click(function(){
               $(".box-inner").css("visibility", "hidden");
               $(".box").animate({
                   width: '0px'
               },"fast");
               $(".box").animate({
                   padding: '5px'
               },"fast");
               $(".button-side").text(">")
               $(".box").css("border-top-right-radius", "0%");
               $(".box").css("border-bottom-right-radius", "0%");

             });
         });
/////////////////////////////////////// BOX2/////////////////////////////////////////////////////
$(".div-arrow2").mouseenter(function(){
  $(".button-side2").css("visibility","visible")
 });
 $(".div-arrow2").mouseleave(function(){
   $(".button-side2").css("visibility", "hidden")
 });

$(".box2").mouseenter(function(){
  $(".box-inner2").css("visibility", "visible");
  $(".button-side2").css("visibility", "visible");
  $(".box-inner2").css("width", "100%");
  $(".box2").css("margin-right", "400px");
  $("#inner2").css("width", "100%");

  $(".box2").animate({
      width: '200px'
  },"fast");
  $(".box2").animate({
      height: '521px'
  },"fast");
  $(".button-side2").text("<<")
  // $(".box").css("border-top-right-radius", "100%");
  // $(".box").css("border-bottom-right-radius", "100%");
  $(".button-side2").click(function(){
    $(".box-inner2").css("visibility", "hidden");
    $(".box2").animate({
        width: '0px'
    },"fast");
    $(".box2").animate({
        padding: '5px'
    },"fast");
    $(".button-side2").text(">")
    $(".box2").css("border-top-right-radius", "0%");
    $(".box2").css("border-bottom-right-radius", "0%");

  });
});





//////////////////////////////////////////////////BOX3//////////////////////////////////////////////
$(".box3").mouseenter(function(){
  $(".box-inner3").css("visibility", "visible");
  $(".button-side3").css("visibility", "visible");
  $(".box-inner3").css("text-align", "center");
  $(".box-inner3").css("font-size", "15px");
  $(".box-inner3").css("border", "solid 2px blue");
  $(".box3").css("border-right", " solid 2px white");
  $(".box-inner3").css("width", "100%");
  $("#inner3").css("width", "100%");

  $(".box3").css("padding","0px")
  $(".box3").animate({
      width: '200px'
  },"fast");
  $(".box3").animate({
      height: '519px'
  },"fast");
  $(".box-inner3").css("width", "100%");
  $(".button-side3").text("<<")
  // $(".box").css("border-top-right-radius", "100%");
  // $(".box").css("border-bottom-right-radius", "100%");
  $(".button-side3").click(function(){
    $(".box-inner3").css("visibility", "hidden");
    $(".box3").animate({
        width: '0px'
    },"fast");
    $(".box3").animate({
        padding: '5px'
    },"fast");
    $(".button-side").text(">")
    $(".box3").css("border-top-right-radius", "0%");
    $(".box3").css("border-bottom-right-radius", "0%");

  });
});

//////////////////////////////////////////BOX4/////////////////////////////////////////////////////////////////////////

$(".div-arrow4").mouseenter(function(){
  $(".button-side4").css("visibility","visible")
 });
 $(".div-arrow4").mouseleave(function(){
   $(".button-side4").css("visibility", "hidden")
 });

$(".box4").mouseenter(function(){
  $(".box-inner4").css("visibility", "visible");
  $(".button-side4").css("visibility", "visible");
  $(".box-inner4").css("border", "solid 2px blue");
  $(".box4").css("border-right", " solid 2px white");
  $(".box-inner4").css("border", "solid 2px blue");
  $(".box4").css("border-right", " solid 2px white");
  $(".box-inner4").css("width", "100%");
  $(".box-inner4").css("width", "100%");
  $("#inner4").css("width", "100%");


  $(".box4").animate({
      width: '200px'
  },"fast");
  $(".box4").animate({
      height: '520px'
  },"fast");
  $(".button-side4").text("<<")
  // $(".box").css("border-top-right-radius", "100%");
  // $(".box").css("border-bottom-right-radius", "100%");
  $(".button-side4").click(function(){
    $(".box-inner4").css("visibility", "hidden");
    $(".box4").animate({
        width: '0px'
    },"fast");
    $(".box4").animate({
        padding: '5px'
    },"fast");
    $(".button-side4").text(">")
    $(".box4").css("border-top-right-radius", "0%");
    $(".box4").css("border-bottom-right-radius", "0%");

  });
});



      //targetiing button-top
      $(".button-top").mouseenter(function(){
        $("#butt-icon").css("visibility", "visible")
      });
           $(".button-top").mouseleave(function(){
             $("#butt-icon").css("visibility", "hidden")
           });

                      $(".container-fluid1").mouseenter(function(){
                        $(".container-fluid1").css("border-bottom-width","30%")
                        $(".container-fluid1").css("border-bottom","solid 1px white")
                      $("#love").css("font-size","30px")
                      $("#love").css("visibility","visible")
                      // $("#butt-icon").css("visibility", "visible")

                      // $(".container-fluid").animate({
                      //
                      // },"slow")
                      $(".container-fluid1").css("width","98%")
                      // $(".container-fluid").css("border-bottom-left-radius","15%")
                      // $(".container-fluid").css("border-bottom-right-radius","15%")

                        $(".button-top").click(function() {
                          $("#love").css("font-size","5px")
                          $("#love").css("visibility","hidden")

                          // $(".container-fluid").css("border-bottom-left-radius","0%")
                          // $(".container-fluid").css("border-bottom-right-radius","0%")
                        });
                      });

     //targetting button top




























     //
     //     $(".button").mouseenter(function(){
     //   $(".button").show();
     // });
     // $(".button").mouseleave(function(){
     //   $(".button").show();
     // });
