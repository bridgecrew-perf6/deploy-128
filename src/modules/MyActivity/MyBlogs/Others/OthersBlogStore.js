import React,{useState} from "react";
import styled from "styled-components";
import OthersBlogData from "./OthersBlogData";
import OthersBlogCard from "./OthersBlogCard";
import DeleteItem from "../../../../common/DeleteItemModal/DeleteItem";

const OtherBlogCont = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


const OthersBlogStore = () => {
    const [deleteItemOpen, setDeleteItemOpen] = useState(false);

    const handleDeleteItem  = () => {
        setDeleteItemOpen(!deleteItemOpen);
    }
    return (
        <>
            <OtherBlogCont>
                {OthersBlogData.map((singleContent) => {
                    return (
                        <>
                            <OthersBlogCard deleteItem={<DeleteItem />} id={singleContent.id} image={singleContent.image} dateDrafted={singleContent.dateDrafted} description={singleContent.description} authorName={singleContent.authorName} handleDeleteItem={handleDeleteItem}/>
                        </>
                    )
                })}
            </OtherBlogCont>
                        {deleteItemOpen && (
                            <DeleteItem 
                                open={deleteItemOpen}
                                handleDeleteItem={handleDeleteItem}
                            />
                        )}
        </>
    )
}

export default OthersBlogStore;