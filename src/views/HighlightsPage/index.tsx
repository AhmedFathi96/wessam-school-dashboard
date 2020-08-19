import React, { useEffect } from "react";
import Gallery from "./gallery";
import { useSelect } from "../../helper";
import { useDispatch } from "react-redux";
import { getGalleryImage } from "../../React-Redux/Actions/gallery-action";
import Loader from "react-loader-spinner";
import ReactNotification from 'react-notifications-component';



const HighlightsPage:React.FC = () => {

    const {GalleryImages,gallery_is_loading} = useSelect(state => state.galleryImagesReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getGalleryImage());
    },[])
    
    return (
        <>
            <div style={{marginBottom: '3rem',marginRight: '5rem'}}>
                <ReactNotification />
            </div>
            {
                (gallery_is_loading)?
                    <>
                        <Gallery GalleryImages={GalleryImages} />
                    </>
                    :
                    <div style={{margin: '25% 40%'}}>
                        <Loader
                            type="Puff"
                            color="#B09E80"
                            height={150}
                            width={150}
                        />
                    </div>
                    
            }
        </>
    
    );
}

export default HighlightsPage;