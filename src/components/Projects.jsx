// import {
//   Avatar,
//   ButtonBase,
//   Grid,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Typography,
// } from "@mui/material";
// import { PROJECTS_DETAILS } from "../Utils/projectDetails";
// import DescriptionIcon from "@mui/icons-material/Description";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";

// import '../resources/css/projects.css'

// function Projects() {
//   return (
//     <>
//       <List
//         sx={{
//           width: "100%",
//           bgcolor: "background.paper",
//           display: "flex",
//           flexDirection:'column',
//           flexWrap: "wrap",
//           gap: '15px'
//         }}
//       >
//         {PROJECTS_DETAILS.map((data, index) => (
//           <div className="listItem">
//             <ListItem
//               // alignItems="flex-start"
//               sx={{
//                 width: "100%",
//                 height: "150px",
//                 cursor: "pointer",
//                 overflow:'clip'
//               }}
              
//             >
//               <DescriptionIcon sx={{ width: 128, height: 128 }} />
//               <ListItemText
//                 primary={data.name}
//                 secondary={
//                   <>
//                     <Typography
//                       component="span"
//                       variant="body2"
//                       sx={{ color: "text.primary", display: "inline" }}
//                     >
//                       {data.date}
//                     </Typography>
//                     <br />
//                     {data.description}
                    
//                   </>
//                 }
//               />
//             </ListItem>
//           </div>
          
//         ))}
//       </List>
//     </>
//   );
// }

// export default Projects;
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


