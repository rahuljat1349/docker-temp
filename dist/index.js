"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
mongoose_1.default.connect(process.env.MONGO_URL || "mongodb://localhost:27017").then(() => {
    console.log(`connected to mongodb at ${mongoose_1.default.connection.host}`);
});
app.get("/", (req, res) => {
    res.send("Hello");
});
app.listen(3000, () => console.log("listening to port 3000.."));
