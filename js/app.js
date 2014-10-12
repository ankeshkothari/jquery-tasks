$(document).ready(function(){
	/** show and hide remove button */ 
	$("li").on("mouseenter",function(){
		$(this).find(".removecontainer").toggle();
	});
		$("li").on("mouseleave",function(){
		$(this).find(".removecontainer").toggle();
	});

	/** remove task on click of button */  
	$("li").on("click",".remove",function(){
		$(this).closest("li").remove();
	});

	/** strike and unstrike on checkbox */ 
	$("li").on("click", ".check", function(){
		$(this).closest("li").toggleClass("checkstrike");
	});

	/** add task */  
	$(".addtaskli").on("click","button",function(){
		var addtask = $(".addtask").val()
		$(this).closest("ul").append("<li>"+"<input type='checkbox' class='check'>"+addtask+"<span class='removecontainer'><button class='remove'>Remove</button></span></li>");
	});
});