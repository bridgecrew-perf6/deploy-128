import React from 'react';
import styled from 'styled-components';

const FavImgCardCont = styled.div`
    width: 400px;
    height: 350px;
    margin-right: 3%;
`;

const FavCardImage = styled.div`
    width: 100%;

`;

const Image = styled.img`
    border-radius: 5px;
    width: 100%;
`;

const FavImgCard = (props) => {
  return (
      <>
          <FavImgCardCont>
                <FavCardImage>
                    <Image src={props.image}/>
                </FavCardImage>
          </FavImgCardCont>
      </>
  )
}

export default FavImgCard