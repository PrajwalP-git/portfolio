"use client";
import React from "react";
import { Box, Typography, Chip, Divider, Stack, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Cafe Website",
    status: "Completed",
    stack: "React, JavaScript",
    link: "https://github.com/PrajwalP-git/Cafe-website",
    emoji: "☕",
  },
  {
    title: "Book Library (Inventory Management System)",
    status: "Completed",
    stack: "Django, React, SQLite",
    link: "https://github.com/PrajwalP-git/Book-library",
    emoji: "📚",
  },
  {
    title: "SaaS Project Management Dashboard",
    status: "In Progress",
    stack: "Next.js, React, PostgreSQL",
    emoji: "📊",
  },
  {
    title: "E-commerce API",
    status: "Upcoming",
    stack: "Django, HTML/CSS/JS, PostgreSQL",
    emoji: "🛜🏬",
  },
  {
    title: "AI Voice Assistant",
    status: "Upcoming",
    stack: "FastAPI, Anthropic API, MySQL",
    emoji: "🤖",
  },
];

const getColor = (status) => {
  switch (status) {
    case "Completed":
      return "success";
    case "In Progress":
      return "warning";
    case "Upcoming":
      return "info";
    default:
      return "default";
  }
};

export default function Projects() {
  const theme = useTheme();

  return (
    <Box id="projects" sx={{ mt: 10, px: { xs: 2, md: 6 } }}>
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        sx={{color:"#4682B4"}}
      >
        Projects
      </Typography>

      <Divider sx={{ mb: 3, bgcolor: theme.palette.divider }} />

      <Stack spacing={3}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={3}
              sx={{
                p: { xs: 2, md: 3 },
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                borderRadius: 3,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {project.emoji} {project.title}
              </Typography>
              <Chip
                label={project.status}
                color={getColor(project.status)}
                size="small"
                sx={{ mt: 1 }}
              />
              <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary }}>
                {project.stack}
              </Typography>
              {project.link && (
                <Typography
                  variant="body2"
                  component="a"
                  href={project.link}
                  target="_blank"
                  sx={{
                    mt: 1,
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  View on GitHub
                </Typography>
              )}
            </Paper>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
}
