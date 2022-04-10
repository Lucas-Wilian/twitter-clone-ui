import React from 'react';
import * as C from './styles';

export const Tweet = () => {
  return (
    <C.Container>
      <C.Retweeted>
        <C.RocketseatIcon />
        Você retweetou
      </C.Retweeted>
      <C.Body>
        <C.Avatar />
        <C.Content>
          <C.Header>
            <strong>BLANK</strong>
            <span>@blank_corp</span>
            <C.Dot />
            <time>10 de abr</time>
          </C.Header>
          <C.Description>Apenas faça acontecer 💯💥</C.Description>
          <C.ImageContent />
          <C.Icons>
            <C.Status>
              <C.CommentIcon /> 10
            </C.Status>
            <C.Status>
              <C.RetweetIcon /> 10
            </C.Status>
            <C.Status>
              <C.LikeIcon /> 89
            </C.Status>
          </C.Icons>
        </C.Content>
      </C.Body>
    </C.Container>
  );
};
