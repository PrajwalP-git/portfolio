"use client";
import React from "react";
import { Box, Typography, Stack, IconButton, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        px: { xs: 3, md: 6 },
        textAlign: "center",
        backgroundColor: "#0d0d0d",
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Contact
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 600,
            mx: "auto",
            color: "#bdbdbd",
            mb: 4,
          }}
        >
          I’m always open to collaboration, internships, or just tech talk!  
          Feel free to reach out via email or connect on LinkedIn.
        </Typography>

        <Paper
          elevation={3}
          sx={{
            display: "inline-block",
            p: 3,
            borderRadius: 3,
            backgroundColor: "#121212",
          }}
        >
          <Stack direction="row" justifyContent="center" spacing={3}>
            <IconButton
              component="a"
              href="mailto:prajwalprasad121@zohomail.in"
              target="_blank"
              sx={{
                color: "#64b5f6",
                "&:hover": { transform: "scale(1.2)", color: "#90caf9" },
                transition: "0.3s",
              }}
            >
              <Email fontSize="large" />
            </IconButton>

            <IconButton
              component="a"
              href="https://github.com/PrajwalP-git"
              target="_blank"
              sx={{
                color: "#fff",
                "&:hover": { transform: "scale(1.2)", color: "#64b5f6" },
                transition: "0.3s",
              }}
            >
              <GitHub fontSize="large" />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/prajwal-prasad-6895a4319"
              target="_blank"
              sx={{
                color: "#0077b5",
                "&:hover": { transform: "scale(1.2)", color: "#64b5f6" },
                transition: "0.3s",
              }}
            >
              <LinkedIn fontSize="large" />
            </IconButton>
          </Stack>
        </Paper>
      </motion.div>

      <Typography
        variant="body2"
        sx={{
          mt: 6,
          color: "#757575",
          fontSize: 14,
        }}
      >
        © {new Date().getFullYear()} Prajwal P — All Rights Reserved.
      </Typography>
    </Box>
  );
}
