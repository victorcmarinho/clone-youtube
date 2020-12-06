import React, { memo } from 'react';

import {
  AppBar as MatAppBar,
  Button,
  IconButton,
  Switch,
  Theme,
  Toolbar,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Apps from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';

import youtubeLight from '~/assets/img/branco.png';
import youtubeDark from '~/assets/img/preto.png';
import { useTheme } from '~/hooks/ThemeContext';

interface IAppBar {
  classes: Record<
    | 'root'
    | 'appBar'
    | 'logo'
    | 'drawer'
    | 'drawerPaper'
    | 'menuIcon'
    | 'icons'
    | 'grow'
    | 'listItemText'
    | 'listItem'
    | 'subheader'
    | 'drawerContainer',
    string
  >;
  theme: Theme;
}

const AppBar: React.FC<IAppBar> = ({ classes, theme }) => {
  const { themeState, toggle } = useTheme();
  return (
    <MatAppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <img
          src={theme.palette.type === 'dark' ? youtubeLight : youtubeDark}
          alt="logo"
          className={classes.logo}
        />
        <div className={classes.grow} />
        <Switch
          value={themeState.mode}
          onChange={() => toggle()}
          className={classes.icons}
        />
        <IconButton className={classes.icons}>
          <VideoCall />
        </IconButton>
        <IconButton className={classes.icons}>
          <Apps />
        </IconButton>
        <IconButton className={classes.icons}>
          <MoreVert />
        </IconButton>
        <Button
          startIcon={<AccountCircle />}
          variant="outlined"
          color="secondary"
        >
          Fazer Login
        </Button>
      </Toolbar>
    </MatAppBar>
  );
};

export default memo(AppBar);
