import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Container, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { useMemo } from 'react';

import { HeroBannerFieldsFragment } from './__generated/ctf-hero-banner.generated';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import { PageLink } from '@src/components/features/page-link';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { getColorConfigFromPalette, HEADER_HEIGHT_MD, HEADER_HEIGHT } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      paddingTop: '2.5rem',
      paddingBottom: '2.5rem',
    },
  },

  fullScreen: {
    minHeight: `calc(100vh - ${HEADER_HEIGHT_MD})`,
    [theme.breakpoints.up('md')]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT})`,
    },
    '@media (min-height: 91.2em)': {
      minHeight: '91.2rem',
    },
  },

  innerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '125.8rem',
    minHeight: '30rem',
    '@media (min-height: 91.2em)': {
      padding: theme.spacing(39, 0, 39),
    },
    [theme.breakpoints.up('md')]: {
      width: '90%',
      padding: theme.spacing(17.4, 0, 50),
      position: 'relative',
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3, 0, 3),
      position: 'relative',
      textAlign: 'center',
    },
  },

  partialBgContainer: {
    // display: 'none',
    height: '100%',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '170rem',
      left: '45%',
      transform: 'translateX(-50%)',
      position: 'absolute',
      display: 'block',
    },
    [theme.breakpoints.down('md')]: {},
  },

  partialBg: {
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    minHeight: '21.8rem',
    [theme.breakpoints.up('md')]: {
      width: '55%',
      position: 'absolute',
      right: 60,
      top: 0,
    },
    [theme.breakpoints.down('md')]: {
      paddingRight: '2rem',
      paddingLeft: '2rem',
    },
  },

  downloadLinks: {},
  downloadLinksIcon: { paddingRight: '1rem' },

  headline: {
    fontSize: '3.2rem',
    fontWeight: 800,
    lineHeight: 1.08,
    maxWidth: '44rem',
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.8rem',
    },
  },

  body: {
    fontWeight: 400,
    lineHeight: 1.56,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    maxWidth: '45rem',
    '& p': {
      fontSize: '2.2rem',
      [theme.breakpoints.up('xl')]: {
        fontSize: '2.2rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
      },
    },
  },
  ctaContainer: {
    marginTop: theme.spacing(6),
  },
}));

export const CtfHeroBanner = (props: HeroBannerFieldsFragment) => {
  const {
    image,
    imageStyle: imageStyleBoolean,
    headline,
    // Tutorial: uncomment the line below to make the Greeting field available to render
    // greeting,
    bodyText,
    ctaText,
    targetPage,
    colorPalette,
    sys: { id },
    heroSize: heroSizeBoolean,
    downloadLinks,
  } = props;
  const layout = useLayoutContext();

  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const imageStyle = imageStyleBoolean ? 'partial' : 'full';
  const heroSize =
    heroSizeBoolean === null || heroSizeBoolean === true ? 'full_screen' : 'fixed_height';
  const backgroundImage = useMemo(
    () =>
      image
        ? `${image.url}?w=${imageStyle === 'partial' ? 767 * 2 : layout.containerWidth * 2}`
        : undefined,
    [image, imageStyle, layout.containerWidth],
  );
  const classes = useStyles();
  const inspectorMode = useContentfulInspectorMode({ entryId: id });

  return (
    <Container
      maxWidth={false}
      className={clsx(classes.root, heroSize === 'full_screen' ? classes.fullScreen : null)}
      {...inspectorMode({ fieldId: 'image' })}
      style={{
        backgroundImage:
          imageStyle === 'full' && backgroundImage ? `url(${backgroundImage!})` : undefined,
        backgroundColor: colorConfig.backgroundColor,
      }}
    >
      {imageStyle === 'partial' && backgroundImage && (
        <div className={classes.partialBgContainer}>
          <div
            className={classes.partialBg}
            style={{
              backgroundImage: `url(${backgroundImage!})`,
            }}
          />
        </div>
      )}
      <div className={classes.innerContainer}>
        {/* Tutorial: uncomment this block to render the Greeting field value
        {greeting && (
          <Typography>
            {greeting}
          </Typography>
        )}
        */}
        {headline && (
          <Typography
            variant="h1"
            className={classes.headline}
            style={{ color: colorConfig.headlineColor }}
            {...inspectorMode({ fieldId: 'headline' })}
          >
            {headline}
          </Typography>
        )}
        {bodyText && (
          <LayoutContext.Provider value={{ ...defaultLayout, parent: 'hero-banner-body' }}>
            <div
              style={{ color: colorConfig.textColor }}
              {...inspectorMode({ fieldId: 'bodyText' })}
            >
              <CtfRichtext {...bodyText} className={classes.body} />
            </div>
          </LayoutContext.Provider>
        )}
        {downloadLinks && Object.keys(downloadLinks).length > 0 && (
          <div className={classes.downloadLinks}>
            {downloadLinks.appstore && (
              <a href={downloadLinks.appstore}>
                <img className={classes.downloadLinksIcon} src="/appstore.png" alt="appstore" />
              </a>
            )}
            {downloadLinks.googleplay && (
              <a href={downloadLinks.googleplay}>
                <img className={classes.downloadLinksIcon} src="/googleplay.png" alt="googleplay" />
              </a>
            )}
          </div>
        )}
        {targetPage && ctaText && (
          <div className={classes.ctaContainer}>
            <PageLink
              page={targetPage}
              variant="contained"
              color={colorConfig.buttonColor}
              isButton
            >
              {ctaText}
            </PageLink>
          </div>
        )}
      </div>
    </Container>
  );
};
