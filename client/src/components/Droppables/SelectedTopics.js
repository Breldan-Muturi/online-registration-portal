import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/lab/Pagination";
import useStyles from "./styles";
import clsx from "clsx";
import TopicCard from "../../Components/Cards/TopicCard/TopicCard";
import { Droppable } from "@hello-pangea/dnd";

const SelectedTopics = ({ selectedTopics }) => {
  const classes = useStyles();
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <Droppable droppableId="topicSelected">
      {(provided, snapshot) => (
        <Grid
          xs={5.9}
          className={clsx(
            classes.container,
            snapshot.isDraggingOver
              ? classes.selectedContainerDragged
              : classes.selectedContainer
          )}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <Typography>Selected Topics</Typography>
          {selectedTopics
            ?.slice((selectedPage - 1) * 4, (selectedPage - 1) * 4 + 4)
            .map((mappedTopic, index) => (
              <TopicCard
                key={mappedTopic._id}
                index={index}
                topic={mappedTopic}
              />
            ))}
          {provided.placeholder}
          {Math.ceil(selectedTopics?.length / 4) > 1 && (
            <Pagination
              count={Math.ceil(selectedTopics?.length / 4)}
              onChange={(_, value) => setSelectedPage(value)}
            />
          )}
        </Grid>
      )}
    </Droppable>
  );
};

export default SelectedTopics;
