"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const configurations = dotenv_1.default.config();
// console.log(configurations);
exports.default = {
    PORT: process.env.PORT || 5000,
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'comida-database',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost'
};
//# sourceMappingURL=index.js.map