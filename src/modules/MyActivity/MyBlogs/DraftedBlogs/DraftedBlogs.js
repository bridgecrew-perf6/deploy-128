import React from 'react';
import styled from 'styled-components';
import DraftedBlogStore from "./DraftedBlogStore";

const DraftBlogCont = styled.div`

`;

const Container = styled.div`

`;

const DraftTitle = styled.div`

`;

const UnderlineML = styled.div`
    width: 100px;
    margin-top: 15px;
    border: none;
    border-bottom: 2px solid #F24F17;
    height: 0;
`;

const DraftBlogTitlePara = styled.div`

`;

const SearchField = styled.div`
    display: flex;
    justify-content: space-between;
`;
const DraftedBlogSearch = styled.input`
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

const DraftedBlogs = () => {
  return (
    <>
        <DraftBlogCont>
            <Container>
                <DraftTitle>
                    Drafted Blogs
                </DraftTitle>
                <UnderlineML></UnderlineML>
                <DraftBlogTitlePara>
                    All your blog drafts will be visible here
                </DraftBlogTitlePara>
                <SearchField>
                    <DraftedBlogSearch type="search" placeholder="Search" />
                    <p>Total 50</p>
                </SearchField>
            </Container>
            <DraftedBlogStore />
        </DraftBlogCont>
    </>
  )
}

export default DraftedBlogs