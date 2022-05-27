import React,{useState} from "react";
import styled from "styled-components";
import PostedBlogData from "./PostedBlogData";
import PostedBlogCard from "./PostedBlogCard";
import DeleteItem from "../../../../common/DeleteItemModal/DeleteItem";

const PostBlogCont = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const PostAdd = styled.div`
    width: 400px;
    height: 351px;
    border: 2px dashed #696969;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3%;
`;
const AddImage = styled.img``;

const CrossSign = styled.div`
    position: absolute;
`;
const PostedBlogStore = () => {
    const [deleteItemOpen, setDeleteItemOpen] = useState(false);

    const handleDeleteItem  = () => {
        setDeleteItemOpen(!deleteItemOpen);
    }
    return (
        <>
            <PostBlogCont>
                
                <PostAdd>
                    <AddImage src="/icons/project_add.svg" alt="addpostImg"/>
                </PostAdd>
                {PostedBlogData.map((singleContent) => {
                    return (
                        <>
                            <PostedBlogCard deleteItem={<DeleteItem />} id={singleContent.id} image={singleContent.image} dateposted={singleContent.dateposted} description={singleContent.description} authorName={singleContent.authorName} handleDeleteItem={handleDeleteItem}/>
                        </>
                    )
                })}
            </PostBlogCont>
                        {deleteItemOpen && (
                            <DeleteItem 
                                open={deleteItemOpen}
                                handleDeleteItem={handleDeleteItem}
                            />
                        )}
        </>
    )
}

export default PostedBlogStore;