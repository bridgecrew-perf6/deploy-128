import React from 'react';
import styled from 'styled-components';
import OthersBlogStore from "./OthersBlogStore";

const OtherBlogCont = styled.div`

`;

const Container = styled.div`

`;

const OthersTitle = styled.div`

`;

const UnderlineML = styled.div`
    width: 100px;
    margin-top: 15px;
    border: none;
    border-bottom: 2px solid #F24F17;
    height: 0;
`;

const OtherBlogTitlePara = styled.div`

`;

const SearchField = styled.div`
    display: flex;
    justify-content: space-between;
`;
const OthersBlogSearch = styled.input`
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

const Others = () => {
  return (
    <>
        <OtherBlogCont>
            <Container>
                <OthersTitle>
                    Drafted Blogs
                </OthersTitle>
                <UnderlineML></UnderlineML>
                <OtherBlogTitlePara>
                    All your blog drafts will be visible here
                </OtherBlogTitlePara>
                <SearchField>
                    <OthersBlogSearch type="search" placeholder="Search" />
                    <p>Total 50</p>
                </SearchField>
            </Container>
            <OthersBlogStore />
        </OtherBlogCont>
    </>
  )
}

export default Others