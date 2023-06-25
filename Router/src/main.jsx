import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root, { loader as rootLoader , action as rootAction } from "./routes/root";
import ErrorPage from "./error-page";
import EditContact from "./routes/edit";
import {action as editAction} from "./routes/edit"
import Contact , {loader as contactLoader} from "./routes/contacts";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage />,
    loader: rootLoader , 
    action: rootAction ,
    children :
    [
{
  path : "contacts/:contactId",
  element : <Contact /> ,
  loader: contactLoader,

},
{
  path : "contacts/:contactId/edit",
  element : <EditContact /> ,
  loader: contactLoader,
  action: editAction,
},
    ],
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);