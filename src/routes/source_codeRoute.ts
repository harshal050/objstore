import express,{Router} from 'express'
import {
    getsource_code,
    addsource_code,
    updatesource_code,
    deletesource_code
} from '../controller/source_code'

const source_codeRoute:Router = express.Router()

source_codeRoute.post('/',addsource_code);
source_codeRoute.get('/:id',getsource_code);
source_codeRoute.put('/:id',updatesource_code);
source_codeRoute.delete('/:id',deletesource_code);

export default source_codeRoute