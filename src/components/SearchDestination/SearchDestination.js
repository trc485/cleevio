import React from 'react';
import Downshift from 'downshift';
import classNames from 'classnames';
import CountryFlag from '../CountryFlag';

const SearchDestination = ({countries = []}) => {

    const items = countries;

    return (
        <Downshift
            onChange={selection =>
                alert(selection ? `You selected ${selection.value}` : 'Selection Cleared')
            }
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

                const filteredItems = items.filter(item => !inputValue || item.value.includes(inputValue));

                isOpen = isOpen && filteredItems.length > 0;

                return (
                    <div className="search-destination">
                        <label {...getLabelProps()} />
                        <input
                            {...getInputProps({
                                type: 'text',
                                placeholder: 'Where do you want to travel?',
                                className: classNames({
                                    'search-destination__input-search': true,
                                    'search-destination__input-search--menu-closed': !isOpen,
                                    'search-destination__input-search--menu-open': isOpen,
                                }),
                            })}
                        />
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
                                                <span
                                                    className="search-destination__list-item-text"
                                                >
                                                        {item.text}
                                                </span>
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

export default SearchDestination;
