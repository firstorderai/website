import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { Theme, Container, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image, { ImageLoader } from 'next/image';
import queryString from 'query-string';
import { Fragment } from 'react';

import { ProductFieldsFragment } from './__generated/ctf-product.generated';

import { CtfAsset } from '@src/components/features/ctf-components/ctf-asset/ctf-asset';
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import LayoutContext, { defaultLayout } from '@src/layout-context';

const contentfulLoader: ImageLoader = ({ src, width, quality }) => {
  const params: Record<string, string | number> = {};

  if (width) {
    params.w = width;
  }

  if (quality) {
    params.q = quality;
  }

  return queryString.stringifyUrl({ url: src, query: params });
};

const useStyles = makeStyles((theme: Theme) => ({
  innerIntroContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '146rem',
    padding: theme.spacing(5, 1, 5, 1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10, 15, 10, 15),
      alignItems: 'center',
      flexDirection: 'row',
      // justifyContent: 'space-between',
    },
  },
  innerBody: {
    order: 2,
    width: '100%',
    textAlign: 'center',

    [theme.breakpoints.up('md')]: {
      width: 'calc(40%)',
      paddingLeft: '2.5rem',
      paddingBottom: '10rem',
      paddingTop: '1rem',
      textAlign: 'left',
      marginRight: '-10rem',
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
    paddingBottom: '1.5rem',
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
    width: '3rem',
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
      fontSize: '3.8rem',
      maxWidth: '60.4rem',
    },
    [theme.breakpoints.down('xl')]: {
      // width: '100%',
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
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(5),

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

export const CtfProduct = (props: ProductFieldsFragment) => {
  const {
    name,
    subTitle,
    featuredImage,
    appIcon,
    description,
    featuresCollection,
    downloadLinks,
    browserExtensionLinks,
    sys: { id },
  } = props;

  // console.log('xxxxxxx', appIcon);

  const inspectorMode = useContentfulInspectorMode();
  const classes = useStyles();

  // featuresCollection?.items.map(i => console.log(i?.featuredImage));

  return (
    <>
      <Container maxWidth={false} style={{ background: '#F4F4F4' }}>
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
      {featuresCollection && featuresCollection.items.length > 0 && (
        <LayoutContext.Provider value={{ ...defaultLayout, parent: 'product-table' }}>
          <section className={classes.featuresSection}>
            <Container maxWidth={false}>
              <div className={classes.innerContainer}>
                <Box component="dl" className={classes.innerBox}>
                  {featuresCollection.items.map(
                    (item, i) =>
                      item && (
                        <Fragment key={item.sys.id}>
                          <div className={classes.featureSeparator} />
                          <div
                            className={i % 2 == 0 ? classes.featureRow : classes.featureRowReverse}
                          >
                            <div
                              className={
                                i % 2 == 0 ? classes.featureRowLeft : classes.featureRowLeftReverse
                              }
                            >
                              <div
                                className={
                                  i % 2 == 0 ? classes.featureText : classes.featureTextReverse
                                }
                              >
                                <Typography
                                  variant="h3"
                                  component="dt"
                                  className={classes.featureName}
                                  {...inspectorMode({
                                    entryId: item.sys.id,
                                    fieldId: 'name',
                                  })}
                                >
                                  {item.name}
                                </Typography>
                                <Box component="dd" margin={0} className={classes.featureValue}>
                                  {item.longDescription && (
                                    <div
                                      {...inspectorMode({
                                        entryId: item.sys.id,
                                        fieldId: 'longDescription',
                                      })}
                                    >
                                      <CtfRichtext {...item.longDescription} />
                                    </div>
                                  )}
                                </Box>
                              </div>
                            </div>
                            {item.featuredImage && (
                              <div className={classes.featureImage}>
                                <Image
                                  src={item.featuredImage.url as string}
                                  alt={item.featuredImage.description || ''}
                                  width={item.featuredImage.width as number}
                                  height={item.featuredImage.height as number}
                                  // quality={60}
                                  loader={contentfulLoader}
                                  // sizes="(min-width: 355px) 355px, 98vw"
                                />
                              </div>
                            )}
                          </div>
                        </Fragment>
                      ),
                  )}
                </Box>
              </div>
            </Container>
          </section>
        </LayoutContext.Provider>
      )}
    </>
  );
};
