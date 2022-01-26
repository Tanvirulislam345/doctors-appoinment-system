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
        path: "home/doctors",
        icon: <AiIcons.AiFillHome />,

    },
    {
        title: "Patients",
        path: "home/patients",
        icon: <AiIcons.AiFillHome />,

    },

    {
        title: "UserManager",
        path: "home/usermanager",
        icon: <FaIcons.FaPhone />,
    },
    {
        title: "Reviews",
        path: "home/reviews/Approved",
        icon: <IoIcons.IoMdHelpCircle />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Approved",
                path: "home/reviews/Approved",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Pandding",
                path: "home/reviews/panding",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Rejected",
                path: "home/reviews/rejected",
                icon: <IoIcons.IoIosPaper />,
            }
        ],

    },
    {
        title: "Appoinments",
        path: "home/appoinments/Approved",
        icon: <IoIcons.IoMdHelpCircle />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Approved",
                path: "home/appoinments/Approved",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Pandding",
                path: "home/appoinments/panding",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Rejected",
                path: "home/appoinments/rejected",
                icon: <IoIcons.IoIosPaper />,
            }
        ]

    },
    {
        title: "Setting",
        path: "home/specialties",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "Specialties",
                path: "home/specialties",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Conditions",
                path: "home/conditions",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Cities",
                path: "home/cities",
                icon: <IoIcons.IoIosPaper />,
            }
        ]
    }
];
export const usersSideBarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: "Doctors",
        path: "/users/doctors",
        icon: <AiIcons.AiFillHome />,

    },
    {
        title: "Patients",
        path: "/users/patients",
        icon: <AiIcons.AiFillHome />,

    },

    {
        title: "UserManager",
        path: "/users/usermanager",
        icon: <FaIcons.FaPhone />,
    },
    {
        title: "Calender",
        path: "/calender",
        icon: <FaIcons.FaPhone />,
    },
    {
        title: "Message",
        path: "/message",
        icon: <FaIcons.FaPhone />,
    },
    
    {
        title: "Payments",
        path: "/payments",
        icon: <FaIcons.FaPhone />,
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
        path: "/patients/patientsprofile",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Contact-details",
                path: "/patients/contact-patients",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Preferences",
                path: "/patients/preferences-patients",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Password",
                path: "/patients/password-patients",
                icon: <IoIcons.IoIosPaper />,
            }
        ],
    },

    {
        title: "Favourites Doctors",
        path: "/patients/favourites-Doctors",
        icon: <FaIcons.FaPhone />,
    },
    {
        title: "Appoinments",
        path: "/patients/appoinments-patients",
        icon: <FaIcons.FaPhone />,
    },
    {
        title: "Reviews",
        path: "/patients/reviews-patients",
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
        path: "/doctors/listing-details",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Listing-details",
                path: "/doctors/listing-details",
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: "Private Services",
                path: "/doctors/private-service",
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: "Public-services",
                path: "/doctors/public-service",
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