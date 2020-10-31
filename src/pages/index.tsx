import { useStyletron } from 'baseui';
import { Card, StyledBody } from 'baseui/card';
import { Grid, Cell } from 'baseui/layout-grid';
import { LinkProps } from 'baseui/link';
import { H1, H3, Paragraph1 } from 'baseui/typography';
import Head from 'next/head';

const CenteredDiv: React.FC = ({ children }: React.PropsWithChildren<Record<string, unknown>>) => {
  const [css] = useStyletron();
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

interface LinkSectionProps {
  headingText: string;
  hrefLink: string;
  paragraphText: string;
}
const LinkSection = ({ headingText, hrefLink, paragraphText }: LinkSectionProps) => {
  const [css] = useStyletron();
  return (
    <Card>
      <StyledBody>
        <a className={css({ textDecoration: 'none' })} href={hrefLink}>
          <H3>{headingText} &rarr;</H3>
          <Paragraph1>{paragraphText}</Paragraph1>
        </a>
      </StyledBody>
    </Card>
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
        <Grid
          overrides={{
            Grid: {
              style: {
                marginTop: '5em',
                textAlign: 'center',
              },
            },
          }}
        >
          <Cell skip={2} span={8}>
            <H1>
              Welcome to <AlwaysBlueLink href="https://nextjs.org">Next.js</AlwaysBlueLink> and{' '}
              <AlwaysBlueLink href="https://baseweb.design/">Base Web!</AlwaysBlueLink>
            </H1>
          </Cell>

          <Cell skip={3} span={6}>
            <Paragraph1>
              Get started by editing <code>pages/index.js</code>
            </Paragraph1>
          </Cell>
        </Grid>

        <Grid
          overrides={{
            Grid: {
              style: {
                marginBottom: '2em',
                marginTop: '5em',
              },
            },
          }}
        >
          <Cell skip={2} span={4}>
            <LinkSection
              headingText="Documentation"
              hrefLink="https://nextjs.org/docs"
              paragraphText="Find in-depth information about Next.js features and API."
            />
          </Cell>

          <Cell span={4}>
            <LinkSection
              headingText="Learn"
              hrefLink="https://nextjs.org/learn"
              paragraphText="Learn about Next.js in an interactive course with quizzes!"
            />
          </Cell>
        </Grid>

        <Grid
          overrides={{
            Grid: {
              style: {
                marginBottom: '8em',
              },
            },
          }}
        >
          <Cell skip={2} span={4}>
            <LinkSection
              headingText="Examples"
              hrefLink="https://github.com/vercel/next.js/tree/master/examples"
              paragraphText="Discover and deploy boilerplate example Next.js projects."
            />
          </Cell>
          <Cell span={4}>
            <LinkSection
              headingText="Deploy"
              hrefLink="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              paragraphText="Instantly deploy your Next.js site to a public URL with Vercel."
            />
          </Cell>
        </Grid>
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
