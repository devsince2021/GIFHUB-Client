import React, { useEffect } from 'react';
import MainHeaderContainer from '../../containers/MainHeaderContainer';
import { MainContent } from './styled';

export default function MainPage({ onLoadMediaFile, mediaFileList, isMediaListLoading }) {

  useEffect(() => {
    onLoadMediaFile();
  }, [])

  return (
    <>
      <MainHeaderContainer />
      <MainContent>
        {
          mediaFileList && !isMediaListLoading &&
          mediaFileList.map((media, i) =>
            <img key={i} src={media.location} width='100%' height='400px' alt={`mock${i}`}/>
          )
        }
      </MainContent>
    </>
  );
}
