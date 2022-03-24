import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SubTitle from './SubTitle';
import FilterBoxContour from './FilterBox/FilterBoxContour';
import FilterBoxForm from './FilterBox/FilterBoxForm';
import ContentBoxContour from './ContentBoxContour';
import ContentBoxInfo from './ContentBoxInfo';
import API from '../../config';

const LIMIT = 6;

const Main = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();

  let addPath = location.search;

  const [sortQuery, setSortQuery] = useState();
  const [themeQuery, setThemeQuery] = useState();
  const [pageQuery, setPageQuery] = useState(`?limit=${LIMIT}`);
  const [rangeQuery, setRangeQuery] = useState(0);
  const [searchQuery, setSearchQuery] = useState();
  const [numQuery, setNumQuery] = useState();
  const [dateQuery, setDateQUery] = useState();

  const updateOffset = buttonNum => {
    const offset = buttonNum * LIMIT;
    const queryString = `?limit=${LIMIT}&offset=${offset}`;
    setPageQuery(queryString);
  };

  //TODO: mockData 연결
  // useEffect(() => {
  //   fetch('/data/items.json')
  //     .then(response => response.json())
  //     .then(data => setItems(data.result));
  //   // .then(data => console.log(data));
  // }, []);

  // //TODO: back-end 통신
  useEffect(() => {
    fetch(`${API.itemsList}${pageQuery}`) //?lilmit=4
      .then(response => response.json())
      .then(response => setItems(response.planets_list));
  }, []);

  useEffect(() => {
    let addPath = '';
    //TODO: queryString 확인
    console.log(addPath);
    if (pageQuery) addPath = pageQuery;
    if (sortQuery) addPath = addPath + '&sort=' + sortQuery;
    if (themeQuery) addPath = addPath + '&theme=' + themeQuery;
    if (rangeQuery)
      addPath = addPath + '&max-price=' + rangeQuery + '&min-price=0';
    //TODO: queryString 확인
    console.log(addPath);
    fetch(`${API.itemsList}${addPath}`)
      .then(response => response.json())
      .then(response => setItems(response.planets_list));
  }, [pageQuery, themeQuery, sortQuery, rangeQuery]);

  if (items.length === 0) {
    return null;
  }

  return (
    <>
      <SubTitle />
      <FilterBoxContour>
        <FilterBoxForm
          setSortQuery={setSortQuery}
          setThemeQuery={setThemeQuery}
          setRangeQuery={setRangeQuery}
          rangeQuery={rangeQuery}
        />
      </FilterBoxContour>
      <ContentBoxContour>
        <ContentBoxInfo
          items={items}
          updateOffset={updateOffset}
          setPageQuery={setPageQuery}
        />
      </ContentBoxContour>
    </>
  );
};

export default Main;
