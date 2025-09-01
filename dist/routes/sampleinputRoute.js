"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sampleinput_1 = require("../controller/sampleinput");
const sampleinputRoute = express_1.default.Router();
sampleinputRoute.post('/', sampleinput_1.addsampleinput);
sampleinputRoute.get('/:id', sampleinput_1.getsampleinput);
sampleinputRoute.put('/:id', sampleinput_1.updatesampleinput);
sampleinputRoute.delete('/:id', sampleinput_1.deletesampleinput);
exports.default = sampleinputRoute;
//# sourceMappingURL=sampleinputRoute.js.map