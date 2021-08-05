"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const menu_route_1 = __importDefault(require("./routes/menu.route"));
const body_parser_1 = require("body-parser");
const app = express_1.default();
app.set('port', config_1.default.PORT);
app.use(body_parser_1.json());
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
// app.use(verseRoutes);
// app.use(bibleRoutes);
// Routers 
app.use(menu_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map