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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menuRepository_1 = require("../repository/menuRepository");
const router = express_1.Router();
const Repostory = new menuRepository_1.MenuRepository();
router.get("/menu", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Repostory.get(req.query);
        res.status(200).json(result);
    }
    catch (error) {
        res.json(error);
    }
}));
router.get("/menu/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Repostory.find(req.params.id);
        res.json(result);
    }
    catch (error) {
        res.json(error);
    }
}));
router.post("/menu/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Repostory.add(req.body);
        res.json(result);
    }
    catch (error) {
        res.json(error);
    }
}));
router.put("/menu/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Repostory.update(req.params.id, req.body);
        res.json(result);
    }
    catch (error) {
    }
}));
router.delete("/menu/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Repostory.delete(req.params.id);
        res.json(result);
    }
    catch (error) {
        res.json(error);
    }
}));
exports.default = router;
//# sourceMappingURL=menu.route.js.map