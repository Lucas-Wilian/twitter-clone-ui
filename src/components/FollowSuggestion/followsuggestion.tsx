import React from 'react';
import * as C from './styles';

interface Props {
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname }) => {
  return (
    <C.Container>
      <div>
        <C.Avatar />
        <C.Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </C.Info>
      </div>
      <C.FollowButton outlined>Seguir</C.FollowButton>
    </C.Container>
  );
};

export default FollowSuggestion;
