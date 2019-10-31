import React from 'react';
import Downshift from 'downshift';
import { isEmpty, isNil } from 'ramda';
import classNames from 'classnames';
import CountryFlag from '../CountryFlag';
import Highlighter from "react-highlight-words";
import PropTypes from 'prop-types';
import { countryPropType } from '../../shapes/country';
import { Icon as AntdIcon } from 'antd';
import Icon from '../Icon';

import('string.prototype.startswith');

const SearchDestination = ({destinations = [], updateSelectedDestinations, loading = false, error = null}) => {

    const items = destinations;

    return (
        <Downshift
            onChange={selection => updateSelectedDestinations(selection)}
            itemToString={item => (item ? item.value : '')}
        >
            {({
                  getInputProps,
                  getItemProps,
                  getLabelProps,
                  getMenuProps,
                  isOpen,
                  inputValue,
                  highlightedIndex,
                  selectedItem,
              }) => {

                const filteredItems = items.filter(item => !inputValue || item.value.startsWith(inputValue.toLowerCase()));

                isOpen = isOpen && !isEmpty(filteredItems);

                const inputPlaceholder = isEmpty(items) || loading ?
                    'Loading destinations...' :
                    error ?
                        'Impossible loading destinations' :
                        'Where do you want to travel?';

                return (
                    <div className="search-destination">
                        <label {...getLabelProps()} />
                        <input
                            {...getInputProps({
                                type: 'text',
                                placeholder: inputPlaceholder,
                                className: classNames({
                                    'search-destination__input-search': true,
                                    'search-destination__input-search--menu-closed': !isOpen,
                                    'search-destination__input-search--menu-open': isOpen,
                                }),
                                disabled: isEmpty(items) || loading || !isNil(error)
                            })}
                        />
                        {
                            loading || error ?
                                <AntdIcon
                                    className="search-destination__icon-search"
                                    type="loading"
                                    spin
                                /> :
                                <Icon
                                    className="search-destination__icon-search"
                                    type="search"
                                />
                        }

                        {
                            isOpen ?
                                <ul
                                    {...getMenuProps({
                                        className: "search-destination__list"
                                    })}
                                >
                                    {
                                        filteredItems.map((item, index) => (
                                            <li
                                                {...getItemProps({
                                                    className: classNames({
                                                        'search-destination__list-item': true,
                                                        'search-destination__list-item--highlighted': highlightedIndex === index,
                                                    }),
                                                    key: item.value,
                                                    index,
                                                    item,
                                                })}
                                            >
                                                <CountryFlag
                                                    className='search-destination__list-item-flag'
                                                    countryIcon={item.icon}
                                                    countryValue={item.value}
                                                />
                                                <Highlighter
                                                    className="search-destination__list-item-text"
                                                    searchWords={[inputValue]}
                                                    activeIndex={0}
                                                    highlightClassName="search-destination__list-item-text--remove-default-highlight"
                                                    activeClassName="search-destination__list-item-text--highlighted"
                                                    autoEscape={true}
                                                    textToHighlight={item.text}
                                                />
                                            </li>
                                        ))
                                    }
                                </ul>
                                :
                                null
                        }
                    </div>
                );
            }}
        </Downshift>
    );
};

SearchDestination.propTypes = {
    destinations: PropTypes.arrayOf(countryPropType).isRequired,
    error: PropTypes.object,
    loading: PropTypes.bool,
    updateSelectedDestinations: PropTypes.func,
};

export default SearchDestination;
