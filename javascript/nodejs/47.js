// nodejs experiment 47
const http=require("http");const server=http.createServer((request,response)=>{response.writeHead(200,{"Content-Type":"application/json"});response.end(JSON.stringify({message:"Node.js API"}));});server.listen(3000);
