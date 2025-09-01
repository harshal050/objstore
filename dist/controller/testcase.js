"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletesampleoutput = exports.updatesampleoutput = exports.addsampleoutput = exports.getsampleoutput = exports.deletesampleinput = exports.updatesampleinput = exports.addsampleinput = exports.getsampleinput = exports.deleteoutput = exports.updateoutput = exports.addoutput = exports.getoutput = exports.deleteinput = exports.updateinput = exports.addinput = exports.getinput = void 0;
const prisma_1 = require("../../src/generated/prisma");
const prisma = new prisma_1.PrismaClient();
// -------------------------------------------input---------------------------------------
const getinput = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const data = await prisma.input.findFirst({
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
exports.getinput = getinput;
const addinput = async (req, res) => {
    const data = req.body;
    try {
        const result = await prisma.input.create({
            data
        });
        res.json({ msg: "input added successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.addinput = addinput;
const updateinput = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    try {
        const result = await prisma.input.update({
            where: {
                id
            },
            data
        });
        res.json({ msg: "input updated successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.updateinput = updateinput;
const deleteinput = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    try {
        const isvalid = await prisma.input.findFirst({
            where: {
                id
            }
        });
        if (!isvalid) {
            res.json({ msg: "input id is not valid", sucess: true });
        }
        const result = await prisma.input.delete({
            where: {
                id
            }
        });
        res.json({ msg: "input deleted successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.deleteinput = deleteinput;
//------------------------------------------output-----------------------------------------
const getoutput = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const data = await prisma.output.findFirst({
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
exports.getoutput = getoutput;
const addoutput = async (req, res) => {
    const data = req.body;
    try {
        const result = await prisma.output.create({
            data
        });
        res.json({ msg: "output added successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.addoutput = addoutput;
const updateoutput = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    try {
        const result = await prisma.output.update({
            where: {
                id
            },
            data
        });
        res.json({ msg: "output updated successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.updateoutput = updateoutput;
const deleteoutput = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    try {
        const isvalid = await prisma.output.findFirst({
            where: {
                id
            }
        });
        if (!isvalid) {
            res.json({ msg: "output id is not valid", sucess: true });
        }
        const result = await prisma.output.delete({
            where: {
                id
            }
        });
        res.json({ msg: "output deleted successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.deleteoutput = deleteoutput;
// ----------------------------------------sampleinput----------------------------------
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
// --------------------------------------sampleoutput------------------------------------------
const getsampleoutput = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const data = await prisma.sampleoutput.findFirst({
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
exports.getsampleoutput = getsampleoutput;
const addsampleoutput = async (req, res) => {
    const data = req.body;
    try {
        const result = await prisma.sampleoutput.create({
            data
        });
        res.json({ msg: "sampleoutput added successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.addsampleoutput = addsampleoutput;
const updatesampleoutput = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    try {
        const result = await prisma.sampleoutput.update({
            where: {
                id
            },
            data
        });
        res.json({ msg: "sampleoutput updated successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.updatesampleoutput = updatesampleoutput;
const deletesampleoutput = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    try {
        const isvalid = await prisma.sampleoutput.findFirst({
            where: {
                id
            }
        });
        if (!isvalid) {
            res.json({ msg: "sampleoutput id is not valid", sucess: true });
        }
        const result = await prisma.sampleoutput.delete({
            where: {
                id
            }
        });
        res.json({ msg: "sampleoutput deleted successfully", sucess: true });
    }
    catch (e) {
        res.json({ err: e, sucess: false });
    }
};
exports.deletesampleoutput = deletesampleoutput;
//# sourceMappingURL=testcase.js.map