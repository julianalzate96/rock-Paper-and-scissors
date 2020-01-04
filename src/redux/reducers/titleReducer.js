
const titleReducer = (state="",action) => {
    switch (action.type) {
        case "TIE": return "TIE"
        case "WIN": return "YOU WIN"
        case "LOSE": return "YOU LOSE"
        default: return state
    }
}

export default titleReducer;