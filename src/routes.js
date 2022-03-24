import Dashboard from "views/Dashboard.js";

import ReactTables from "views/Tables/ReactTables.js";

import Typography from "views/Typography.js";

var routes = [
  {
    path: "/dashboard",
    layout: "/admin",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Tasks",
    icon: "nc-icon nc-notes",
    component: ReactTables,
    layout: "/admin",
  }
];
export default routes;
