import React from 'react';
import { Button, Icon as AntdIcon, Badge } from 'antd';
import Icon from '../Icon';

const appSections = [
    {
        title: 'home',
        IconType: 'home',
    },
    {
        title: 'favorites',
        IconType: 'star',
    },
    {
        title: 'planned',
        IconType: 'scheduled',
    },
    {
        title: 'drafts',
        IconType: 'drafts',
        badge: 1,
    },
    {
        title: 'history',
        IconType: 'history',
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
            <AntdIcon type="plus" />
        </Button>
        {
            appSections.map(section => (
                <div
                    className="menu__link-row"
                    key={`menu-section__${section.title}`}
                >
                    <Icon
                        type={section.IconType}
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
