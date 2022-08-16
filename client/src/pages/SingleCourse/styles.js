import { makeStyles } from "@mui/styles";
import bgImage from "../../assets/KIPPRAheader.jpeg";

const useStyles = makeStyles((theme) => ({
  section: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    marginBottom: theme.spacing(4),
  },
  header: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "25vh",
    justifyContent: "end",
  },
  title: {
    paddingLeft: theme.spacing(4),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white,
    marginTop: "auto",
    marginBottom: theme.spacing(4),
  },
  toolbar: {
    minHeight: "auto",
    padding: 0,
    backgroundColor: theme.palette.common.white,
  },
  tabs: {
    padding: 0,
  },
  panel: {
    padding: theme.spacing(3),
  },
}));

export { useStyles };
