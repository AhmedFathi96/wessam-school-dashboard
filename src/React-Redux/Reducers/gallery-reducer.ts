import { reducer, on } from "ts-action";
import { getGalleryImageSucceeded , createGalleryImageSucceeded  , editGalleryImageSucceeded, deleteGalleryImageSucceeded} from "../Actions/gallery-action";
import { IGalleryImage } from "../../lib/index";

interface IState{
    GalleryImages: IGalleryImage[];
    
}

export const galleryImagesReducer = reducer<IState>(
    {
        GalleryImages: [],
    },
    on(getGalleryImageSucceeded, (state, { payload }) => ({
        ...state,
        GalleryImages: payload,
    })),
    on(createGalleryImageSucceeded, (state, { payload }) => ({
        ...state,
        GalleryImages: [...state.GalleryImages , payload]
    })),
    on(editGalleryImageSucceeded, (state, { payload }) => {
        const oldData = state.GalleryImages.filter((date) => date._id !== payload._id);
        const newGalleryImage = payload;
        console.log('gallery' , oldData,newGalleryImage)
        return{
            ...state,
            GalleryImages: [...oldData, newGalleryImage]
        }
    }),
    on(deleteGalleryImageSucceeded, (state, { payload }) => {
        const oldData = state.GalleryImages.filter((SliderItems) => SliderItems._id !== payload._id);
        return{
            ...state,
            GalleryImages: [...oldData]
        }
    }),
    // on(editGalleryImageucceeded, (state, { payload }) => ({
    //     ...state,
    //     GalleryImage: [...state.GalleryImage , payload]
    // })),
    
)