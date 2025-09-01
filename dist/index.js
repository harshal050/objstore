"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testcaseRoute_1 = __importDefault(require("./routes/testcaseRoute"));
const source_codeRoute_1 = __importDefault(require("./routes/source_codeRoute"));
const app = (0, express_1.default)();
const PORT = 3002;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/testcase', testcaseRoute_1.default);
app.use('/source_code', source_codeRoute_1.default);
app.listen(PORT, () => {
    console.log("objstore is listen on port " + PORT);
});
//# sourceMappingURL=index.js.map