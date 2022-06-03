import React from "react";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const DashboardData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,       
    },
    {
        title: 'Courses',
        path: '/courses',
        icon: <AiIcons.AiFillHome />,
        
    },
    {
        title: 'Tests',
        path: '/tests',
        icon: <AiIcons.AiFillHome />,
        
    },
    {
        title: 'Pros',
        path: '/pros',
        icon: <AiIcons.AiFillHome />,
        
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />, 
    },
    {
        title: 'Students',
        path: '/students',
        icon: <AiIcons.AiFillHome />, 
    }
]