import { reducer, on } from "ts-action";
import { getContactsSucceeded , createContactSucceeded , deleteContactSucceeded} from "../Actions/contact-action";
import { IContactMessage } from "../../lib/index";

interface IState{
    Contacts: IContactMessage[];
    
}

export const contactsReducer = reducer<IState>(
    {
        Contacts: [],
    },
    on(getContactsSucceeded, (state, { payload }) => ({
        ...state,
        Contacts: payload,
    })),
    on(createContactSucceeded, (state, { payload }) => ({
        ...state,
        Contacts: [...state.Contacts , payload]
    })),
    on(deleteContactSucceeded, (state, { payload }) => {
        const oldData = state.Contacts.filter((Contact) => Contact._id !== payload._id);
        return{
            ...state,
            Contacts: [...oldData]
        }
    }),
    // on(editContactSucceeded, (state, { payload }) => ({
    //     ...state,
    //     Contacts: [...state.Contacts , payload]
    // })),
    
)