import React,{useState,useEffect} from 'react';
import { Typography,Grid,Grow,Box } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Messenger from "./../Messenger/Messenger";
import Bright from '../Bright/Bright'
import Bleft from '../Bleft/Bleft'

// DataBase
import {db} from '../Firebase/Firebase'


// REDUX
import {connect } from 'react-redux'
// Style
const useStyle = makeStyles({
    tittle:{
        color:'#EFEEEE',
        fontWeight:'200',
        padding:'10px',
        fontSize:'.5em'
    },
    container:{
        
        display:'flex',        
        flexDirection:'column'
    },
    item:{
        padding:'10px'
    },
    chat:{
        width:'100%',
        height:'350px',
        maxHeight:'80%',
        overflowY:'scroll',
        
        boxShadow:'3px 2px 5px rgba(6, 6, 6, 0.31)inset ,-3px -2px 5px #2f2e2e1a inset',
        borderRadius:'25px',

        
    }
}) 








function Chat(props) {



    const classes=useStyle();

    // States
    const [Mensagens,setMensagens]=useState([])
    const [checked,setChecked]=useState(true)
    const [checked2,setChecked2]=useState(true)

    const[numId,setNumId]=useState(0)
   
   

    const list = Mensagens.map((item)=>{
        
       if(props.mainUser === item.nome){
        return(
            
            <Grow in timeout={500}>
                <Grid sm={12} item  className={classes.item}>       
                    
                   <Bright nome={item.nome} mensagem={item.mensagem}/>

                    
                       
                
                </Grid>
            </Grow>
            
        )
       }else{
        return(
            
            <Grow in>
                <Grid sm={12} item  className={classes.item}>       
                    
                   <Bleft nome={item.nome} mensagem={item.mensagem}/>

                    
                       
                
                </Grid>
            </Grow>
            
        ) 
       }
        
        
       
    })
    
    // Ciclo de vida
    useEffect(()=>{
        setTimeout(()=>{
            setChecked(false)
        },7000)
        setTimeout(()=>{
            setChecked2(false)
        },10000)
        
        
        let arrayRealTime=[]
        let numberRealTime=0;
       





        db.collection('usuarios').orderBy('id','asc').onSnapshot(function(item){
            arrayRealTime=[];
            numberRealTime=0;
            item.forEach((i)=>{
                console.log("Novo item adicionado ao database")
                numberRealTime++;
                arrayRealTime.push(i.data())
            })
            setNumId(numberRealTime)
            setMensagens(arrayRealTime)
           
        })
        

    },[])


    
    
    
    
    
    
    function handleClick() {

        
        let divscroll=document.getElementById("scrll");
        divscroll.scrollTo(0,divscroll.scrollHeight)
        
        let number = numId+1; 
        setNumId(number)
        
        let name=props.mainUser;
        let msg = document.getElementById('msg').value;
        let obj = {nome:name,mensagem:msg,id:numId}
        let novoArray=Mensagens.slice();
        novoArray.push(obj)
        
        setMensagens(novoArray)
        document.getElementById('msg').value=""
        
         db.collection('usuarios').add(obj)
             .then(function(){
                 console.log("Mensagem enviada")
             }).catch(function(){
                 console.log("Mensagem nao enviada")
             })
        

       
    }





    return(
        <>
        <Grow in={checked} timeout={3000}>
            <Grid>
                <Typography type="h2"align="center" className={classes.tittle}> 

                    Bem vindo <Typography color="primary"> {props.mainUser}</Typography>

                </Typography>
            </Grid>
        </Grow>
        <section className={classes.chat} id="scrll">
        <Grid container className={classes.container}> 
            
              
            {list}           
           
        </Grid>
        </section>
        <Grid>
        <Typography type="h4" align="right" className={classes.tittle}>
            Desenvolvido por Matheus Barbosa
        </Typography>
        
        </Grid>
        
        <Messenger handleClick={handleClick}/>
        </>
        
      
    )

}
const mapStateToProps = (state)=>({
    
    mainUser:state.userData.mainUser
})
export default connect(mapStateToProps)(Chat);