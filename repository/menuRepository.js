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
exports.MenuRepository = void 0;
const Menu_1 = __importDefault(require("../models/Menu"));
class MenuRepository {
    get(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (filter != null)
                return yield Menu_1.default.find(filter);
            return yield Menu_1.default.find({});
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Menu_1.default.findOne({ _id: id });
        });
    }
    add(model) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(model);
            return yield Menu_1.default.create(model);
        });
    }
    update(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Menu_1.default.findOneAndUpdate({ _id: id }, model);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Menu_1.default.findByIdAndDelete({ _id: id });
        });
    }
}
exports.MenuRepository = MenuRepository;
//# sourceMappingURL=menuRepository.js.map