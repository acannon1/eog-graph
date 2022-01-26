export const actionTypes = {
    UPDATE_INSTRUMENTS: "UPDATE_INSTRUMENTS",
}

export interface CounterAction {
    type: string;

}

const initialState = {
    counter: 0,
    instruments: [{
        number: 0,
        instr1: 0,
        instr2: 0,
        instr3: 0,
        instr4: 0,
        instr5: 0,
    }]
};

export const countReducer = (state: any = initialState, action: CounterAction): any => {
    switch (action.type) {

        case actionTypes.UPDATE_INSTRUMENTS: {
            let copyArray = [...state.instruments];
          
            if (copyArray.length >= 30) {
                copyArray.shift()
            }

            copyArray.push(
            {
                number: state.counter + 1,
                instr1: Math.floor(Math.random() * (200 - 100 + 1) + 100),
                instr2: Math.floor(Math.random() * (225 - 175 + 1) + 175),
                instr3: Math.floor(Math.random() * (225 - 175 + 1) + 175),
                instr4: Math.floor(Math.random() * (225 - 175 + 1) + 175),
                instr5: Math.floor(Math.random() * (225 - 175 + 1) + 175),
            })

            return {
                ...state,
                counter: state.counter + 1,
                instruments: copyArray
            };
        }

        default:
            return state
    }
}
