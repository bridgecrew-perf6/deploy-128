import React from 'react';
import FavImgStore from './FavImgStore';
import styled from 'styled-components';

const FavImgContainer = styled.div`
    width: 100%;
    min-height: 100%;
    background: #FFFFFF;
`;

const Container = styled.div``;

const FavImgTitle = styled.div`
    height: 30px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;

    color: #1f1f1f;
`;

const UnderlineML = styled.div`
    width: 100px;
    margin-top: 15px;
    border: none;
    border-bottom: 2px solid #F24F17;
    height: 0;
`;

const FavImgTitlePara = styled.p`
    height: 19px;
    top: 200px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin: 30px 0px 31px 0px;
    color: #1f1f1f;
`;

const SearchField = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FavImgSearch = styled.input`
    border: none;
    width: 250px;
    height: 40px;
    background-color: #f2f2f2;
    border-radius: 2px;
    margin-bottom: 30px;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: black !important;
    }
    :-ms-input-placeholder {
        color: black !important;
    }
`;
const FavouriteImages = () => {
  return (
      <>
            <FavImgContainer className="container-fluid">
                <Container>
                    <FavImgTitle>
                        Images
                    </FavImgTitle>
                    <UnderlineML></UnderlineML>
                    <FavImgTitlePara>
                        All your saved images will be visible here
                    </FavImgTitlePara>
                    <SearchField>
                        <FavImgSearch type="search" placeholder="Search" />
                        <p>Total 50</p>
                    </SearchField>
                </Container>
                <FavImgStore />
            </FavImgContainer>
      </>
  )
}

export default FavouriteImages