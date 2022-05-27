import React from 'react';
import styled from 'styled-components';

const PostedBlogCardCont = styled.div`
    position: relative;
    width: 400px;
    height: 361px;
    margin-right: 3%;
    border-radius: 10px;
`;

const PostBlogCardImage = styled.div`
    width: 100%;
    
`;

const Image = styled.img`
    width: 100%;
`;

const PostBlogContent = styled.div`

`;

const Date = styled.h2``;

const Desc = styled.p`
    
`;

const AuthorName = styled.h2``;

const CrossSign = styled.div`
    position:absolute;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #ffffff;
`;

const CrossImg = styled.img`
    border-style: none;
    width: 17px;
    height: 17px;
`;

const PostedBlogCard = (props) => {
    const {image, dateposted, description, authorName,handleDeleteItem} = props;
    return (
        <>
            <PostedBlogCardCont>
                <CrossSign onClick={handleDeleteItem}>
                    <CrossImg src="/icons/cross.svg" alt='crossItem'/>
                </CrossSign>
                <PostBlogCardImage>
                    <Image src={image}/>
                </PostBlogCardImage>
                <PostBlogContent>
                    <Date>
                        {dateposted}
                    </Date>
                    <Desc>
                        {description}
                    </Desc>
                    <AuthorName>
                        {authorName}
                    </AuthorName>
                </PostBlogContent>
            </PostedBlogCardCont>
        </>
    )
  }
  
  export default PostedBlogCard;