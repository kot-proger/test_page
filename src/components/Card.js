import './CardStyle.css';
import React from "react";
import {Card, CardMedia, CardContent, Typography, CardActions, IconButton, Icon} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

function CstmCard({
  id,
  handleDelete,
  image,
  filesize,
  timestamp,
  category
}) {

  return (
    <Card className={'cstm-card'}>
      <CardActions className={'card-actions'}>
        <IconButton variant={'outlined'} aria-label={'close-card'} onClick={() => handleDelete(id)}>
          <CloseIcon/>
        </IconButton>
      </CardActions>
      <CardMedia
        className={'card-media'}
        component={'img'}
        alt={category}
        image={'http://contest.elecard.ru/frontend_data/' + image}
      />
      <CardContent>
        <Typography className={'card-text'}>Yep, just some simple content ecapsulated on a card</Typography>
        <Typography className={'card-text'}>Category: {category}</Typography>
      </CardContent>
    </Card>
  );
}

export default CstmCard;