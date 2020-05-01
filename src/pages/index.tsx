import React from 'react';
import { Box } from '@material-ui/core';
import BaseLayout from '../layouts/Base';
import Image from '../components/shared/ui/Image'
import { CAT_IMAGE } from '../constants/images';
import { makeStyles } from '@material-ui/styles';

const  Main = () => { 
  const classes = useStyle();

  return (
    <BaseLayout pageTitle="Cats Website">
      <Box className={classes.welcome}>
        Welcome to Cats website!
        <Image src={CAT_IMAGE} width="100%" height="100%" className={classes.img} />
      </Box>
      <Box>

      </Box>
    </BaseLayout>
  );
}

const useStyle = makeStyles({
  welcome: {
    position: 'relative',
    minHeight: '50vh',
    maxHeight: '50vh',
    overflow: 'hidden',
    color: '#fff'
  },
  img: {
    maxWidth: 1024,
    height: '100%',
    objectFit: 'cover',
  },
});

export default Main;
