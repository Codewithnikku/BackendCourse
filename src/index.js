import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
});
connectDB().then(() => {
    const startPort = process.env.PORT;
    
    const tryListen = (port) => {
        const server = app.listen(port, () =>{
            console.log(`Server is running on port ${startPort}`);
        });
        
        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.warn(`Port ${port} is already in use. Trying port ${port + 1}...`);
                tryListen(port + 1);
            } else {
                console.error("Server error:", err);
            }
        });
    };
    
    tryListen(startPort);
})
.catch((err) => {
    console.error("Error connecting to database:", err);
});