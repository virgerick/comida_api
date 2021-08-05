"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const MenuSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        default: 0,
        validate(value) {
            if (value < 0)
                throw new Error("Negative price aren't real.");
        }
    },
    rate: {
        type: Number,
        required: false,
        default: 0,
    },
    imagen: {
        type: String,
        required: false,
        trim: true
    },
});
exports.default = mongoose_1.model('Menu', MenuSchema);
//# sourceMappingURL=Menu.js.map