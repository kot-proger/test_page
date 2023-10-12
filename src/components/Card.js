import './CardStyle.css';
import React from "react";
import {useState} from "react";
import {Card, CardMedia, CardContent, Typography, Button, CardActions} from "@material-ui/core";

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
          <Button onClick={() => handleDelete(id)}>
            Close
          </Button>
        </CardActions>
        <CardMedia
          className={'card-media'}
          component={'img'}
          alt={category}
          image={'http://contest.elecard.ru/frontend_data/' + image}
        />
        <CardContent>
          <Typography className={'card-text'}>Yep, just some simple content ecapsulated on a card</Typography>
        </CardContent>
      </Card>
    );
}

export default CstmCard;