import * as C from './styles';
import StickyBox from 'react-sticky-box';
import List from '../List/list';
import FollowSuggestion from '../FollowSuggestion/followsuggestion';
import News from '../News/news';

export const SideBar = () => {
  return (
    <C.Container>
      <C.SearchWrapper>
        <C.SearchInput placeholder='Buscar no Twitter' />
        <C.SearchIcon />
      </C.SearchWrapper>
      <StickyBox>
        <C.Body>
          <List
            title='Talvez você curta'
            elements={[
              <FollowSuggestion name='Teste User' nickname='@teste__user' />,
              <FollowSuggestion name='Teste User' nickname='@teste__user' />,
              <FollowSuggestion name='Teste User' nickname='@teste__user' />,
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[<News />, <News />, <News />]}
          />

          <List
            title='Talvez você curta'
            elements={[<News />, <News />, <News />]}
          />

          <List
            title='Talvez você curta'
            elements={[<News />, <News />, <News />]}
          />
        </C.Body>
      </StickyBox>
    </C.Container>
  );
};
