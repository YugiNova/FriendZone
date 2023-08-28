import { useDispatch, useSelector } from "react-redux";
import { getNotifications, getTheme } from "../../redux/selectors";
import { NotificationList, PopContent, Title } from "./styles";
import { useEffect, useState } from "react";
import { toggleDarkTheme, toggleLightTheme } from "../../redux/themeSlice";
import NotificaitionItem from "./NotificationItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppDispatch } from "../../redux/store";
import { fetchNotifications, markAsRead } from "../../redux/notificationSlice";
import { Skeleton } from "antd";

interface Notification {
    user: string;
    content: string;
    time: string;
    avatar?: string;
}

const PopoverContent: React.FC = () => {
    const theme = useSelector(getTheme);
    const [checked, setChecked] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const notifications = useSelector(getNotifications);

    return (
        <PopContent theme={theme}>
            <Title theme={theme}>Notifications</Title>
            <NotificationList>
                <InfiniteScroll
                    dataLength={notifications.data.length} //This is important field to render the next data
                    next={() => {
                        dispatch(fetchNotifications(notifications.nextCursor));
                    }}
                    hasMore={notifications.nextCursor ? true : false}
                    loader={
                        <Skeleton
                            style={{ width: "20rem", padding: "0.5rem" }}
                            avatar
                            title={false}
                            active
                        />
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
                    height={"20rem"}
                >
                    {notifications.data.map((item) => {
                        return <NotificaitionItem notification={item} />;
                    })}
                </InfiniteScroll>
            </NotificationList>
        </PopContent>
    );
};

export default PopoverContent;
