const routes = [
    {
        path: '/',
        redirect: '/mainFrame/login'
    },
    {
        path: '/mainFrame',
        redirect: '/mainFrame/machineList'
    },
    {
        name: 'bigWindow',
        path: '/bigWindow',
        component: () => import("@/components/bigWindowComponents/bigWindow.vue"),
    },
    {
        name: "mainFrame",
        path: "/mainFrame",
        component: () => import("@/components/mainFrameComponents/mainFrame.vue"),
        children: [
            {
                path: "login",
                component: () => import("@/components/loginComponent/loginPage.vue")
            },
            {
                path: "machineList",
                component: () => import("@/components/machineListComponents/machineListPage.vue")
            },
            {
                path: "index",
                component: () => import('@/components/indexComponents/indexPage.vue'),
            },
            {
                path: "visualization",
                component: () => import('@/components/visualizationComponents/visualizationPage.vue'),
            },
            {
                path: "pictureRecode",
                component: () => import('@/components/pictureRecodeComponents/pictureRecodePage.vue'),
            },
            {
                path: "timedTask",
                component: () => import('@/components/timedTaskComponents/timedTaskPage.vue'),
            },
            {
                path: "about",
                component: () => import('@/components/aboutComponents/aboutPage.vue')
            },
            {
                path: "realTimeMonitoring",
                component: () => import('@/components/realTimeMonitoringComponents/realTimeMonitoringPage.vue')
            },
            {
                path: "bigWindow",
                component: () => import('@/components/bigWindowComponents/bigWindow.vue'),
            }
        ]
    },
];

export default routes