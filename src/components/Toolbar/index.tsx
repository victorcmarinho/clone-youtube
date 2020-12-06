import React, { memo } from 'react';

import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar as MatToolbar,
  Typography,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddCircle from '@material-ui/icons/AddCircle';
import History from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import Whatshot from '@material-ui/icons/Whatshot';

interface IToolbar {
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
}
const Toolbar: React.FC<IToolbar> = ({ classes }) => {
  return (
    <>
      <MatToolbar />
      <div className={classes.drawerContainer}>
        <List>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Início'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<Whatshot />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Em alta'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<Subscriptions />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Inscrições'}
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <VideoLibrary />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Biblioteca'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <History />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Histórico'}
            />
          </ListItem>
        </List>
        <Divider />
        <Box p={7}>
          <Typography variant="body2">
            Faça login para curtur vídeos, comentar e se inscrever.
          </Typography>
          <Box mt={2}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AccountCircle />}
            >
              Fazer login
            </Button>
          </Box>
        </Box>
        <Divider />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.subheader}
            >
              O Melhor do youtube
            </ListSubheader>
          }
        >
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Música'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Esportes'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Jogos'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Filmes'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Notícias'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Ao vivo'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Destaques'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Videos 360'}
            />
          </ListItem>
        </List>
        <Divider />
        <ListItem button classes={{ root: classes.listItem }}>
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.listItemText,
            }}
            primary={'Procurar mais'}
          />
        </ListItem>
        <Divider />
      </div>
    </>
  );
};

export default memo(Toolbar);
