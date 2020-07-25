function check(){
	if ($('#form [name=mail]').val() == ""){
		var mail = "入力なし";
	} else {
		var mail = $('#form [name=mail]').val();
    }
    if($('#form [name=textarea]').val() == ""){
		var textarea = "入力なし";
	} else {
		var textarea = $('#form [name=comment]').val();
    }
    $('.text_result').text('テキストボックス : ' + text);
	$('.ta_result').text('複数行のテキスト : ' + textarea);

    return false;
};
  
  $(function(){
	  $(`div`).hide().fadeIn(800);
  });

  $(function(){
	 $(window).scroll(function (){
	  $("#introduction").each(function(){
		var imgPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > imgPos - windowHeight + windowHeight/5){
		  $(this).addClass("fade_on");
		} else {
		  $(this).removeClass("fade_on");
		}
	  });
	});
  });
  
  $(function(){
	$(window).scroll(function (){
	  $("#hobby").each(function(){
		var imgPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > imgPos - windowHeight + windowHeight/5){
		  $(this).addClass("fade_on");
		} else {
		  $(this).removeClass("fade_on");
		}
	  });
	});
  });

  $(function(){
	$(window).scroll(function (){
	  $("#career").each(function(){
		var imgPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > imgPos - windowHeight + windowHeight/5){
		  $(this).addClass("fade_on");
		} else {
		  $(this).removeClass("fade_on");
		}
	  });
	});
  });

  $(function(){
	$(window).scroll(function (){
	  $("#contact").each(function(){
		var imgPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > imgPos - windowHeight + windowHeight/5){
		  $(this).addClass("fade_on");
		} else {
		  $(this).removeClass("fade_on");
		}
	  });
	});
  });

  $(function(){
	$(window).scroll(function (){
	  $("#achivement").each(function(){
		var imgPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > imgPos - windowHeight + windowHeight/5){
		  $(this).addClass("fade_on");
		} else {
		  $(this).removeClass("fade_on");
		}
	  });
	});
  });