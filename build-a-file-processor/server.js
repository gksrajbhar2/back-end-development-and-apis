// // Starter file — add your code here
// const fs = require('fs');
// // console.log(fs);
// fs.readFile("./assets/poem.txt" ,{ encoding : "utf-8"} ,(err, data) => {
//    console.log(data);
// });

// // console.log(data);

// const fsPromises = require("fs").promises;
// async function main(){
//     const data = await fsPromises.readFile("./assets/poem.txt" , {encoding : "utf-8",});
//     console.log(data);
// }

// main();

//write file
// const fs = require('fs');
// fs.writeFileSync('./assets/output.txt', "Hello, freeCodeCamp!");

// fs.appendFileSync("./assets/output.txt" , "\nMy name is Gyanendra Kumar Rajbhar");
// const exists = fs.existsSync("./assets/output.txt");
// console.log(exists);


//read directory give files and folder inside given directory
// const entries = fs.readdirSync("assets");
// console.log(entries); 

// const buf = Buffer.from("Hello, Node!");
// console.log(buf);//<Buffer 48 65 6c 6c 6f 2c 20 4e 6f 64 65 21>
// console.log(buf.toString("hex"));//48656c6c6f2c204e6f646521

// console.log(buf.toString("base64"));//SGVsbG8sIE5vZGUh

// const buf = Buffer.alloc(8 , 0xff);
// console.log(buf);

// const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
// console.log(decoded); //freeCodeCamp

// const crypto = require('crypto');
// const hash =  crypto.createHash('sha256').update('freeCodeCamp!').digest('hex');
// console.log(hash);

// const crypto = require("crypto");

// const random = crypto.randomBytes(16).toString("hex");
// console.log(random);

// const id = crypto.randomUUID();
// console.log(id);

// const os = require('os');
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.hostname());

// console.log(os.cpus().length); 

// const path = require("path");
// const fullPath = path.join(__dirname,"assets", "poem.txt");
// console.log(fullPath);

// console.log(path.basename(fullPath));
// console.log(path.dirname(fullPath));
// console.log(path.extname(fullPath));

//console.log(path.join("assets", "..", "server.js")); // assets/../server.js → assets/../server.js (relative)
 //console.log(path.resolve("assets", "..", "server.js")); //absolute path

// const parts = path.parse(fullPath);
// console.log(parts);



// console.log(process.argv); // [ '/path/to/node', '/path/to/server.js', 'hello', 'world' ]
// console.log(process.argv[2]); // 'hello


// process.stdout.write("Hello from stdout\n ");
// // process.stdout.write("World\n"); // newline only when you add \n
// process.stderr.write("Hello from stderr\n");




const fs = require("fs");
// const readable = fs.createReadStream("assets/poem.txt" , {encoding : "utf-8"});
// readable.on("data" , (chunk) =>{
//     console.log(chunk);
// });

// readable.on("end" , () =>{
//     console.log("Done reading");
// });


// const writable = fs.createWriteStream("assets/stream-output.txt");
// writable.write("First chunk\n");
// writable.write("Second chunk\n");
// writable.end();


// const readable = fs.createReadStream("assets/poem.txt");
// const writable = fs.createWriteStream("assets/stream-output.txt");
// readable.pipe(writable);

