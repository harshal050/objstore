"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testcase_1 = require("../controller/testcase");
const testcase = express_1.default.Router();
testcase.post('input/', testcase_1.addinput);
testcase.get('input/:id', testcase_1.getinput);
testcase.put('input/:id', testcase_1.updateinput);
testcase.delete('input/:id', testcase_1.deleteinput);
testcase.post('output/', testcase_1.addoutput);
testcase.get('output/:id', testcase_1.getoutput);
testcase.put('output/:id', testcase_1.updateoutput);
testcase.delete('output/:id', testcase_1.deleteoutput);
testcase.post('sampleinput/', testcase_1.addsampleinput);
testcase.get('sampleinput/:id', testcase_1.getsampleinput);
testcase.put('sampleinput/:id', testcase_1.updatesampleinput);
testcase.delete('sampleinput/:id', testcase_1.deletesampleinput);
testcase.post('sampleoutput/', testcase_1.addsampleoutput);
testcase.get('sampleoutput/:id', testcase_1.getsampleoutput);
testcase.put('sampleoutput/:id', testcase_1.updatesampleoutput);
testcase.delete('sampleoutput/:id', testcase_1.deletesampleoutput);
exports.default = testcase;
//# sourceMappingURL=testcase.js.map