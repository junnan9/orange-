$(function(){
	$.ajax({
		url:"menv_Detail.html",
		type:"get",
		success:function(res){
			$(res).replaceAll("#menv_Detail");
		}
	})
})