"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("../config/index"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongooseOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            auth: {
                user: index_1.default.MONGO_USER,
                password: index_1.default.MONGO_PASSWORD
            }
        };
        const db = yield mongoose_1.default.connect(`mongodb+srv://${index_1.default.MONGO_HOST}/${index_1.default.MONGO_DATABASE}`, mongooseOptions);
        console.log('Database is conected to:', db.connection.name);
    }
    catch (error) {
        console.error(error);
    }
}))();
//# sourceMappingURL=database.js.map