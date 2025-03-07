import { NotFound } from "./pages/404";
import { ViewListItem } from "./pages/ViewListItem";
import { Layout } from "./layouts/Layout";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewList } from "./pages/ViewList";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <ToDoListPage /> },
      { path: "list", element: <ViewList /> },
      { path: "list/:id", element: <ViewListItem /> },
    ]
  },
]);
