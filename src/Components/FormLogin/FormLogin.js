import React from 'react';
import {TextField,makeStyles,Grid,Button,Typography} from '@material-ui/core'
import { dataUserAction } from '../../Actions/userDataAction'
import{connect} from 'react-redux'
const useStyles = makeStyles({
    input:{
        color:'#FFFFFF'
    },
    margin:{
        margin:'10px 0px',
    
    }
})


function FormLogin(props) {
    const classes = useStyles();

    function handleClick(){
        let nome= document.getElementById("nome").value;
        
        props.dataUserAction(nome);
        document.getElementById("nome").value=""
        
    }
    return(
        <section>       
            <Grid>
                <Typography className={classes.input}>Nome:</Typography>
                <TextField id="nome" variant="outlined" className={classes.margin} inputProps={{className:classes.input}} label="Digite seu nome" color="secondary" />

            </Grid>
            
            <Grid>
                
                <Button color="secondary" onClick={handleClick} variant="contained" size="large" className={classes.margin}>
                    Entrar
                </Button>
            </Grid>


        </section>
    )
}

const mapActionToProps = {
    dataUserAction
}
const mapStateToProps = (item)=>({

})

export default connect(mapStateToProps,mapActionToProps)(FormLogin);