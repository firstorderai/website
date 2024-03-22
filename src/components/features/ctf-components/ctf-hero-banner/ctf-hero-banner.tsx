import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Container, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { useMemo } from 'react';

import { HeroBannerFieldsFragment } from './__generated/ctf-hero-banner.generated';

import { CtfAsset } from '@src/components/features/ctf-components/ctf-asset/ctf-asset';
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import { PageLink } from '@src/components/features/page-link';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { getColorConfigFromPalette, HEADER_HEIGHT_MD, HEADER_HEIGHT } from '@src/theme';

const useStylesOld = makeStyles((theme: Theme) => ({
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
    // minHeight: '30rem',
    '@media (min-height: 91.2em)': {
      padding: theme.spacing(39, 0, 39),
    },
    [theme.breakpoints.up('md')]: {
      width: '90%',
      padding: theme.spacing(17.4, 0, 50),
      position: 'relative',
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3, 0, 0),
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

  downloadLinks: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      paddingBottom: '0.5rem',
    },
  },
  downloadLinksIcon: {
    width: '17rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  browserExtensionLinks: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '0.5rem',
    },
  },
  browserExtensionLinksIcon: {
    width: '3rem',
    filter: 'drop-shadow(2px 1px 1px grey);',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },

  headline: {
    fontSize: '3.2rem',
    fontWeight: 800,
    lineHeight: 1.39,
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.2rem',
      maxWidth: '60.4rem',
    },
    [theme.breakpoints.down('xl')]: {
      width: '100%',
    },
  },

  body: {
    fontWeight: 400,
    lineHeight: 1.56,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(7),
      marginBottom: theme.spacing(7),
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

const useStyles = makeStyles((theme: Theme) => ({
  innerIntroContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '146rem',
    padding: theme.spacing(5, 1, 5, 1),

    [theme.breakpoints.up('lg')]: {
      // marginTop: '8rem',
      // marginBottom: '8rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 15, 12, 15),
      alignItems: 'center',
      flexDirection: 'row',
      // marginTop: '5rem',
      // marginBottom: '5rem',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '0rem',
      marginBottom: '0rem',
    },
  },
  innerBody: {
    order: 2,
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      width: 'calc(45%)',
      paddingLeft: '2.5rem',
      paddingBottom: '10rem',
      paddingTop: '1rem',
      textAlign: 'left',
      marginRight: '-10rem',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '0rem',
    },
  },
  app: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '1.5rem',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  appIcon: {
    width: '8rem',
    [theme.breakpoints.down('md')]: {
      width: '6rem',
    },
  },
  appIconInner: {
    width: '2rem',
  },
  downloadLinks: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      paddingBottom: '0.5rem',
    },
  },
  downloadLinksIcon: {
    height: '4.5rem',
    paddingLeft: '0rem',
    paddingRight: '1rem',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
    },
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  browserExtensionLinks: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '0.5rem',
    },
  },
  browserExtensionLinksIcon: {
    width: '3.5rem',
    filter: 'drop-shadow(2px 1px 1px grey);',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  headlineContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  headline: {
    fontSize: '3rem',
    fontWeight: 800,
    lineHeight: 1,
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.3rem',
    },
    [theme.breakpoints.down('xl')]: {
      fontSize: '2.8rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
  },
  subTitle: {
    fontSize: '1.8rem',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  body: {
    fontWeight: 400,
    lineHeight: 1.52,
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),

    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },

    '& p': {
      fontSize: '2rem',
      [theme.breakpoints.up('xl')]: {
        fontSize: '2.2rem',
        fontWeight: 400,
        lineHeight: 1.56,
        maxWidth: '51rem',
      },
    },
  },
  ctaContainer: {
    marginTop: theme.spacing(8),
    '& svg.MuiSvgIcon-root': {
      fontSize: 'inherit',
    },
  },
  imageContainer: {
    order: 1,
    width: '100%',

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 0,
      order: 3,
      width: 'calc(80%)',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(3),
    },
  },
  imageInner: {
    maxWidth: '47rem',
  },
  innerContainer: {
    paddingTop: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '77rem',
  },
  innerBox: {
    margin: 0,
  },
  featuresSection: {
    backgroundColor: '#FCFCFC',
    padding: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 0, 0),
    },
  },
  featureSeparator: {
    backgroundColor: '#F4F4F4',
    height: '2px',
    '&:first-child': {
      display: 'none',
    },
  },
  featureRow: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      gap: '2rem',
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
  featureRowReverse: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row-reverse',
      gap: '2rem',
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
  featureRowLeft: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      width: '65%',
      flexGrow: 1,
      flexShrink: 0,
    },
  },
  featureRowLeftReverse: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      width: '65%',
      flexGrow: 1,
      flexShrink: 0,
      textAlign: 'right',
    },
  },
  featureText: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  featureTextReverse: {
    marginRight: 'auto',
    marginLeft: 0,
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
      marginRight: 0,
    },
  },
  featureName: {
    // paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    color: '#414D63',
    fontWeight: 800,
    [theme.breakpoints.up('md')]: {
      flexGrow: 0,
      flexShrink: 0,
      width: 'auto',
    },
  },
  featureValue: {
    [theme.breakpoints.up('md')]: {
      flexGrow: 0,
      flexShrink: 0,
    },
    '& .MuiTypography-body1': {
      fontSize: '1.8rem',
      fontWeight: 400,
      color: '#414D63',
    },
    '& > div:last-child': {
      // marginBottom: theme.spacing(0),
    },
  },
  featureImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}));

export const CtfHeroBanner = (props: HeroBannerFieldsFragment) => {
  const {
    image: featuredImage,
    imageStyle: imageStyleBoolean,
    headline: name,
    // Tutorial: uncomment the line below to make the Greeting field available to render
    // greeting,
    bodyText: description,
    ctaText,
    targetPage,
    colorPalette,
    sys: { id },
    heroSize: heroSizeBoolean,
    downloadLinks,
    browserExtensionLinks,
    subTitle,
    appIcon,
  } = props;

  // console.log('xxxxxxx', downloadLinks);

  const colorConfig = getColorConfigFromPalette(colorPalette || '');

  const inspectorMode = useContentfulInspectorMode();
  const classes = useStyles();

  // featuresCollection?.items.map(i => console.log(i?.featuredImage));

  return (
    <>
      <Container
        maxWidth={false}
        style={{
          backgroundColor: colorConfig.backgroundColor,
        }}
      >
        <div className={classes.innerIntroContainer}>
          <div className={classes.innerBody}>
            <div className={classes.app}>
              {appIcon && (
                <div
                  className={classes.appIcon}
                  {...inspectorMode({
                    entryId: id,
                    fieldId: 'appIcon',
                  })}
                >
                  <CtfAsset {...appIcon} showDescription={false} className={classes.appIconInner} />
                </div>
              )}
              <div className={classes.headlineContainer}>
                {name && (
                  <Typography
                    variant="h1"
                    component="h2"
                    className={classes.headline}
                    {...inspectorMode({ entryId: id, fieldId: 'name' })}
                  >
                    {name}
                  </Typography>
                )}
                {subTitle && (
                  <Typography
                    // variant="h1"
                    // component="h2"
                    className={classes.subTitle}
                    {...inspectorMode({ entryId: id, fieldId: 'subTitle' })}
                  >
                    {subTitle}
                  </Typography>
                )}
              </div>
            </div>
            {description && (
              <LayoutContext.Provider value={{ ...defaultLayout, parent: 'product-description' }}>
                <div
                  {...inspectorMode({
                    entryId: id,
                    fieldId: 'description',
                  })}
                >
                  <CtfRichtext {...description} className={classes.body} />
                </div>
              </LayoutContext.Provider>
            )}
            <div className={classes.downloadLinks}>
              {downloadLinks.map(item => (
                <a href={item.link} key={item.store}>
                  <img
                    className={classes.downloadLinksIcon}
                    src={'/store/' + item.store + '.svg'}
                    alt={item.store}
                  />
                </a>
              ))}
            </div>
            <div className={classes.browserExtensionLinks}>
              {browserExtensionLinks.map(item => (
                <a href={item.link} key={item.browser}>
                  <img
                    className={classes.browserExtensionLinksIcon}
                    src={'/browser/' + item.browser + '.svg'}
                    alt={item.browser}
                  />
                </a>
              ))}
            </div>
          </div>
          {featuredImage && (
            <div
              className={classes.imageContainer}
              {...inspectorMode({
                entryId: id,
                fieldId: 'featuredImage',
              })}
            >
              <CtfAsset {...featuredImage} showDescription={false} className={classes.imageInner} />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export const CtfHeroBannerOld = (props: HeroBannerFieldsFragment) => {
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
    browserExtensionLinks,
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
  const classes = useStylesOld();
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
        <div className={classes.downloadLinks}>
          {downloadLinks.map(item => (
            <a href={item.link} key={item.store}>
              <img
                className={classes.downloadLinksIcon}
                src={'/store/' + item.store + '.svg'}
                alt={item.store}
              />
            </a>
          ))}
        </div>
        <div className={classes.browserExtensionLinks}>
          {browserExtensionLinks.map(item => (
            <a href={item.link} key={item.browser}>
              <img
                className={classes.browserExtensionLinksIcon}
                src={'/browser/' + item.browser + '.svg'}
                alt={item.browser}
              />
            </a>
          ))}
        </div>
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
