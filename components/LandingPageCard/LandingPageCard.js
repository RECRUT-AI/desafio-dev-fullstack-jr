import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';
import styles from './LandingPageCard.module.scss';

const LandingPageCard = ({ title, text, subText, href}) => {
  return (
    <Card sx={{ minWidth: 275 }} className={styles.LandingPageCard}>
      <CardActionArea>
        <Link href={href || '/'} passHref>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2">
              {text}
              <br />
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {subText}
              </Typography>
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default LandingPageCard;
