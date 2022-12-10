import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
// import { comments } from "../../helpers/comments";
import { useSelector } from "react-redux";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { getFilter } from "../../redux/filterSlice";

export const Comments = () => {
  const { data: comments } = useGetCommentsQuery();
  const filter = useSelector(getFilter);
  console.log(filter);
  const visibleComments = () => {
    return comments.filter(({ content }) => {
      return content.toLowerCase().includes(filter.toLowerCase());
    });
  };
  return (
    <Grid>
      {comments &&
        visibleComments().map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
