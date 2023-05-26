import { Box, useMediaQuery } from '@mui/material'
import Navbar from 'pages/navbar'
import UserWidget from 'pages/widgets/UserWidget';
import React from 'react'
import { useSelector } from 'react-redux';
import MyPostWidget from 'pages/widgets/MyPostWidget'

const HomePage = () => {
  const isNonMobleScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
  <Box>
    <Navbar />
    <Box
      width="100%"
      padding="2rem 6%"
      display={isNonMobleScreens ? "flex" : "block"}
      gap=".5rem"
      justifyContent="space-between"
    >
      <Box flexBasis={isNonMobleScreens ? "26%" : undefined}>
        <UserWidget userId={_id} picturePath={picturePath} />
      </Box>
      <Box
        flexBasis={isNonMobleScreens ? "42%" : undefined}
        mt={isNonMobleScreens ? undefined : "2rem"}
      >
        <MyPostWidget picturePath={picturePath} />
      </Box>
      {isNonMobleScreens && <Box flexBasis={"26%"}></Box>}
    </Box>
  </Box>
)}

export default HomePage