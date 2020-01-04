
const OPTIONS = ["Rock", "Paper", "Scissors"]

const randomReducer = (state="",action) => {
    switch (action.type) {
        case "RANDOM": return OPTIONS[Math.floor(Math.random() * 3)]
        case "RESET": return ""
        default: return state
    }
}

export default randomReducer;