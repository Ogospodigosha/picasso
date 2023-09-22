
import {useGetPostsQuery} from "shared/api/api";
import {PageLoader} from "shared/ui/PageLoader/PageLoader";


const MainPage = () => {

    const {data=[],isLoading } = useGetPostsQuery()
    if (isLoading) return <PageLoader/>
    return (
        <div>
            <ul>
                {data.map(el =>(<li key={el.userId}>{el.body}</li>))}
            </ul>


        </div>
    );
};

export default MainPage;
