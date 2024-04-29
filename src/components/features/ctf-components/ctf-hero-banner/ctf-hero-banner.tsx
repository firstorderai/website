import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Container, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
    padding: theme.spacing(5, 1, 5, 1),

    [theme.breakpoints.up('lg')]: {},
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 15, 12, 15),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '0rem',
      marginBottom: '0rem',
    },
  },
  innerBodyContainer: {
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: '3.5rem',
    },
  },
  innerBody: {
    order: 2,
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      width: 'calc(45%)',
      paddingLeft: '2.5rem',
      paddingBottom: '3.5rem',
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

  //////////////// AppLinks
  appLinks: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: '1rem',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
    },
  },
  appLinksDivider: {
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
  appLinksContainerLv1Outer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: '0.2rem',
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
  },
  appLinksContainerLv2: {
    width: '8rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  appLinksIconContainerLv1: {
    width: '6rem',
    height: '6rem',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  appLinksIconContainerLv2: {
    width: '4.2rem',
    height: '4.2rem',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  appLinksIconLv1: {
    height: '100%',
    padding: '0.5rem',
    '&:hover': {
      transform: 'scale(1.05)',
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
      transform: 'scale(1.05)',
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

  console.log('AppLinks', appLinks);

  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const inspectorMode = useContentfulInspectorMode();
  const classes = useStyles();

  function getAppLink(key, value: any) {
    return key == 'Android' || key == 'Windows' ? value.link : value[Object.keys(value)[0]].link;
  }

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
                {downloadLinks.map(item => (
                  <a href={item.link} key={item.store}>
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
                console.log(item);
                const platform = item.platform;
                const link = item.link;
                const links = item.links;
                const isDisabled = !item.links;
                const imgLv1 = getAppLinkImgLv1(platform, isDisabled);
                return (
                  <>
                    <div className={classes.appLinksContainerLv1Outer}>
                      <div className={classes.appLinksContainerLv1}>
                        <div className={classes.appLinksIconContainerLv1}>
                          {link ? <a href={link}>{imgLv1}</a> : <div>{imgLv1}</div>}
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
                        links.map(item => {
                          const name = item.name;
                          const alt = item.alt;
                          const link = item.link;
                          const imgLv2 = getAppLinkImgLv2(name);
                          return (
                            <>
                              <div className={classes.appLinksContainerLv2}>
                                <div className={classes.appLinksIconContainerLv2}>
                                  <a href={link}>{imgLv2}</a>
                                </div>
                                <div className={classes.appLinksNameLv2}>{alt ?? name}</div>
                              </div>
                            </>
                          );
                        })}
                    </div>
                    {index != appLinks.length - 1 && (
                      <>
                        <img src={'line_divider.svg'} alt="" className={classes.appLinksDivider} />
                      </>
                    )}
                  </>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
