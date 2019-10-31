import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ReactComponent as ArrowRightIcon } from './icons/arrow-right.svg';
import { ReactComponent as BinIcon } from './icons/bin.svg';
import { ReactComponent as DraftsIcon } from './icons/drafts.svg';
import { ReactComponent as HistoryIcon } from './icons/history.svg';
import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as ReloadIcon } from './icons/reload.svg';
import { ReactComponent as ScheduledIcon } from './icons/scheduled.svg';
import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as StarIcon } from './icons/star.svg';

const iconsMap = {
    'arrow-right': ArrowRightIcon,
    bin: BinIcon,
    drafts: DraftsIcon,
    history: HistoryIcon,
    home: HomeIcon,
    reload: ReloadIcon,
    scheduled: ScheduledIcon,
    search: SearchIcon,
    star: StarIcon
};

const Icon = ({type, className, ...rest}) => {
    const IconComponent = iconsMap[type];
    const iconClass = classNames({
        icon: true,
        [className]: className
    });
    return (
        <IconComponent
            className={iconClass}
            {...rest}
        />);
};

Icon.propTypes = {
    className: PropTypes.string,
    rest: PropTypes.object,
    type: PropTypes.oneOf([
        'arrow-right',
        'bin',
        'drafts',
        'history',
        'home',
        'reload',
        'scheduled',
        'search',
        'star',
    ]).isRequired,
};

export default Icon;
