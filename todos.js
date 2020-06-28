//optional method 
// if 
    
// ($(this).css ("color") === "rgb(255, 0, 0)"){
//     $(this).css ({ 
//         color : "black" ,
//       textDecoration : "line-through"
//     });
// }

// else{
//     $(this).css ({ 
//         color : "red" ,
//       textDecoration : "line-through"
//     });
// }




$("ul").on("click" , "li" , function(){
 $(this).toggleClass("completed");


});

$("ul").on("click" , "span" ,  function(event){
   
$(this).parent().fadeOut(500,function(){
    $(this).remove();
});
event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
if (event.which === 13) {
 var todotext = $(this).val();
 $(this).val ("");
 $("ul").append("<li> <span> <i class='fas fa-trash-alt'></i> </span> " + todotext + "</li>")
}
});
$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();
});


$('button').append('<a href="javascript:window.print()"> <i class="fas fa-print"></a>');