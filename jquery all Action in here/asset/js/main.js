$(document).ready(function(){
    // 1
    $("#hide").click(function(){
        $("#hst").hide("slow");
    });
    $("#show").click(function(){
        $("#hst").show("fast");
    });
    $("#toggle").click(function(){
        $("#hst").toggle(2000);
    });

    //2

    $("#fadein").click(function(){
        $("#f-iott").fadeIn();
    });
    $("#fadeout").click(function(){
        $("#f-iott").fadeOut("slow");
    });
    $("#fadetoggle").click(function(){
        $("#f-iott").fadeToggle();
    });
    $("#fadeto").click(function(){
        $("#f-iott").fadeTo(2000, .3);
    });

    //3
    
    $("#slideup").click(function(){
        $("#s-udt").slideUp();
    });
    $("#slidedown").click(function(){
        $("#s-udt").slideDown("slow");
    });
    $("#slidetoggle").click(function(){
        $("#s-udt").slideToggle();
    });

    //4

    $("#animate").click(function(){
        $(".anime").animate({
            left:"1000px",
            width:"400px",
            height:"200px"
        }, 4000, function(){
            alert("The Rakib")
        });
    });
    $('#stop').click(function(){
        $(".anime").stop();
    });

    //5
    
    $("#chine").click(function(){
        $("#c-method").css({
            "background":"red",
            "color":"#fff"
        })
        .slideUp()
        .slideDown(2000)
    })

    // 6
    $("#text").click(function(){
        alert("i am learning jquery with youtube videos").text();
    });

    $("#html").click(function(){
        alert("i <h2>am</h2> learning " +$(".addpara").html());
    });

    $("#value").click(function(){
        alert("what " +$("#in-val").val());
    });

    // 7
    $("#val-full").click(function(){
        $("#val-f").val("raju mia")
    });

    $("#dep-cha").click(function(){
        $(".dep").html("<b>commarce</b>")
    });

    $("#text-c").click(function(){
        $(".silk").text("receved you taka check ");
    });

    // 8

    $("#attri-c").click(function(){
        $(".link-c").attr({
            "href":"https://wwww.facebook.com",
            "title":"facebook"
        })
        $(".google-c").attr({
            "href":"https://wwww.facebook.com",
            "title":"facebook"
        })
        .text("facebook")
    });

    // 9
    
    $("#prepend").click(function(){
        $(".paab").prepend("my name is ")
    });

    $("#append").click(function(){
        $(".paab").append(" Hossain")
    });

    $("#before").click(function(){
        $(".paab").before(" red zoon")
    });

    $("#after").click(function(){
        $(".paab").after(" green zoon")
        .css({
            "color":"green"
        });
    });

    // 10
    
    $("#empty").click(function(){
        $("#er-method").empty()
    });

    $("#remove").click(function(){
        $("#er-method").remove()
    });

    // 11
    
    $("#addclass").click(function(){
        $(".art-method").addClass("styles")
    });

    $("#removeclass").click(function(){
        $(".art-method").removeClass("styles")
    });

    $("#toggleclass").click(function(){
        $("#art-method").toggleClass("styles")
    });

    // 12
    
    $("#display").click(function(){
        var val = "";
        val +="The width is : "+$(".parfect ").width()+"</br>";
        val +="The height is : "+$(".parfect ").height()+"</br>";
        val +="The innerwidth is : "+$(".parfect ").innerWidth()+"</br>";
        val +="The innerheight is : "+$(".parfect ").innerHeight()+"</br>";
        val +="The outerwidth is : "+$(".parfect ").outerWidth()+"</br>";
        val +="The outerheight is : "+$(".parfect ").outerHeight()+"</br>";
        val +="The outerwidth is : "+$(".parfect ").outerWidth(true)+"</br>";
        val +="The outerheight is : "+$(".parfect ").outerHeight(true)+"</br>";
        $("#showed").html(val);
    });

    //13

    $("#submit").click(function(e){
        var inValid = true;
        $("input[type='text']#requered").each(function(){
            if($(this).val()==''){
                inValid = false;
                $(this).css({
                    "border":"1px solid red",
                    "background":'#fffccc'
                });
            }else{
                $(this).css({
                    "border":"",
                    "background":''
                });
            }
        });
        if(inValid == false){
            e.preventDefault();
        }else{
            clear();
            document.getElementById("reply") .innerHTML = "THANK FOR SENTING DEAR";
            return false;
        }
    });

    //costomar function

    function clear(){
        $('#myaction :input').each(function(){
            $(this).val('');
        });
    }

    //14
    $('#animation').click(function(){
	var leftmat = $('.gone')

	leftmat.animate({left: "300px"});
	leftmat.animate({height:"400px"}, 'slow');
	leftmat.animate({width:"400px"}, 2000);

	});

    //15
    $(".spa").parent().css({
		"border" : "5px solid red"
	});

	$(".spa").parents("div").css({
		"border" : "5px solid yellow"
	});
	$(".spa").parentsUntil("div").css({
		"font-size": "25px",
		"color":"green"
	});

    //16

    $(".decending").children().css({
		"border" : "5px solid grey"
	});
	$(".decending").find("li").css({
		"border" : "5px solid black"
	});

    //17
    
	$(".selection div").first().css({
		"background" : "grey",
		"margin-bottom" : "20px"
	});

	$(".selection div").last().css({
		"background" : "red",
		"margin-top": "20px",
		"color": "green"

	});

	$(".selection div").eq("1").css({
		"background" : "lightblue",
		"color": "green"

	});

	$(".selection div a").filter(".thispara").css({
		"background" : "lightblue",
		"color": "green"

	});

	$(".sub-sel a").not(".thise").css({
		"font-size" : "30px",
		"color": "red"

	});
  

    //18

    $(".siblings h1").siblings().css({
		"border" : "5px solid grey"
	});

	$(".siblings h2").siblings("span").css({
		"border" : "5px solid green"
	});

	$(".siblings h2").next().css({
		"color" : "red",
        "font-size":"20px"
	});
	$(".siblings h2").prev().css({
		"color" : "green"
	});

	$(".siblings a").prevUntil("h1").css({
		"background" : "yellow",
	});
});