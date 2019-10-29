import React from 'react';
import {
    ButtonSquare,
    TripCard,
    PageHeader,
    StartNewTrip,
    SectionHeader,
    SectionContent,
} from '../../components';

const Dashboard = () => {

    return (
        <React.Fragment>
            <PageHeader
                title="home"
            />
            <StartNewTrip />
            <SectionHeader
                title="drafts"
            />
            <SectionContent>
                <TripCard
                    countryValue="germany"
                    countryText="Germany"
                    countryIcon="flag-germany"
                    address="165, L547, 37586, Dassel, Northeim, Niedersachsen"
                    buttons={[
                        <ButtonSquare
                            type="danger"
                            iconType="bin"
                            key="button-1"
                        />,
                        <ButtonSquare
                            iconType="arrow-right"
                            key="button-2"
                        />,
                    ]}
                />
            </SectionContent>
            <SectionHeader
                title="favorites"
            />
            <SectionContent>
                <TripCard
                    countryValue="czechia"
                    countryText="Czechia"
                    countryIcon="flag-czechia"
                    address="Na Ležánkách, 530 03, Pardubice, Pardubický kraj"
                    buttons={[
                        <ButtonSquare
                            type="favorite"
                            iconType="star"
                            key="button-1"
                        />,
                        <ButtonSquare
                            iconType="reload"
                            key="button-2"
                        />,
                    ]}
                />
            </SectionContent>
            <SectionHeader
                title="recent"
            />
            <SectionContent>
                <TripCard
                    countryValue="portugal"
                    countryText="Portugal"
                    countryIcon="flag-portugal"
                    address="Unnamed Road, 5000, Vila Real"
                    buttons={[
                        <ButtonSquare
                            iconType="star"
                            key="button-1"
                        />,
                        <ButtonSquare
                            iconType="reload"
                            key="button-2"
                        />,
                        <ButtonSquare
                            iconType="arrow-right"
                            key="button-3"
                        />,
                    ]}
                />
                <TripCard
                    countryValue="france"
                    countryText="France"
                    countryIcon="flag-france"
                    address="Rue aux Moines, 70120, Lavigney, Haute-Saône, Bourgogne-Franche..."
                    buttons={[
                        <ButtonSquare
                            iconType="star"
                            key="button-1"
                        />,
                        <ButtonSquare
                            iconType="reload"
                            key="button-2"
                        />,
                        <ButtonSquare
                            iconType="arrow-right"
                            key="button-3"
                        />,
                    ]}
                />
            </SectionContent>
        </React.Fragment>
    );
};

export default Dashboard;
