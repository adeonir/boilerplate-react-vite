import { Heading } from '~/components/Heading'

import * as S from './About.styles'

export function About() {
  return (
    <S.Page>
      <Heading align="center">About Page</Heading>
      <Heading as="h2" align="center">
        This is the about page description
      </Heading>

      <S.Container>
        <p>
          Recusandae saepe exercitationem, debitis iste in hic enim autem atque assumenda expedita! Est explicabo, earum
          ea rerum nostrum mollitia ipsam natus? Delectus consequatur ut iusto neque itaque quidem unde architecto?
        </p>
        <blockquote>
          Laborum, modi tempora! Vero ducimus temporibus assumenda voluptatem deleniti veniam excepturi reiciendis? Quis
          alias qui nam, temporibus illum accusantium officiis perspiciatis possimus quas quaerat esse velit ipsa
          voluptatum ducimus laboriosam?
        </blockquote>
      </S.Container>
    </S.Page>
  )
}
