import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";

export const mainSideBarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: "Doctors",
        path: "/doctors",
        icon: <AiIcons.AiFillHome />,

    },
    {
        title: "Patients",
        path: "/patients",
        icon: <AiIcons.AiFillHome />,

    },

    {
        title: "UserManager",
        path: "/usermanager",
        icon: <FaIcons.FaPhone />,
    },
    {
        title: "Reviews",
        path: "/reviews/Approved",
        icon: <IoIcons.IoMdHelpCircle />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Approved",
                path: "/reviews/Approved",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Pandding",
                path: "/reviews/panding",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Rejected",
                path: "/reviews/rejected",
                icon: <IoIcons.IoIosPaper />,
            }
        ],

    },
    {
        title: "Appoinments",
        path: "appoinments/Approved",
        icon: <IoIcons.IoMdHelpCircle />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Approved",
                path: "/appoinments/Approved",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Pandding",
                path: "/appoinments/panding",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Rejected",
                path: "/appoinments/rejected",
                icon: <IoIcons.IoIosPaper />,
            }
        ],

    },
    {
        title: "Setting",
        path: "/settiogs",
        icon: <IoIcons.IoMdHelpCircle />
    }
];

export const patientsSidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: "Patients Profile",
        path: "/home/patientsprofile",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Contact-details",
                path: "/home/contact-patients",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Preferences",
                path: "/home/preferences-patients",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Password",
                path: "/home/password-patients",
                icon: <IoIcons.IoIosPaper />,
            }
        ],
    },

    {
        title: "Favourites Doctors",
        path: "/home/favourites-Doctors",
        icon: <FaIcons.FaPhone />,
    },
    {
        title: "Appoinments",
        path: "/home/appoinments-patients",
        icon: <FaIcons.FaPhone />,
    },
    {
        title: "Reviews",
        path: "/home/reviews-patients",
        icon: <IoIcons.IoMdHelpCircle />

    }
];

export const doctorsSidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: "Doctors",
        path: "/doctors/contact-details",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Contact-details",
                path: "/doctors/contact-details",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Preferences",
                path: "/doctors/preferences",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "password",
                path: "/doctors/password",
                icon: <IoIcons.IoIosPaper />,
            }
        ],
    },
    {
        title: "Listing",
        path: "/listing",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Listing-details",
                path: "/listing-details",
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: "Private Services",
                path: "/private-service",
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: "Public-services",
                path: "/public-service",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Appoinments",
        path: "/doctors/appoinments",
        icon: <FaIcons.FaPhone />,
    },
    {
        title: "Reviews",
        path: "/doctors/reviews",
        icon: <IoIcons.IoMdHelpCircle />

    },
    {
        title: "Setting",
        path: "/doctors/settings",
        icon: <IoIcons.IoMdHelpCircle />
    },
    {
        title: "Billing",
        path: "/doctors/billing",
        icon: <IoIcons.IoMdHelpCircle />,
    }
];