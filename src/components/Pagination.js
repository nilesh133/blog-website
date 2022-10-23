import {Link} from "react-router-dom";
const Pagination = ({page, perPage, count}) => {
    let totalPages = Math.ceil(count / perPage);
    let startLoop = page;
    let diff = totalPages - page;
    if(diff <= 3){
        startLoop = totalPages - 3;
    }
    let endLoop = startLoop + 3;
    if(startLoop <= 0){
        startLoop = 1;
    }

    const links = () =>{
        const store = [];
        for(let i = startLoop; i <= endLoop; i++){
            store.push(
                <li key = {i} className = {i == page ? 'active_link' : ''}>
                    <Link to = {`/dashboard/${i}`}>{i}</Link>
                </li>
            )
        }
        return store;
    }

    /*const next = () => {
        
        if(page < totalPages){
            return (<li><Link to = {`/dashboard/${parseInt(page) + 1}`}><i class="zmdi zmdi-arrow-right"></i></Link></li>)
        }
    }*/

    return totalPages && count > 3 ? (
        <div className = "pagination">{links()}</div>
    ) : ('');
}

export default Pagination;