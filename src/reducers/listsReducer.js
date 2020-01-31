import { CONSTANTS } from "../actions"

let listId = 2;
let cardId = 4;

const initialState = [
    {
        title: "Last Episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "we created a static list and a static card"
            },
            {
                id: 1,
                text: "we used a mix between material Ui React and styled components"
            }
        ]
    },
    {
        title: "This Episode",
        id: 1,
        cards: [
            {
                id: 0,
                text: "we will create our firlst reducer"
            },
            {
                id: 1,
                text: "and render many cards on our list with static data"
            },
            {
                id: 2,
                text: "we will also make some little changes I forgot in the last episode (link tags for roboto font and icons, ...)"
            }
        ]
    }
];

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                id: listId,
                cards: []
            };
            listId += 1;
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardId
            }
            cardId += 1;

            const newState = state.map(list => {
                if (list.id === action.payload.listId) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    };
                } else {
                    return list;
                }
            });

            return newState;
        default:
            return state;
    }
}

export default listsReducer;