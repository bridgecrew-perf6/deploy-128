import React,{useState} from "react";
import styled from "styled-components";
import DraftedBlogData from "./DraftedBlogData";
import DraftedBlogCard from "./DraftedBlogCard";
import DeleteItem from "../../../../common/DeleteItemModal/DeleteItem";

const DraftBlogCont = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const CrossSign = styled.div`
    position: absolute;
`;
const DraftedBlogStore = () => {
    const [deleteItemOpen, setDeleteItemOpen] = useState(false);

    const handleDeleteItem  = () => {
        setDeleteItemOpen(!deleteItemOpen);
    }
    return (
        <>
            <DraftBlogCont>
                {DraftedBlogData.map((singleContent) => {
                    return (
                        <>
                            <DraftedBlogCard deleteItem={<DeleteItem />} id={singleContent.id} image={singleContent.image} dateDrafted={singleContent.dateDrafted} description={singleContent.description} authorName={singleContent.authorName} handleDeleteItem={handleDeleteItem}/>
                        </>
                    )
                })}
            </DraftBlogCont>
                        {deleteItemOpen && (
                            <DeleteItem 
                                open={deleteItemOpen}
                                handleDeleteItem={handleDeleteItem}
                            />
                        )}
        </>
    )
}

export default DraftedBlogStore;