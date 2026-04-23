import React, {useReducer} from 'react';

const initialValue = {
    name: "",
    email: ""
}
function reducer(state, action) {
    switch(action.type) {
        case "INSERT_INPUT":
            return {
                ...state,
                [action.field]: action.value
            };
        default:
            return state;

    }

}
export default function useForm() {
    const [state, dispatch] = useReducer(reducer, initialValue)
   const handleChange = (e) => {
    dispatch({
        type: "INSERT_INPUT",
        field: e.target.name,
        value: e.target.value
    })
   }
   return {
    state,
    handleChange
   }
}