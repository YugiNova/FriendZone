import { useEffect } from "react";
import CreatePost from "../../../components/CreatePost";
import PostLoading from "../../../components/Loading/PostLoading";
import Post from "../../../components/Post";
import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { fetchNewsfeed } from "../../../redux/newsfeedSlice";
import { getNewsfeed, getTheme } from "../../../redux/selectors";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton } from "antd";

const Newfeeds: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const newsfeed = useSelector(getNewsfeed);
    const theme = useSelector(getTheme);

    useEffect(() => {
        dispatch(fetchNewsfeed());
    }, []);

    return (
        <Container>
            <CreatePost />
            <InfiniteScroll
                dataLength={newsfeed.data.length} //This is important field to render the next data
                next={() => {
                    dispatch(fetchNewsfeed("loadmore"));
                }}
                hasMore={true}
                loader={
                    // <PostLoading/>
                    <div
                        style={{
                            background: theme.primaryBackground,
                            marginTop: "1rem",
                            boxShadow: theme.boxshadow,
                            borderRadius: "0.5rem",
                            padding: "1rem",
                        }}
                    >
                        <Skeleton active avatar paragraph={{ rows: 5 }} />
                    </div>
                }
                endMessage={
                    <h3
                        style={{
                            color: theme.primaryColor,
                            width: "100%",
                            textAlign: "center",
                            margin: 0,
                        }}
                    >
                        Yay! That's all
                    </h3>
                }
                pullDownToRefresh={false}
                releaseToRefreshContent={
                    <h3 style={{ textAlign: "center" }}>
                        &#8593; Release to refresh
                    </h3>
                }
                scrollThreshold={"50px"}
            >
                {newsfeed.data.map((item) => {
                    return <Post post={item} />;
                })}
            </InfiniteScroll>
        </Container>
    );
};

export default Newfeeds;
