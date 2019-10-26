import React from 'react';
import { Button, Icon, Badge } from 'antd';
import homeIcon from '../../assets/icons/home.svg';
import starIcon from '../../assets/icons/star.svg';
import scheduledIcon from '../../assets/icons/scheduled.svg';
import draftsIcon from '../../assets/icons/drafts.svg';
import historyIcon from '../../assets/icons/history.svg';

const appSections = [
    {
        title: 'home',
        icon: homeIcon,
        iconAlt: 'home icon',
    },
    {
        title: 'favorites',
        icon: starIcon,
        iconAlt: 'star icon',
    },
    {
        title: 'planned',
        icon: scheduledIcon,
        iconAlt: 'clock icon',
    },
    {
        title: 'drafts',
        icon: draftsIcon,
        iconAlt: 'drafts icon',
        badge: 1,
    },
    {
        title: 'history',
        icon: historyIcon,
        iconAlt: 'history icon',
    }
];

const Menu = () => (
    <div className="menu">
        <Button
            type="primary"
            style={{
                width: '100%',
                margin: '2rem 4rem 4rem 0',
            }}
        >
            New Trip
            <Icon type="plus" />
        </Button>
        {
            appSections.map(section => (
                <div
                    className="menu__link-row"
                >
                    <img
                        src={section.icon}
                        alt={section.alt}
                    />
                    <h4
                        className="menu__link-title"
                    >
                        {section.title}
                    </h4>
                    {
                        section.badge &&
                        <Badge
                            count={section.badge}
                            style={{
                                backgroundColor: '#338AF3',
                                color: 'white',
                            }}
                        />
                    }
                </div>
            ))
        }
    </div>
);

export default Menu;
