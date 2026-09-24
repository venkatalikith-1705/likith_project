// JavaScript item 42
function callbackExample(done) { setTimeout(() => done("Callback complete"), 100); } const promise = Promise.resolve("Promise complete"); async function run() { console.log(await promise); } callbackExample(console.log); run();
