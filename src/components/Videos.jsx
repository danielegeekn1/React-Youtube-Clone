import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
const Videos = ({ videos }) => {
  console.log("videos", videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
