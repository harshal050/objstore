"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletesampleinput = exports.updatesampleinput = exports.addsampleinput = exports.getsampleinput = void 0;
const prisma_1 = require("../../src/generated/prisma");
const prisma = new prisma_1.PrismaClient();
const getsampleinput = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const data = await prisma.sampleinput.findFirst({
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
exports.getsampleinput = getsampleinput;
const addsampleinput = async (req, res) => {
    const data = req.body;
    try {
        const result = await prisma.sampleinput.create({
            data
        });
        res.json({ msg: "sampleinput added successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.addsampleinput = addsampleinput;
const updatesampleinput = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    try {
        const result = await prisma.sampleinput.update({
            where: {
                id
            },
            data
        });
        res.json({ msg: "sampleinput updated successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.updatesampleinput = updatesampleinput;
const deletesampleinput = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    try {
        const isvalid = await prisma.sampleinput.findFirst({
            where: {
                id
            }
        });
        if (!isvalid) {
            res.json({ msg: "sampleinput id is not valid", sucess: true });
        }
        const result = await prisma.sampleinput.delete({
            where: {
                id
            }
        });
        res.json({ msg: "sampleinput deleted successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.deletesampleinput = deletesampleinput;
//# sourceMappingURL=sampleinput.js.map