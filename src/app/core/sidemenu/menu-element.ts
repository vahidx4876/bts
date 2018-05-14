export const menus = [
    {
        "name"   : "Dashboard",
        "icon"   : "dashboard",
        "link"   : "/auth/dashboard",
        "open"   : false,
        // "chip"   :  { "value": 1,'color': 'accent'} ,
        // "sub"    :  [
        //                 {
        //                     "name": "Dashboard",
        //                     "link": "/auth/dashboard",
        //                     "icon": "dashboard",
        //                     "chip"   : false,
        //                     "open"   : false,
        //                 }
                        
        //             ]
    },{
        "name"   : "Devices",
        "icon"   : "devices_other",
        "link"   : "/auth/devices/btslinktable",
        "open"   : false,
    },
    {
        "name"   : "Users",
        "icon"   : "supervisor_account",
        "link"   : "",
        "open"   : false,
    },
    {
        "name"   : "Setting",
        "icon"   : "settings",
        "open"   : false,
        "link"   : false,
        "sub"    :  [
                        {
                            "name": "Edit Users",
                            "icon": "",
                            "open"   : false,
                            "link":""
                        },
                        {
                            "name": "Edit Devices",
                            "icon": "",
                            "open"   : false,
                            "link":"/auth/adddev/devices"
                        }
                    ]
    },
    // {
    //     "name"   : "Tables",
    //     "icon"   : "list",
    //     "link"   : false,
    //     "open"   : false,
    //     // "chip"   :  { "value": 2,'color': 'accent'} ,
    //     "sub"    :  [
    //                     {
    //                         "name": "Fixed",
    //                         "icon": "filter_list",
    //                         "link": "tables/fixed",
    //                         "open"   : false,
    //                     },
    //                     {
    //                         "name": "Feature",
    //                         "icon": "done_all",
    //                         "link": "tables/featured",
    //                         "open"   : false,
    //                     },
    //                     {
    //                         "name": "Responsive Tables",
    //                         "icon": "filter_center_focus",
    //                         "link": "tables/responsive",
    //                         "open"   : false,
    //                     },
    //                     {
    //                         "name": "Crud Tables",
    //                         "icon": "edit",
    //                         "link": "tables/crudtable",
    //                         "open"   : false,
    //                     }
    //                 ]

    // },
    // {
    //     "name"   : "Guarded Routes",
    //     "icon"   : "mode_edit",
    //     "link"   : "/auth/guarded-routes",
    //     "open"   : false,
       
                 
    // }
    // ,{
    //     "name"   : "Pages",
    //     "icon"   : "content_copy",
    //     "open"   : false,
    //     "link"   : false,
    //     "sub"    :  [
    //                     {
    //                         "name": "Login",
    //                         "icon": "work",
    //                         "open": false,
    //                         "link": "../login",
    //                     },{
    //                         "name": "Services",
    //                         "icon": "local_laundry_service",
    //                         "open": false,
    //                         "link": "pages/services",
    //                     },{
    //                         "name":"Contact",
    //                         "icon":"directions",
    //                         "open": false,
    //                         "link":"pages/contact"
    //                     }
    //                 ]
    // }
    // ,{

    //     "name"   : "Charts",
    //     "icon"   : "pie_chart_outlined",
    //     "open"   : false,
    //     "link"   : false,
    //     "sub"    :  [
    //                     {
    //                         "name": "chartjs",
    //                         "icon": "view_list",
    //                         "link":"charts/chartjs",
    //                         "open"   : false,

    //                     },
    //                     {
    //                         "name": "ngx-chart",
    //                         "icon": "show_chart",
    //                         "open"   : false,
    //                         "link": "charts/ngx-charts",
    //                     },
    //                     {
    //                         "name": "nvd3",
    //                         "icon": "pie_chart",
    //                         "open"   : false,
    //                         "link": "charts/nvd3-charts",
    //                     }
                        
    //                 ]
    // }

]