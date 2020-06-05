import React from 'react';
import { Typography,Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyle=makeStyles({
    chatBallonLeft:{
        background:'#EFEEEE',
        borderRadius:'25px',
        padding:'10px 10px',
        borderBottomLeftRadius:'5px',       
        
        float:'left',
        
        
       
        
    },
})
function Bleft(props) {
    const classes=useStyle();
    return(
        <>
            <Grid sm={12} item  className={classes.item}>
                
                <div className={classes.chatBallonLeft}>
                    <div>
                        <Typography color="secondary" align="left">
                            {props.nome}
                        </Typography>
                    </div>
                    <div>
                        <Typography align="left" >
                            {props.mensagem}
                        </Typography> 
                    </div>
                    
                </div>
                
            </Grid>
        </>
    )
}

export default Bleft;