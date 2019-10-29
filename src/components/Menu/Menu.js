import React from 'react';
import { Badge } from 'antd';
import { ReactComponent as ButtonNewTripPlaceholder } from '../../assets/svg/button-new-trip.svg';
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
        <div
            className="menu__button-container"
        >
            <ButtonNewTripPlaceholder />
        </div>
        <div
            className="menu__navigation"
        >
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
    </div>
);

export default Menu;
