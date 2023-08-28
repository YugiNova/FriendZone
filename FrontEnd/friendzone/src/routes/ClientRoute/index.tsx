import { Route, Routes } from "react-router-dom";
import ClientLayout from "../../layouts/client";
import Newfeeds from "../../pages/client/newfeeds";
import Profile from "../../pages/client/profile.tsx";
import Introduce from "../../pages/client/introduce";
import Overview from "../../pages/client/introduce/overview";
import Contact from "../../pages/client/introduce/contact";
import Place from "../../pages/client/introduce/place";
import Work from "../../pages/client/introduce/work";
import Event from "../../pages/client/introduce/event";
import Timeline from "../../pages/client/timeline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, getCurrentUser } from "../../redux/selectors";
import {
    changePrimaryColor,
    toggleDarkTheme,
    toggleLightTheme,
} from "../../redux/themeSlice";
import People from "../../pages/client/people";
import socket from "../../socket";
import { toast } from "react-toastify";
import FriendRequest from "../../pages/client/friend_requests";

const ClientRoute = () => {
    const currentUser = useSelector(getCurrentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser.profile?.theme == "light") {
            dispatch(toggleLightTheme());
        } else if (currentUser.profile?.theme == "dark") {
            dispatch(toggleDarkTheme());
        }

        if (currentUser.profile?.color) {
            dispatch(changePrimaryColor(currentUser.profile?.color));
        }
    }, [currentUser.profile?.color, currentUser.profile?.theme]);

    useEffect(() => {
        if (currentUser.id) {
            socket.auth = {userId: currentUser.id}
            socket.connect();
            socket.emit('identify',currentUser.id)
        }

        return () => {
            socket.emit('leave-room',currentUser.id)
            // socket.disconnect()
        }
    }, [currentUser.id]);

    return (
        <Routes>
            <Route path="/" element={<ClientLayout />}>
                <Route index element={<Newfeeds />} />
                <Route path=":slug" element={<Profile />}>
                    <Route index element={<Timeline />} />
                    <Route path="introduce" element={<Introduce />}>
                        <Route index element={<Overview />} />
                        <Route path="overview" element={<Overview />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="place" element={<Place />} />
                        <Route path="work_education" element={<Work />} />
                        <Route path="event" element={<Event />} />
                    </Route>
                    <Route path="*" element={<Timeline />} />
                </Route>
                <Route path="friend-requests" element={<FriendRequest />} />
                <Route path="people" element={<People />} />
                <Route path="*" element={<Newfeeds />} />
            </Route>
        </Routes>
    );
};

export default ClientRoute;
