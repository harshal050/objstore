"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const source_code_1 = require("../controller/source_code");
const source_codeRoute = express_1.default.Router();
source_codeRoute.post('/', source_code_1.addsource_code);
source_codeRoute.get('/:id', source_code_1.getsource_code);
source_codeRoute.put('/:id', source_code_1.updatesource_code);
source_codeRoute.delete('/:id', source_code_1.deletesource_code);
exports.default = source_codeRoute;
//# sourceMappingURL=source_codeRoute.js.map