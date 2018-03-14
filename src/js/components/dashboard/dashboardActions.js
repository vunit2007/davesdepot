import axios from "axios";

export function removeListing(id){
    return {
        type: "REMOVE_LISTING",
        payload: axios.delete(`/api/listings/${id}`).then(res => res.data)
    }
}