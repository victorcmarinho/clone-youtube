import React, { FC } from 'react';

import { Box, Drawer, Grid, Hidden, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import AppBar from '~/components/AppBar';
import Toolbar from '~/components/Toolbar';
import VideoCard from '~/components/VideoCard';
import { videos } from '~/mocks/videos';

import { useStyles } from './styles';

const Home: FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar classes={classes} theme={theme} />

      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar classes={classes} />
          </Drawer>
        </Hidden>

        <Box p={8}>
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <VideoCard item={item} key={index} />
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
