import { Title } from '~/components/Title'

import * as S from './About.styles'

export function About() {
  return (
    <S.Page>
      <Title align="center">About</Title>

      <S.Container>
        <p>
          Recusandae saepe exercitationem, debitis iste in hic enim autem atque
          assumenda expedita! Est explicabo, earum ea rerum nostrum mollitia
          ipsam natus? Delectus consequatur ut iusto neque itaque quidem unde
          architecto?
        </p>
        <blockquote>
          Laborum, modi tempora! Vero ducimus temporibus assumenda voluptatem
          deleniti veniam excepturi reiciendis? Quis alias qui nam, temporibus
          illum accusantium officiis perspiciatis possimus quas quaerat esse
          velit ipsa voluptatum ducimus laboriosam?
        </blockquote>
      </S.Container>
    </S.Page>
  )
}
