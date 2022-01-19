import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as AiIcons  from "react-icons/ai";


  
export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
  },
  {
  title: "Doctors",
  path: "/doctors",
  icon: <AiIcons.AiFillHome />,
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Contact-details",
        path: "/contact-details",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Preferences",
        path: "/preferences",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "password",
        path: "/password",
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
    path: "/appoinments",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Reviews",
    path: "/reviews",
    icon: <IoIcons.IoMdHelpCircle />

  },
  {
    title: "Setting",
    path: "/settiogs",
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: "Billing",
    path: "/billing",
    icon: <IoIcons.IoMdHelpCircle />,
  }
];