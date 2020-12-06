import React, { memo } from 'react';

import { Box, Grid, Typography } from '@material-ui/core';

interface IVideoCard {
  item: {
    title: string;
    thumb: string;
    channel: string;
    views: string;
    date: string;
  };
}
const VideoCard: React.FC<IVideoCard> = ({ item }) => {
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Box>
        <img style={{ width: '100%' }} alt={item.title} src={item.thumb} />
        <Box>
          <Typography
            style={{ fontWeight: 600 }}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {item.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary">
            {item.channel}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${item.views} • ${item.date}`}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default memo(VideoCard);
