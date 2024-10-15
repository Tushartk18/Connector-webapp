import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import Navbar from "../navbar/index.jsx";
import UserWidget from "scenes/widgets/UserWidgets.jsx";
import MyPostWidgets from "scenes/widgets/MyPostWidgets.jsx";
import PostsWidget from "scenes/widgets/PostsWidget.jsx";
import AdvertWidget from "scenes/widgets/AdvertWidget.jsx";
import FriendListWidget from "scenes/widgets/FriendListWidget.jsx";

const HomePage = () => {

    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const {_id, picturePath} = useSelector((state) => state.user);

    return (
        <Box>
            <Navbar />
            <Box
                width="100%" padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between"
            >
                <Box flexBasis={isNonMobileScreens? "26%" : undefined}>
                    <UserWidget userId={_id} picturePath={picturePath} />
                </Box>
                <Box  flexBasis={isNonMobileScreens? "42%" : undefined} mt={isNonMobileScreens? undefined:"2rem"} >
                    <MyPostWidgets picturePath={picturePath}/>
                    <PostsWidget userId={_id} />
                </Box>
                {isNonMobileScreens && (
                    <Box flexBasis="26%">
                        <AdvertWidget />
                        <Box m="2rem 0" />
                        <FriendListWidget userId={_id} />
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default HomePage;