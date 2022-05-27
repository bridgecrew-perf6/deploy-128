import React from 'react';
import styled from 'styled-components';
import PostedBlogStore from "./PostedBlogStore";

const PostBlogCont = styled.div`

`;

const Container = styled.div`

`;

const PostTitle = styled.div`

`;

const UnderlineML = styled.div`
    width: 100px;
    margin-top: 15px;
    border: none;
    border-bottom: 2px solid #F24F17;
    height: 0;
`;

const PostBlogTitlePara = styled.div`

`;

const SearchField = styled.div`
    display: flex;
    justify-content: space-between;
`;
const PostedBlogSearch = styled.input`
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

const PostedBlogs = () => {
  return (
    <>
        <PostBlogCont>
            <Container>
                <PostTitle>
                    Drafted Blogs
                </PostTitle>
                <UnderlineML></UnderlineML>
                <PostBlogTitlePara>
                    All your blog drafts will be visible here
                </PostBlogTitlePara>
                <SearchField>
                    <PostedBlogSearch type="search" placeholder="Search" />
                    <p>Total 50</p>
                </SearchField>
            </Container>
            <PostedBlogStore />
        </PostBlogCont>
    </>
  )
}

export default PostedBlogs