import React from 'react'
import VideoImageCard from './Cards/VideoImageCard'
import DeleteProject from './DeleteProject'


const CardData = [{
    "title": "Project Title biggy title no no big tis...",
    "authorname": "Author Name",
    "image": "card/Rectangle_1.png",
    "date": "20-May-2022",
    "like": "400",
    "view": "1002",
    "save": "1002",
    "comment": "1098"
},
{
    "title": "Project Title biggy title no no big tis...",
    "authorname": "Author Name",
    "image": "card/Rectangle_1.png",
    "date": "20-May-2022",
    "like": "400",
    "view": "1002",
    "save": "1002",
    "comment": "1098"
},
{
    "title": "Project Title biggy title no no big tis...",
    "authorname": "Author Name",
    "image": "card/Rectangle_1.png",
    "date": "20-May-2022",
    "like": "400",
    "view": "1002",
    "save": "1002",
    "comment": "1098"
},
{
    "title": "Project Title biggy title no no big tis...",
    "authorname": "Author Name",
    "image": "card/Rectangle_1.png",
    "date": "20-May-2022",
    "like": "400",
    "view": "1002",
    "save": "1002",
    "comment": "1098"
},
{
    "title": "Project Title biggy title no no big tis...",
    "authorname": "Author Name",
    "image": "card/Rectangle_1.png",
    "date": "20-May-2022",
    "like": "400",
    "view": "1002",
    "save": "1002",
    "comment": "1098"
}

]



const VideoMain = () => {
    return (
        <div class="VideoImageCardContainer">
            <div className="VideoImageCardRow">
                {/* add_new */}
                <div className="VideoImageCardColumn">
                    <div className="VideoImageCardContent-add">
                        <button className="ButtonCard">
                            <div className="CardCross"><button class="ButtonCardDelete">
                                <img className="CardCrossImage" src="/icons/cross.svg" alt="Delete Card" />
                            </button></div>
                            <div><img src="/icons/project_add.svg" alt="image Detail" /></div>
                            <div className='AddNewProject'>Add New File</div>
                        </button>
                    </div>
                </div>
                {/* add new */}
                {CardData.map((item) =>
                    <VideoImageCard
                        title={item.title}
                        authorname={item.authorname}
                        image={item.image}
                        date={item.date}
                        like={item.like}
                        view={item.view}
                        save={item.save}
                        comment={item.comment}
                    />
                )}
            </div>
        </div>
    )
}

export default VideoMain