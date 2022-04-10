import * as C from './styles';
import Button from '../Button/button';

export const MenuBar = () => {
  return (
    <C.Container>
      <C.TopSide>
        <C.Logo />

        <C.MenuButton>
          <C.HomeIcon />
          <span>Página Inicial</span>
        </C.MenuButton>

        <C.MenuButton>
          <C.BellIcon />
          <span>Notificações</span>
        </C.MenuButton>

        <C.MenuButton>
          <C.EmailIcon />
          <span>Mensagens</span>
        </C.MenuButton>

        <C.MenuButton>
          <C.FavoriteIcon />
          <span>Favoritados</span>
        </C.MenuButton>

        <C.MenuButton className='active'>
          <C.ProfileIcon />
          <span>Perfil</span>
        </C.MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </C.TopSide>
      <C.BotSide>
        <C.Avatar />
        <C.ProfileData>
          <strong>Lucas Wilian R. S</strong>
          <span>@lucas_wilianrs</span>
        </C.ProfileData>
        <C.ExitIcon />
      </C.BotSide>
    </C.Container>
  );
};
