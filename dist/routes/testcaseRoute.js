"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testcase_1 = require("../controller/testcase");
const testcaseRoute = express_1.default.Router();
testcaseRoute.post("/input/", testcase_1.addinput);
testcaseRoute.get('/input/:id', testcase_1.getinput);
testcaseRoute.put('/input/:id', testcase_1.updateinput);
testcaseRoute.delete('/input/:id', testcase_1.deleteinput);
testcaseRoute.post('/output/', testcase_1.addoutput);
testcaseRoute.get('/output/:id', testcase_1.getoutput);
testcaseRoute.put('/output/:id', testcase_1.updateoutput);
testcaseRoute.delete('/output/:id', testcase_1.deleteoutput);
testcaseRoute.post('/sampleinput/', testcase_1.addsampleinput);
testcaseRoute.get('/sampleinput/:id', testcase_1.getsampleinput);
testcaseRoute.put('/sampleinput/:id', testcase_1.updatesampleinput);
testcaseRoute.delete('/sampleinput/:id', testcase_1.deletesampleinput);
testcaseRoute.post('/sampleoutput/', testcase_1.addsampleoutput);
testcaseRoute.get('/sampleoutput/:id', testcase_1.getsampleoutput);
testcaseRoute.put('/sampleoutput/:id', testcase_1.updatesampleoutput);
testcaseRoute.delete('/sampleoutput/:id', testcase_1.deletesampleoutput);
exports.default = testcaseRoute;
//# sourceMappingURL=testcaseRoute.js.map