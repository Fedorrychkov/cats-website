import React from 'react';
import { makeStyles } from '@material-ui/core';

interface Props {
  src: any;
  width?: any;
  height?: any;
  className?: any;
}

const Image = ({ src, width = 48, height = 48, className, ...props }: Props) => {
  const classes = useStyles();
  const Icon = src;
  return (
    <Icon {...props} width={width} height={height} className={[`${classes.image} ${className}`]} />
  );
};

const useStyles = makeStyles({
  image: {
    width: '100%',
    maxWidth: 48
  },
});

export default Image;
