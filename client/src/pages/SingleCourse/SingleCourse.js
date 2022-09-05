import React from "react";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import useStyles from "./styles";
import CustomToolbar from "../../Custom/CustomToolbar";
import StyledTab from "../../Custom/StyledTab";
import useCourseNav from "../../Hooks/useCourseNav";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useGetCourseByIdQuery } from "../../Features/api/courseApiSlice";
import { selectCurrentUser } from "../../Features/global/authSlice";
import { ROLES } from "../../Config/roles";

function a11yProps(index) {
  return {
    component: "a",
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SingleCourse = () => {
  const classes = useStyles();
  const { roles } = useSelector(selectCurrentUser);
  const { routes, courseId, pathname } = useCourseNav();
  const {
    data: course,
    isSuccess,
    isError,
    error,
  } = useGetCourseByIdQuery(courseId);

  let content = (
    <Stack spacing={3} direction="row">
      <CircularProgress />
      <Typography>Loading course content</Typography>
    </Stack>
  );

  if (isSuccess) {
    content = <Outlet />;
  } else if (isError) {
    content = (
      <Typography>
        Something went wrong: <br />
        {error}
      </Typography>
    );
  }

  return (
    <Box component="section" className={classes.section}>
      <div className={classes.header}>
        {isSuccess && (
          <Typography variant="h4" component="h2" className={classes.title}>
            {course.title}
          </Typography>
        )}
      </div>
      <CustomToolbar variant="dense" className={classes.toolbar}>
        <Tabs
          value={pathname}
          indicatorColor="primary"
          className={classes.tabs}
          classes={{
            button: classes.button,
          }}
          aria-label="Course page tabs"
        >
          <StyledTab
            label="Summary"
            href={routes[0]}
            value={routes[0]}
            {...a11yProps(0)}
          />
          {Object.values(roles).includes(ROLES.Admin) && (
            <StyledTab
              label="Settings"
              href={routes[1]}
              value={routes[1]}
              {...a11yProps(1)}
            />
          )}
          <StyledTab
            label="Topics"
            href={routes[2]}
            value={routes[2]}
            {...a11yProps(2)}
          />
          <StyledTab
            label="Sessions"
            href={routes[3]}
            value={routes[3]}
            {...a11yProps(3)}
          />
          <StyledTab
            label="Applications"
            href={routes[4]}
            value={routes[4]}
            {...a11yProps(4)}
          />
        </Tabs>
      </CustomToolbar>
      <Box p={3} component="section">
        {content}
      </Box>
    </Box>
  );
};

export default SingleCourse;
