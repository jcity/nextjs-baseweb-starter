import { useStyletron } from 'baseui';
import { Button } from 'baseui/button';
import { Card, StyledBody } from 'baseui/card';
import { LinkProps, StyledLink } from 'baseui/link';
import { H1, H3, Paragraph1 } from 'baseui/typography';
import Head from 'next/head';

const CenteredDiv: React.FC = ({ children }: React.PropsWithChildren<Record<string, unknown>>) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: '.25rem',
      })}
    >
      {children}
    </div>
  );
};

const AlwaysBlueLink: React.FC<LinkProps> = ({ children, href }: LinkProps) => {
  const [css, theme] = useStyletron();
  return (
    <a
      className={css({
        ':hover': {
          textDecoration: 'underline',
        },
        ':visited': {
          color: theme.colors.accent,
        },
        textDecoration: 'none',
      })}
      href={href}
    >
      {children}
    </a>
  );
};

const Index: React.FC = () => {
  const [css, theme] = useStyletron();
  return (
    <div className={css({ background: theme.colors.backgroundPrimary })}>
      <Head>
        <title>Create Next App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={css({ paddingTop: '0.67em' })}>
        <CenteredDiv>
          <H1>
            Justin, welcome to <AlwaysBlueLink href="https://nextjs.org">Next.js!</AlwaysBlueLink>
          </H1>
        </CenteredDiv>

        <CenteredDiv>
          <Paragraph1>
            Get started by editing <code>pages/index.js</code>
          </Paragraph1>
        </CenteredDiv>

        <CenteredDiv>
          <Card>
            <StyledBody>
              <a className={css({ textDecoration: 'none' })} href="https://nextjs.org/docs">
                <H3>Documentation &rarr;</H3>
                <Paragraph1>Find in-depth information about Next.js features and API.</Paragraph1>
              </a>
            </StyledBody>
          </Card>
        </CenteredDiv>

        <CenteredDiv>
          <Card>
            <StyledBody>
              <a className={css({ textDecoration: 'none' })} href="https://nextjs.org/learn">
                <H3>Learn &rarr;</H3>
                <Paragraph1>Learn about Next.js in an interactive course with quizzes!</Paragraph1>
              </a>
            </StyledBody>
          </Card>
        </CenteredDiv>

        <CenteredDiv>
          <Card>
            <StyledBody>
              <a
                className={css({ textDecoration: 'none' })}
                href="https://github.com/vercel/next.js/tree/master/examples"
              >
                <H3>Examples &rarr;</H3>
                <Paragraph1>Discover and deploy boilerplate example Next.js projects.</Paragraph1>
              </a>
            </StyledBody>
          </Card>
        </CenteredDiv>

        <CenteredDiv>
          <Card>
            <StyledBody>
              <a
                className={css({ textDecoration: 'none' })}
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              >
                <H3>Deploy &rarr;</H3>
                <Paragraph1>Instantly deploy your Next.js site to a public URL with Vercel.</Paragraph1>
              </a>
            </StyledBody>
          </Card>
        </CenteredDiv>
      </main>

      <footer>
        <CenteredDiv>
          <AlwaysBlueLink
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>
              Powered by
              <img alt="Vercel Logo" className={css({ height: '1em', marginLeft: '.5rem' })} src="/vercel.svg" />
            </p>
          </AlwaysBlueLink>
        </CenteredDiv>
      </footer>
    </div>
  );
};

export default Index;
