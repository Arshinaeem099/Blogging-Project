import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addblog, clearall, deleteblog, updateblog } from "./BlogSlice";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Box, Paper, Grid } from "@mui/material";

const BlogSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(15, "At least 15 characters")
    .min(2, "At least 2 characters"),
  subtitle: Yup.string()
    .required("Sub-Title is required")
    .max(30, "At least 30 characters")
    .min(2, "At least 2 characters"),
  description: Yup.string()
    .required("Description is required")
    .max(50, "At least 50 characters")
    .min(2, "At least 2 characters"),
});
const BlogPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blogs = useSelector((state) => state.blog || []);

  const [formVisible, setFormVisible] = useState(true);
  const [update, setUpdate] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    if (update) {
      const updatedBlog = { id: update.id, ...values };

      navigate("/blogs/update");
      dispatch(updateblog(updatedBlog));
      setUpdate(null);
    } else {
      const newBlog = { id: Date.now(), ...values };
      dispatch(addblog(newBlog));
    }
    resetForm();
    setFormVisible(false);
  };

  const handleEdit = (blog) => {
    setFormVisible(true);
    setUpdate(blog);
    navigate("/blogs/edit");
  };

  const handleDelete = (id) => {
    dispatch(deleteblog(id));
    navigate("/blogs/delete");
  };

  const handleClearAll = () => {
    dispatch(clearall());
    navigate("/blogs/clearAll");
  };
  return (
    <>
      <div className="blog-container">
        <NavBar />
        <br />
        <br />
        <br />

        <Box mt={4} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4" component="h1" gutterBottom>
            {blogs.length === 0 ? "No Blogs Here..." : "Blogs..."}
          </Typography>
          {!formVisible && (
          <Button
            color="warning"
            variant="contained"
            onClick={() => setFormVisible(true)}
          >
            Create Your Blog
          </Button>
          )}
          {formVisible && (
            <Paper
              elevation={3}
              sx={{ p: 4, mt: 4, width: "100%", maxWidth: 600 }}
            >
              <Formik
                initialValues={
                  update || { title: "", subtitle: "", description: "" }
                }
                validationSchema={BlogSchema}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                {({ resetForm }) => (
                  <Form>
                    <Field
                      as={TextField}
                      name="title"
                      label="Title"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <Field
                      as={TextField}
                      name="subtitle"
                      label="Sub-Title"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                    />
                    <ErrorMessage
                      name="subtitle"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <Field
                      as={TextField}
                      name="description"
                      label="Description"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <Box mt={2} display="flex" justifyContent="space-between">
                      <Button color="success" variant="contained" type="submit">
                        {update ? "Update Blog" : "Submit"}
                      </Button>
                      <Button
                        color="error"
                        variant="contained"
                        onClick={() => {
                          setFormVisible(false);
                          resetForm();
                          setUpdate(null);
                        }}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Paper>
          )}
          <Grid container spacing={3} mt={4}>
            {blogs.map((blog) => (
              <Grid item xs={12} md={6} lg={4} key={blog.id}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant="h6">{blog.title}</Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {blog.subtitle}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {blog.description}
                  </Typography>
                  <Box mt={2} display="flex" justifyContent="space-between">
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => handleEdit(blog)}
                    >
                      Edit
                    </Button>
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => handleDelete(blog.id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
          {blogs.length > 0 && (
            <Button
              color="error"
              variant="contained"
              onClick={handleClearAll}
              sx={{ mt: 4 }}
            >
              Clear All
            </Button>
          )}
        </Box>
      </div>
    </>
  );
};

export default BlogPage;
