export default function loadMoreBtn({Page, onClick}) {
 
    return(
        <button onClick={onClick} type="button">load more {Page}</button>
    )
}