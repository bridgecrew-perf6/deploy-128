import React from 'react'




const VideoImageCard = (props) => {

    const { title, authorname, image, date, like, view, save, comment, project } = props;


    return (
        <>
            <div class="VideoImageCardColumn">
                <div className="VideoImageCardContent">
                    <div className='VideoImageCardContentContainer'>
                       <img className="ImageCover" src="/card/VideoCover.png" />
                       <div className="checkbox_input">
                        <label class="container_input">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>    
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoImageCard