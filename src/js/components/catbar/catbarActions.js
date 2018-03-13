import axios from "axios";

export function catbar(category) {
    
    return {
        type: "CATBAR",
        payload: {category}
    }
}
