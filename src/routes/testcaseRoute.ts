import express,{Router} from 'express'
import {
    getinput,
    addinput,
    updateinput,
    deleteinput,
    getoutput,
    addoutput,
    updateoutput,
    deleteoutput,
    getsampleinput,
    addsampleinput,
    updatesampleinput,
    deletesampleinput,
    getsampleoutput,
    addsampleoutput,
    updatesampleoutput,
    deletesampleoutput
} from '../controller/testcase'

const testcaseRoute:Router = express.Router()

testcaseRoute.post("/input/",addinput);
testcaseRoute.get('/input/:id',getinput);
testcaseRoute.put('/input/:id',updateinput);
testcaseRoute.delete('/input/:id',deleteinput);

testcaseRoute.post('/output/',addoutput);
testcaseRoute.get('/output/:id',getoutput);
testcaseRoute.put('/output/:id',updateoutput);
testcaseRoute.delete('/output/:id',deleteoutput);
 
testcaseRoute.post('/sampleinput/',addsampleinput);
testcaseRoute.get('/sampleinput/:id',getsampleinput);
testcaseRoute.put('/sampleinput/:id',updatesampleinput);
testcaseRoute.delete('/sampleinput/:id',deletesampleinput);

testcaseRoute.post('/sampleoutput/',addsampleoutput);
testcaseRoute.get('/sampleoutput/:id',getsampleoutput);
testcaseRoute.put('/sampleoutput/:id',updatesampleoutput);
testcaseRoute.delete('/sampleoutput/:id',deletesampleoutput);

export default testcaseRoute