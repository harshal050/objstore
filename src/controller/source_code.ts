import { PrismaClient } from "../../src/generated/prisma";
const prisma = new PrismaClient() 


// -------------------------------------------source_code---------------------------------------



export const getsource_code = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    try{
        const data = await prisma.source_code.findFirst({
            where:{
                id
            }
        })
        res.json({data,sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}


export const addsource_code = async(req:any,res:any)=>{
    const data = req.body
    try{
        const result = await prisma.source_code.create({
            data
        })
        res.json({msg:"source_code added successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}

export const updatesource_code = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    const data = req.body
    try{
        const result = await prisma.source_code.update({
            where:{
                id
            },
            data
        })
        res.json({msg:"source_code updated successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}

export const deletesource_code = async(req:any,res:any)=>{
    const id = Number(req.params.id)
    const data = req.body
    try{
        const isvalid = await prisma.source_code.findFirst({
            where:{
                id
            }
        })
        if(!isvalid){
            res.json({msg:"source_code id is not valid",sucess:true})
        }
        const result = await prisma.source_code.delete({
            where:{
                id
            }
        })
        res.json({msg:"source_code deleted successfully",sucess:true})
    }catch(e){
        res.json({err:e,sucess:false})
    }
}

