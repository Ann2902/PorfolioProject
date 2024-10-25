import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { PROJECTS_DETAILS } from "../Utils/projectDetails";

function Projects() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      {PROJECTS_DETAILS.map((project, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: 345,
            margin: '20px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
            '&:hover': {
              transform: 'scale(1.05)', 
              boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)', 
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={project.media}
              alt={project.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button size="small" color="primary">
                Visit
              </Button>
            </a>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Projects;


