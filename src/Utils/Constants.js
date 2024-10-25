
import {
  CodeRounded,
  DraftsRounded,
  HomeRounded,
  SchoolRounded,
  ThumbUpAlt,
  ContactPageRounded,
} from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from "@mui/icons-material/Call";
import BookIcon from '@mui/icons-material/Book';

export const userProfileDefaultData = {
  Name: "Anuj Dewan",
  UserName: "ann_uj",
  DOB: "02-12-2002",
  Address: "Darjeeling, West BEngal",
  EmailID: "shreann@gmail.com",
  PhoneNo: "987665432",
  Description: "Sairam",
  
};

export const IconTitleMap = {
  Home: <HomeRounded className="icon" />,
  Academics: <SchoolRounded className="icon" />,
  Projects: <CodeRounded className="icon" />,
  "Social Profiles": <DraftsRounded className="icon" />,
  Resume: <ContactPageRounded className="icon" />,
  "Contact Us": <CallIcon className="icon" />,
  "All Mail": <MailIcon className="icon" />,
  Blog:<BookIcon className="icon"/>,
  Trash: <DeleteIcon className="icon" />,
  Spam: <ErrorIcon className="icon" />,
  Subscribers: <ThumbUpAlt className="icon" />,
};

export const DEFAULT_SIDE_MENU = [
  {
    title: "Home",
    icon: IconTitleMap.Home,
    "link": "/home"
  },
  {
      "title": "Academics",
      "icon": IconTitleMap.Academics,
      "link": "/academics"
  },
  {
      "title": "Projects",
      "icon": IconTitleMap.Projects,
      "link": "/projects"
  },
  {
      "title": "Social Profiles",
      "icon": IconTitleMap["Social Profiles"],
      "link": "/social-profile"
  },
  {
      "title": "Resume",
      "icon": IconTitleMap.Resume,
      "link": "/resume"
  },
  {
    "title": "Contact Me",
    "icon": IconTitleMap["Contact Us"],
    "link": "/contactus"
},
{
  "title": "Blog",
  "icon": IconTitleMap.Blog,
  "link": "/blog"
}
];



export const DEFAULT_DRAWER_FLAG = true;
export const DEFAULT_ACTIVE_PAGE = DEFAULT_SIDE_MENU[0].title;

export const DarkTheme              = "dark"
export const LightTheme             = "light"