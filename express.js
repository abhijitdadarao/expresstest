var http=require("http")
http.createServer(function(req,resp)
{
	resp.write("Hello Scott");
	resp.end();
}).listen(2000);