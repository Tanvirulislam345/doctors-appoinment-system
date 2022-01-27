import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import dashboard from '../../../images/icons/dashboard.png';
import doctors from '../../../images/icons/doctors.png';
import patients from '../../../images/icons/patients.png';
import users from '../../../images/icons/user.png';
import reviews from '../../../images/icons/reviews.png';
import appoinments from '../../../images/icons/appoinments.png';
import settings from '../../../images/icons/settings.png';
import billing from '../../../images/icons/billings.png';



export const mainSideBarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: dashboard,
    },
    {
        title: "Doctors",
        path: "home/doctors",
        icon:  doctors,

    },
    {
        title: "Patients",
        path: "home/patients",
        icon: patients,

    },

    {
        title: "UserManager",
        path: "home/usermanager",
        icon: users,
    },
    {
        title: "Reviews",
        path: "home/reviews/Approved",
        icon: reviews,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Approved",
                path: "home/reviews/Approved"
            },
            {
                title: "Pandding",
                path: "home/reviews/panding"
            },
            {
                title: "Rejected",
                path: "home/reviews/rejected"
            }
        ],

    },
    {
        title: "Appoinments",
        path: "home/appoinments/Approved",
        icon: appoinments,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Approved",
                path: "home/appoinments/Approved"
            },
            {
                title: "Pandding",
                path: "home/appoinments/panding"
            },
            {
                title: "Rejected",
                path: "home/appoinments/rejected"
            }
        ]

    },
    {
        title: "Settings",
        path: "home/specialties",
        icon: settings,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "Specialties",
                path: "home/specialties"
            },
            {
                title: "Conditions",
                path: "home/conditions"
            },
            {
                title: "Cities",
                path: "home/cities"
            }
        ]
    }
];


export const usersSideBarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: dashboard
    },
    {
        title: "Doctors",
        path: "/users/doctors",
        icon: doctors

    },
    {
        title: "Patients",
        path: "/users/patients",
        icon: patients

    },

    {
        title: "UserManager",
        path: "/users/usermanager",
        icon: users
    },
    {
        title: "Calender",
        path: "/calender",
        icon: reviews
    },
    {
        title: "Message",
        path: "/message",
        icon: appoinments
    },
    
    {
        title: "Payments",
        path: "/payments",
        icon: billing
    }
    
];


export const doctorsSidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: dashboard
    },
    {
        title: "Doctors",
        path: "/doctors/contact-details",
        icon: doctors,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Contact-details",
                path: "/doctors/contact-details"
            },
            {
                title: "Preferences",
                path: "/doctors/preferences"
            },
            {
                title: "password",
                path: "/doctors/password"
            }
        ],
    },
    {
        title: "Listing",
        path: "/doctors/listing-details",
        icon: patients,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Listing-details",
                path: "/doctors/listing-details"
            },
            {
                title: "Private Services",
                path: "/doctors/private-service"
            },
            {
                title: "Public-services",
                path: "/doctors/public-service"
            },
        ],
    },
    {
        title: "Appoinments",
        path: "/doctors/appoinments",
        icon: appoinments
    },
    {
        title: "Reviews",
        path: "/doctors/reviews",
        icon: reviews

    },
    {
        title: "Setting",
        path: "/doctors/settings",
        icon: settings
    },
    {
        title: "Billing",
        path: "/doctors/billing",
        icon: billing
    }
];


export const patientsSidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: dashboard
    },
    {
        title: "Patients Profile",
        path: "/patients/patientsprofile",
        icon: patients,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Contact-details",
                path: "/patients/contact-patients"
            },
            {
                title: "Preferences",
                path: "/patients/preferences-patients"
            },
            {
                title: "Password",
                path: "/patients/password-patients"
            }
        ],
    },

    {
        title: "Favourites Doctors",
        path: "/patients/favourites-Doctors",
        icon: doctors
    },
    {
        title: "Appoinments",
        path: "/patients/appoinments-patients",
        icon: appoinments
    },
    {
        title: "Reviews",
        path: "/patients/reviews-patients",
        icon: reviews

    }
];
