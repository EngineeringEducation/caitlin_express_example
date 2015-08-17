$("#run").on("click", function(){
	$.get("/users/run_thing",
		function(data){
			console.log(data);
		}
	);
});


var sendHubSpotReq = function (whatever) {
	$.post("/my_server_url_thing", data)
}