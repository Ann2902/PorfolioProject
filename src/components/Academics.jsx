import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Grid from '@mui/material/Grid';
import { ACADEMICS } from "../Utils/academics";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: (props) => !props.expand ? 'rotate(0deg)' : 'rotate(180deg)',
}));

export default function AcademicsCard() {
  
  const [expanded, setExpanded] = React.useState(
    ACADEMICS.map(() => false) 
  );

  
  const handleExpandClick = (index) => {
    setExpanded((prevExpanded) => {
      
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <Grid container spacing={2}>
      {ACADEMICS.map((academic, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
             avatar={
              <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
                {academic.avatar}
              </Avatar>
            }
            
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={academic.title}
              subheader={academic.subheader}
            />
            <CardMedia
              component="img"
              height="200"
              src={academic.media}
              alt={academic.title}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {academic.cardcontent}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="share">
                <AddLocationIcon />
              </IconButton>
              <ExpandMore
                expand={expanded[index]} 
                onClick={() => handleExpandClick(index)} 
                aria-expanded={expanded[index]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>{academic.heading}</Typography>
                <Typography sx={{ marginBottom: 2 }}>{academic.p1}</Typography>
                <Typography sx={{ marginBottom: 2 }}>{academic.p2}</Typography>
                <Typography>{academic.conclusion}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
