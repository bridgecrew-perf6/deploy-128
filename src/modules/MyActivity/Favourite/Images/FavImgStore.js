import React from 'react';
import styled from 'styled-components';
import FavImgData from "./FavImgData";
import FavImgCard from './FavImgCard';

const FavImgStoreCont = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

const FavImgStore = () => {
  return (
    <>
        <FavImgStoreCont>
            {FavImgData.map((singleContent) => {
                return (
                    <>
                        <FavImgCard id={singleContent.id} image={singleContent.image}/>
                    </>
                )
            })}
        </FavImgStoreCont>
    </>
  )
}

export default FavImgStore