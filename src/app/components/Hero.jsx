"use client";
import { motion } from "framer-motion";
import {Box, Button, Grid, Avatar, Typography} from "@mui/material";
import Image from "next/image";

export default function Hero(){
    return(
        <motion.div
        initial={{opacity:0, y:40}}
        animate={{opacity:1, y:0}}
        transition={{duration:1}}
        >
        <Box
         sx={{
            minHeight:"80vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            px:{xs:2, md:6},
            py:{xs:6, md:10},
         }}
        >
         <Grid container spacing={4} alignItems="center"
         justifyContent="center" textAlign={{xs:"center", md:"left"}}
         >   

         <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                Hi, I am Prajwal P
            </Typography>
            <Typography variant="h6" color="blue" gutterBottom>
                Python & Cloud enthusiast | DevOps learner | Django Developer
            </Typography>
            <Typography variant="body1" sx={{maxwidth: 500, mt:2, color:"orange"}}>
                I build full-stack web applications and develop scalable
                backend systems. Currently exploring Cloud engineering &
                Devops tools like AWS and docker.
            </Typography>

            <Button variant="contained" sx={{mt:4, 
                borderRadius:2, textTransform:"none"}} href="#skills">
                View My Skills
            </Button>
         </Grid>
         <Grid item xs={12} md={5} display="flex" justifyContent="center">
            <Avatar
              sx={{
                width:{xs:180, md:250},
                height:{xs:180, md:250},
                border: "4px solid #1976d2",
              }}
            >
            <Image
              src="/Prajwal.jpg"
              alt="Prajwal P"
              fill 
              style={{objectFit:"cover", borderRadius:"50%"}}
            />
            </Avatar>

         </Grid>
         </Grid>
        </Box>
        </motion.div>
    )
}