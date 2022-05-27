import React from 'react';
import styled from 'styled-components';

const DraftedBlogCardCont = styled.div`
    position: relative;
    width: 400px;
    height: 361px;
    margin-right: 3%;
`;

const DraftBlogCardImage = styled.div`
    width: 100%;
    
`;

const Image = styled.img`
    width: 100%;
`;

const DraftBlogContent = styled.div`

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

const DraftedBlogCard = (props) => {
    const {image, dateDrafted, description, authorName,handleDeleteItem} = props;
    return (
        <>
            <DraftedBlogCardCont>
                <CrossSign onClick={handleDeleteItem}>
                    <CrossImg src="/icons/cross.svg" alt='crossItem'/>
                </CrossSign>
                <DraftBlogCardImage>
                    <Image src={image}/>
                </DraftBlogCardImage>
                <DraftBlogContent>
                <Date>
                    {dateDrafted}
                </Date>
                <Desc>
                    {description}
                </Desc>
                <AuthorName>
                    {authorName}
                </AuthorName>
                </DraftBlogContent>
            </DraftedBlogCardCont>
        </>
    )
  }
  
  export default DraftedBlogCard;