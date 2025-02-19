import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Container, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

import { HeroBannerFieldsFragment } from './__generated/ctf-hero-banner.generated';

import { CtfAsset } from '@src/components/features/ctf-components/ctf-asset/ctf-asset';
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';
import { getColorConfigFromPalette, HEADER_HEIGHT_MD, HEADER_HEIGHT } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  innerIntroContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '146rem',
    padding: theme.spacing(5, 1, 2, 1),

    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(12, 15, 5, 15),
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '0rem',
      marginBottom: '0rem',
    },
  },
  innerBodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.up('lg')]: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: '3.5rem',
    },
  },
  innerBody: {
    order: 2,
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      width: 'calc(45%)',
      paddingLeft: '2.5rem',
      paddingBottom: '3.5rem',
      paddingTop: '1rem',
      textAlign: 'left',
      marginRight: '-10rem',
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: '0rem',
    },
  },
  app: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '1.5rem',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: '1.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      gap: '1rem',
    },
  },
  appIcon: {
    width: '8rem',
    [theme.breakpoints.down('md')]: {
      width: '6rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '4.5rem',
    },
  },
  appIconInner: {
    width: '2rem',
  },
  downloadLinks: {
    display: 'flex',
    flexDirection: 'row',
    width: '40rem',
    flexWrap: 'wrap',
    paddingBottom: '1rem',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      justifyContent: 'center',
      paddingBottom: '0.5rem',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      flexDirection: 'row',
    },
    [theme.breakpoints.down('sm')]: {
      // flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  downloadLinksIcon: {
    height: '4.5rem',
    paddingLeft: '0rem',
    paddingRight: '1rem',
    [theme.breakpoints.down('md')]: {
      height: '4rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '3.5rem',
    },
    [theme.breakpoints.down('lg')]: {
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
    gap: 6,
  },
  headline: {
    fontSize: '4vw',
    fontWeight: 800,
    lineHeight: 1,
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.3rem',
    },
    [theme.breakpoints.down('xl')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '0.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '5.5vw',
      paddingTop: '0rem',
    },
  },
  subTitle: {
    fontSize: '1.8rem',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  body: {
    fontWeight: 400,
    lineHeight: 1.52,
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),

    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: '1rem',
    },

    '& p': {
      fontSize: '2rem',
      [theme.breakpoints.up('xl')]: {
        fontSize: '2rem',
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

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 0,
      order: 3,
      width: 'calc(80%)',
    },
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing(3),
      paddingTop: '2rem',
      paddingBottom: '1rem',
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
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

  //////////////// AppLinks
  appLinks: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: '1rem',
    flexWrap: 'wrap',
    rowGap: '0.5rem',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
  },
  appLinksDivider: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  appLinksContainerLv1Outer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: '1rem',
    flexWrap: 'wrap',
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '1rem',
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0rem',
    },
  },
  appLinksContainerLv1: {
    width: '10rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '8rem',
    },
  },
  appLinksContainerLv2: {
    width: '8rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '6rem',
    },
  },
  appLinksIconContainerLv1: {
    width: '6rem',
    height: '6rem',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '3.5rem',
      height: '3.5rem',
    },
  },
  appLinksIconContainerLv2: {
    width: '4.2rem',
    height: '4.2rem',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '3rem',
      height: '3rem',
    },
  },
  appLinksIconLink: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  appLinksIconLv1: {
    height: '100%',
    padding: '0.5rem',
    '&:hover': {
      transform: 'scale(1.15)',
    },
  },
  appLinksIconDisabledLv1: {
    height: '100%',
    padding: '0.5rem',
    filter:
      'invert(99%) sepia(2%) saturate(175%) hue-rotate(219deg) brightness(116%) contrast(88%)',
    opacity: '0.5',
  },
  appLinksIconLv2: {
    height: '100%',
    padding: '0.5rem',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  appLinksNameDisabledLv1: {
    fontSize: '1.8rem',
    fontWeight: 500,
    color: '#BFBFBF',
  },
  appLinksNameLv1: {
    fontSize: '1.8rem',
    fontWeight: 500,
    color: '#414D63',
  },
  appLinksNameLv2: {
    width: '6rem',
    fontSize: '1.6rem',
    fontWeight: 400,
    textAlign: 'center',
    color: '#414D63',
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
    appLinks,
    subTitle,
    appIcon,
  } = props;

  // console.log('AppLinks', appLinks);

  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const inspectorMode = useContentfulInspectorMode();
  const classes = useStyles();

  function getAppLinkImgLv1(name: any, disabled = false) {
    return (
      <img
        className={disabled ? classes.appLinksIconDisabledLv1 : classes.appLinksIconLv1}
        src={`/applinks/logo_${name}.svg`}
        alt={name}
      />
    );
  }
  function getAppLinkImgLv2(name: any) {
    return (
      <img className={classes.appLinksIconLv2} src={`/applinks/logo_${name}.svg`} alt={name} />
    );
  }

  return (
    <>
      <Container
        maxWidth={false}
        style={{
          backgroundColor: colorConfig.backgroundColor,
        }}
      >
        <div className={classes.innerIntroContainer}>
          <div className={classes.innerBodyContainer}>
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
                    <CtfAsset
                      {...appIcon}
                      showDescription={false}
                      className={classes.appIconInner}
                    />
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
                {downloadLinks.map((item, index) => (
                  <a href={item.link} key={index}>
                    <img
                      className={classes.downloadLinksIcon}
                      src={'/store/' + item.store + '.svg'}
                      alt={item.alt}
                    />
                  </a>
                ))}
              </div>
              {/* <div className={classes.browserExtensionLinks}>
                {browserExtensionLinks.map(item => (
                  <a href={item.link} key={item.browser}>
                    <img
                      className={classes.browserExtensionLinksIcon}
                      src={'/browser/' + item.browser + '.svg'}
                      alt={item.alt}
                    />
                  </a>
                ))}
              </div> */}
            </div>
            {featuredImage && (
              <div
                className={classes.imageContainer}
                {...inspectorMode({
                  entryId: id,
                  fieldId: 'featuredImage',
                })}
              >
                <CtfAsset
                  {...featuredImage}
                  showDescription={false}
                  className={classes.imageInner}
                />
              </div>
            )}
          </div>
          {appLinks && (
            <div className={classes.appLinks}>
              {appLinks.map((item, index) => {
                // console.log(item);
                const platform = item.platform;
                const link = item.link;
                const links = item.links;
                const isDisabled = !item.links;
                const imgLv1 = getAppLinkImgLv1(platform, isDisabled);
                return (
                  <React.Fragment key={index}>
                    <div className={classes.appLinksContainerLv1Outer}>
                      <div className={classes.appLinksContainerLv1}>
                        <div className={classes.appLinksIconContainerLv1}>
                          {link ? (
                            <a className={classes.appLinksIconLink} href={link}>
                              {imgLv1}
                            </a>
                          ) : (
                            <div className={classes.appLinksIconLink}>{imgLv1}</div>
                          )}
                        </div>
                        <div
                          className={
                            !isDisabled ? classes.appLinksNameLv1 : classes.appLinksNameDisabledLv1
                          }
                        >
                          {platform}
                        </div>
                      </div>
                      {links &&
                        links.length > 1 &&
                        links.map((item, index) => {
                          const name = item.name;
                          const alt = item.alt;
                          const link = item.link;
                          const imgLv2 = getAppLinkImgLv2(name);
                          return (
                            <div key={index}>
                              <div className={classes.appLinksContainerLv2}>
                                <div className={classes.appLinksIconContainerLv2}>
                                  <a className={classes.appLinksIconLink} href={link}>
                                    {imgLv2}
                                  </a>
                                </div>
                                <div className={classes.appLinksNameLv2}>{alt ?? name}</div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    {index != appLinks.length - 1 && (
                      <>
                        <img src={'line_divider.svg'} alt="" className={classes.appLinksDivider} />
                      </>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
