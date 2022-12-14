import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import moment from "moment";
import {addCommentTitle, deleteComment, getComments } from "./apiAdmin";
import queryString from "query-string";
import Pagination from "react-bootstrap-4-pagination";

const ManagerComments = () => {
  const [comments, setComment] = useState([]);
  const [success, setSuccess] = useState(false);
  const { user, token } = isAuthenticated();

  const loadComments = async (obj) => {
    const paramString = queryString.stringify(obj);
    const comments = await getComments(paramString);
    console.log(comments.data);
    setComment(comments.data);
    setTotalRow(comments.totalRow);
  };
  //Pagination
  const [totalRow, setTotalRow] = useState(1);
  const [objPagi, setObjPagi] = useState({
    page: 1,
    perPage: 8,
  });
  let paginationConfig = {
    totalPages: Math.ceil(totalRow / objPagi.perPage),
    currentPage: objPagi.page,
    showMax: 10,
    size: "sm",
    threeDots: true,
    prevNext: true,
    onClick: function (page) {
      handleChangePage(page);
    },
  };
  const handleChangePage = (pageChange) => {
    setObjPagi({
      ...objPagi,
      page: pageChange,
    });
    console.log(objPagi);
    loadComments({
      ...objPagi,
      page: pageChange,
    });
  };
  const commentDelete = async (commentId) => {
    const comment = await deleteComment(commentId, user._id, token);
    if (comment.error) return console.log(comment.error);
    loadComments(objPagi);
    setSuccess(true);
  };
  const handleaddCommentTitle = async (commentId) => {
    const comment = await addCommentTitle(commentId, user._id, token);
    if (comment.error) return console.log(comment.error);
    alert(comment.message)
  };
  

  const showSuccess = () => {
    if (success) {
      return (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Comment delete successfully!!!
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
  };

  useEffect(() => {
    loadComments(objPagi);
  }, []);

  return (
    <Layout className="container-fluid">
      {showSuccess()}
      <div className="card" style={{ paddingBottom: "20px" }}>
        <h2  className="mt-2 text-center text-warning">Total {comments.length} comments</h2>
        <div
          style={{
            paddingLeft: "20px",
            paddingBottom: "10px",
          }}
        >
        </div>
        <table
          className="table-sm  table-bordered table-striped table-hover text-lg-center"
          style={{
            color: "#495057",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <thead>
            <tr>
              <th className="text-left">Product id</th>
              <th className="text-left">User name</th>
              <th>Content</th>
              <th>Created on</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((p, i) => (
              <tr key={i}>
                <td className="text-left">{p.product._id}</td>
                <td className="text-left">{p.user.name}</td>
                <td className="text-left">
                  <h1>Title : {p.title}</h1>
                  <h1>Content : {p.content}</h1>
                </td>
                <td>{moment(p.createdAt).fromNow()}</td>
                <td>
                <button
                    onClick={() => handleaddCommentTitle(p._id)}
                    className="text-muted"
                    style={{ border: "none", backgroundColor: "transparent" }}
                  >
                    Add Title
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => commentDelete(p._id)}
                    className="text-muted"
                    style={{ border: "none", backgroundColor: "transparent" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
            className="pagination"
            style={{ display: "flex", justifyContent: "center",marginTop:"20px" }}
          >
            <div className="App">
              <Pagination {...paginationConfig} />
            </div>
          </div>
      </div>
    </Layout>
  );
};

export default ManagerComments;
