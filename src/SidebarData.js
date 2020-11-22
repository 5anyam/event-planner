import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Tickets',
    path: '/',
    icon: <FaIcons.FaTicketAlt/>,
    cName: 'nav-text'
  },
  {
    title: 'Plans',
    path: '/',
    icon: <BsIcons.BsBookmarkCheck />,
    cName: 'nav-text'
  },
  {
    title: 'Planners',
    path: '/',
    icon: <AiIcons.AiOutlineUsergroupAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/',
    icon: <FaIcons.FaRegPaperPlane />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];