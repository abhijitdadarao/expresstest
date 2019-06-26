var http=require("http")
http.createServer(function(req,resp)
{
	resp.write("Hello ScottyaZatya");
	resp.end();
}).listen(2000);