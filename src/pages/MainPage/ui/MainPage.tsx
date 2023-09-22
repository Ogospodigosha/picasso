import cls from './MainPage.module.scss'
import {useGetPostsQuery} from "shared/api/api";
import {Container} from "shared/ui/Container/Container";



const MainPage = () => {

    const {data = [], isLoading} = useGetPostsQuery()
    return (
        <div>
            <ul>
                {data.map(el => (<Container cls={'wrapper-layout'}>
                    <li className={cls.item} style={{marginBottom: '20px'}} key={el.body}><span style={{color: 'green'}}>TITLE</span>: {el.title}</li>
                    <li className={cls.item} key={el.body}><span style={{color: 'green'}}>BODY</span>: {el.body}</li>
                </Container>))}
            </ul>


        </div>
    );
};

export default MainPage;
