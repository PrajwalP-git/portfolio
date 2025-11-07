"use client";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "Linux", logo: "/linux.png" },
  { name: "Python", logo: "/python.png" },
  { name: "PostgreSQL", logo: "/postgresql.png" },
  { name: "MySQL", logo: "/mysql.png" },
  { name: "React", logo: "/react.png" },
  { name: "Git", logo: "/git.png" },
  { name: "AWS", logo: "/AWS.png", learning: true },
  { name: "Terraform", logo: "/terraform.png", learning: true },
  { name: "Kubernetes", logo: "/kubernetes.png", upcoming: true },
  { name: "Docker", logo: "/docker.png", upcoming: true },
  { name: "GitLab CI/CD", logo: "/gitlab.png", upcoming: true },
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: 8, px: 2, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={skill.name}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  transition: "0.3s",
                }}
              >
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={50}
                  height={50}
                  style={{ marginBottom: 10 }}
                />
                <Typography variant="subtitle1" fontWeight="medium">
                  {skill.name}
                </Typography>
                {skill.learning && (
                  <Typography variant="caption" color="primary">
                    (Learning)
                  </Typography>
                )}
                {skill.upcoming && (
                  <Typography variant="caption" color="text.secondary">
                    (Upcoming)
                  </Typography>
                )}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
