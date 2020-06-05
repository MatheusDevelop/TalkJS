import {firebaseDB} from '../Components/Firebase/Firebase'
import {setState} from 'react'

const initial ={
    mainUser:"",
    status:false
}

  
            
const UserData = (state=initial,action) => {
    
    switch (action.type) {
        case 'Verify':
            let usuario=action.payload.user;
            return{...state,mainUser:usuario.toString(),status:true}                       
        break;
        
        



        
    }
    return state;

};

export default UserData;