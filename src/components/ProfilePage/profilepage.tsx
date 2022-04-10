import * as C from './styles';
import { Feed } from '../../components/Feed/feed';

export const ProfilePage = () => {
  return (
    <C.Container>
      <C.Banner>
        <C.Avatar />
      </C.Banner>
      <C.ProfileData>
        <C.EditButton outlined>Editar Perfil</C.EditButton>
        <h1>Lucas Wilian R. S</h1>
        <h2>@lucas_wilianrs</h2>
        <p>
          Developer at <a href='#'>@blank_corp</a>
        </p>
        <ul>
          <li>
            <C.LocationIcon />
            Saint Peter the Water White, Brazil{' '}
          </li>
          <li>
            <C.CakeIcon />
            Nascido(a) em 26 de abril de 2001
          </li>
        </ul>
        <C.Followage>
          <span>
            seguindo <strong>90</strong>
          </span>
          <span>
            <strong>26</strong> seguidores
          </span>
        </C.Followage>
      </C.ProfileData>
      <Feed />
    </C.Container>
  );
};
