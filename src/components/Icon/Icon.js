import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as AircraftIcon } from './icons/aircraft.svg';
import { ReactComponent as DraftsIcon } from './icons/drafts.svg';
import { ReactComponent as HistoryIcon } from './icons/history.svg';
import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as ScheduledIcon } from './icons/scheduled.svg';
import { ReactComponent as StarIcon } from './icons/star.svg';

const iconsMap = {
    aircraft: AircraftIcon,
    drafts: DraftsIcon,
    history: HistoryIcon,
    home: HomeIcon,
    scheduled: ScheduledIcon,
    star: StarIcon
};

const Icon = ({type, ...rest}) => {
    const IconComponent = iconsMap[type];
    return <IconComponent {...rest} />;
};

Icon.propTypes = {
    type: PropTypes.string,
    rest: PropTypes.object,
};

export default Icon;
