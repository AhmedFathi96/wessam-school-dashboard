import { reducer, on } from "ts-action";
import { getAdminsSucceeded , createAdminSucceeded , editAdmin , editAdminSucceeded, deleteAdminSucceeded} from "../Actions/admin-action";
import { IAdminUser } from "../../lib/index";

interface IState{
    admins: IAdminUser[];
    
}

export const adminsReducer = reducer<IState>(
    {
        admins: [],
    },
    on(getAdminsSucceeded, (state, { payload }) => ({
        ...state,
        admins: payload,
    })),
    on(createAdminSucceeded, (state, { payload }) => ({
        ...state,
        admins: [...state.admins , payload]
    })),
    on(editAdminSucceeded, (state, { payload }) => {
        const oldData = state.admins.filter((admin) => admin._id !== payload._id);
        const newAdmins = payload;
        return{
            ...state,
            admins: [...oldData, newAdmins]
        }
    }),
    on(deleteAdminSucceeded, (state, { payload }) => {
        const oldData = state.admins.filter((admin) => admin._id !== payload._id);
        return{
            ...state,
            admins: [...oldData]
        }
    }),
    // on(editAdminSucceeded, (state, { payload }) => ({
    //     ...state,
    //     admins: [...state.admins , payload]
    // })),
    
)