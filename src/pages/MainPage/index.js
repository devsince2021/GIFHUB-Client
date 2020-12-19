import React, { useState, useEffect } from 'react';
import MainHeaderContainer from '../../containers/MainHeaderContainer';
import { MainContent } from './styled';
import axios from 'axios';

export default function MainPage() {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    loadAllMockData();
    async function loadAllMockData() {
      const res = await axios.get('http://www.localhost:4000/mediaFile');
      const filterd = res.data.filter((media) => !media.key);
      setMediaList(filterd)
    }
  }, [])

  return (
    <>
      <MainHeaderContainer />
      <MainContent>
        {mediaList.map((media, i) =>
          <img key={i} src={media.location} width='100%' height='400px' alt={`mock${i}`}/>
        )}
      </MainContent>
    </>
  );
}
