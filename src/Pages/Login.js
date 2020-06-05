import React from 'react';
import {Container, Typography,makeStyles,Fade,Grid} from '@material-ui/core'
import FormLogin from '../Components/FormLogin/FormLogin'
const useStyles = makeStyles({
    tittle:{
        color:'white',
        fontWeight:'lighter'
    },
    margin:{
        marginTop:'50px'
    }
})
function Login() {
    const classes = useStyles();
    return(
        <section>
            <Container className={classes.margin}>

                <Fade in timeout={2500}>
                    <Grid xs={8}className={classes.tittle}>
                        <Typography variant="h5" className={classes.tittle}>
                            Faça login para acessar o chat
                        </Typography>
                        <Typography color='secondary'>
                            Coloque um nome de usuario logo abaixo e clique em entrar
                        </Typography>
                    </Grid>
                    
                    
                </Fade>


            </Container>
            <Container className={classes.margin}>                            
                <FormLogin />
            </Container>
        </section>
        

        
    )
}

export default Login;