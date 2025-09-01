import { PrismaClient } from "../../src/generated/prisma";
const prisma = new PrismaClient() 


// -------------------------------------------input---------------------------------------



export const getinput = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    try{
        const data = await prisma.input.findFirst({
            where:{
                id
            }
        })
        res.json({data,sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}


export const addinput = async(req:any,res:any)=>{
    const data = req.body
    try{
        const result = await prisma.input.create({
            data
        })
        res.json({msg:"input added successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}

export const updateinput = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    const data = req.body
    try{
        const result = await prisma.input.update({
            where:{
                id
            },
            data
        })
        res.json({msg:"input updated successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}

export const deleteinput = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    const data = req.body
    try{
        const isvalid = await prisma.input.findFirst({
            where:{
                id
            }
        })
        if(!isvalid){
            res.json({msg:"input id is not valid",sucess:true})
        }
        const result = await prisma.input.delete({
            where:{
                id
            }
        })
        res.json({msg:"input deleted successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}





//------------------------------------------output-----------------------------------------







export const getoutput = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    try{
        const data = await prisma.output.findFirst({
            where:{
                id
            }
        })
        res.json({data,sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}


export const addoutput = async(req:any,res:any)=>{
    const data = req.body
    try{
        const result = await prisma.output.create({
            data
        })
        res.json({msg:"output added successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}

export const updateoutput = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    const data = req.body
    try{
        const result = await prisma.output.update({
            where:{
                id
            },
            data
        })
        res.json({msg:"output updated successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}

export const deleteoutput = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    const data = req.body
    try{
        const isvalid = await prisma.output.findFirst({
            where:{
                id
            }
        })
        if(!isvalid){
            res.json({msg:"output id is not valid",sucess:true})
        }
        const result = await prisma.output.delete({
            where:{
                id
            }
        })
        res.json({msg:"output deleted successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}




// ----------------------------------------sampleinput----------------------------------




export const getsampleinput = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    try{
        const data = await prisma.sampleinput.findFirst({
            where:{
                id
            }
        })
        res.json({data,sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}


export const addsampleinput = async(req:any,res:any)=>{
    const data = req.body
    try{
        const result = await prisma.sampleinput.create({
            data
        })
        res.json({msg:"sampleinput added successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}

export const updatesampleinput = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    const data = req.body
    try{
        const result = await prisma.sampleinput.update({
            where:{
                id
            },
            data
        })
        res.json({msg:"sampleinput updated successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}

export const deletesampleinput = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    const data = req.body
    try{
        const isvalid = await prisma.sampleinput.findFirst({
            where:{
                id
            }
        })
        if(!isvalid){
            res.json({msg:"sampleinput id is not valid",sucess:true})
        }
        const result = await prisma.sampleinput.delete({
            where:{
                id
            }
        })
        res.json({msg:"sampleinput deleted successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}


// --------------------------------------sampleoutput------------------------------------------





export const getsampleoutput = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    try{
        const data = await prisma.sampleoutput.findFirst({
            where:{
                id
            }
        })
        res.json({data,sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}


export const addsampleoutput = async(req:any,res:any)=>{
    const data = req.body
    try{
        const result = await prisma.sampleoutput.create({
            data
        })
        res.json({msg:"sampleoutput added successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}

export const updatesampleoutput = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    const data = req.body
    try{
        const result = await prisma.sampleoutput.update({
            where:{
                id
            },
            data
        })
        res.json({msg:"sampleoutput updated successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}

export const deletesampleoutput = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    const data = req.body
    try{
        const isvalid = await prisma.sampleoutput.findFirst({
            where:{
                id
            }
        })
        if(!isvalid){
            res.json({msg:"sampleoutput id is not valid",sucess:true})
        }
        const result = await prisma.sampleoutput.delete({
            where:{
                id
            }
        })
        res.json({msg:"sampleoutput deleted successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}