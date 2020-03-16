import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Welcome = () => import(/* webpackChunkName: "dashboard" */"@/pages/Welcome.vue");
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const DashboardTeacher = () => import(/* webpackChunkName: "dashboard" */"@/pages/DashboardTeacher.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");
const Tasks = () => import("@/pages/Tasks.vue");
const Task = () => import("@/pages/Task.vue");
const MakeTask = () => import("@/pages/MakeTask.vue");
const Console = () => import("@/pages/Console.vue");
const Login = () => import("@/pages/Login.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/welcome",
    children: [
      {
        path: "welcome",
        name: "welcome",
        component: Welcome
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "dashboardTeacher",
        name: "dashboardTeacher",
        component: DashboardTeacher
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      },
      {
        path: "tasks",
        name: "tasks",
        component: Tasks
      },
      {
        path: "task",
        name: "task",
        component: Task
      },
      {
        path: "makeTask",
        name: "makeTask",
        component: MakeTask
      },
      {
        path: "console",
        name: "console",
        component: Console
      },
      {
        path: "login",
        name: "login",
        component: Login
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
