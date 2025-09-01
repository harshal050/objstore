"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletesource_code = exports.updatesource_code = exports.addsource_code = exports.getsource_code = void 0;
const prisma_1 = require("../../src/generated/prisma");
const prisma = new prisma_1.PrismaClient();
// -------------------------------------------source_code---------------------------------------
const getsource_code = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const data = await prisma.source_code.findFirst({
            where: {
                id
            }
        });
        res.json({ data, sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.getsource_code = getsource_code;
const addsource_code = async (req, res) => {
    const data = req.body;
    try {
        const result = await prisma.source_code.create({
            data
        });
        res.json({ msg: "source_code added successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.addsource_code = addsource_code;
const updatesource_code = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    try {
        const result = await prisma.source_code.update({
            where: {
                id
            },
            data
        });
        res.json({ msg: "source_code updated successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.updatesource_code = updatesource_code;
const deletesource_code = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    try {
        const isvalid = await prisma.source_code.findFirst({
            where: {
                id
            }
        });
        if (!isvalid) {
            res.json({ msg: "source_code id is not valid", sucess: true });
        }
        const result = await prisma.source_code.delete({
            where: {
                id
            }
        });
        res.json({ msg: "source_code deleted successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.deletesource_code = deletesource_code;
//# sourceMappingURL=source_code.js.map