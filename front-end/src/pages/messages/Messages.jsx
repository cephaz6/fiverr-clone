import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  //  Active User Starts Here
  const currentUser = {
    id: 1,
    username: "Oselumese",
    isSeller: true,
  };
  // Active User Ends Here

  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores provident delectus harum autem fuga. Totam id at repellendus pariatur ipsa";

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Luke</td>
            <td>
              <Link className="link" to="/message/123">
                {" "}
                {message.substring(0, 100)}...{" "}
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>John Luke</td>
            <td>
              <Link className="link" to="/message/123">
                {" "}
                {message.substring(0, 100)}...{" "}
              </Link>
            </td>
            <td>2 hours ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Luke</td>
            <td>
              <Link className="link" to="/message/123">
                {" "}
                {message.substring(0, 100)}...{" "}
              </Link>
            </td>
            <td>1 day ago</td>
            <td></td>
          </tr>
          <tr>
            <td>John Luke</td>
            <td>
              <Link className="link" to="/message/123">
                {" "}
                {message.substring(0, 100)}...{" "}
              </Link>
            </td>
            <td>3 days ago</td>
            <td></td>
          </tr>
          <tr>
            <td>John Luke</td>
            <td>
              <Link className="link" to="/message/123">
                {" "}
                {message.substring(0, 100)}...{" "}
              </Link>
            </td>
            <td>3 days ago</td>
            <td></td>
          </tr>
          <tr>
            <td>John Luke</td>
            <td>
              <Link className="link" to="/message/123">
                {" "}
                {message.substring(0, 100)}...{" "}
              </Link>
            </td>
            <td>3 days ago</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
