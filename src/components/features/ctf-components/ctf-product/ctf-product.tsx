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
      padding: theme.spacing(5, 15, 5, 15),
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
      width: 'calc(50% + 2.5rem)',
      paddingLeft: '3rem',
      textAlign: 'left',
      paddingBottom: '10rem',
    },
  },
  downloadLinks: {},
  downloadLinksIcon: { paddingRight: '1rem' },
  headline: {
    fontSize: '3.2rem',
    maxWidth: '60.4rem',
    fontWeight: 800,
    lineHeight: 1.39,
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.8rem',
    },
  },
  body: {
    fontWeight: 400,
    lineHeight: 1.52,
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    maxWidth: '51rem',

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
    marginBottom: theme.spacing(10),
    order: 1,
    width: '100%',

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 0,
      order: 3,
      width: 'calc(80%)',
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
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      gap: '2rem',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  },
  featureRowReverse: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row-reverse',
      gap: '2rem',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
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
    marginLeft: 'auto',
    marginRight: 0,
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
    featuredImage,
    description,
    featuresCollection,
    downloadLinks,
    sys: { id },
  } = props;

  // console.log('xxxxxxx', downloadLinks);

  const inspectorMode = useContentfulInspectorMode();
  const classes = useStyles();

  // featuresCollection?.items.map(i => console.log(i?.featuredImage));

  return (
    <>
      <Container maxWidth={false} style={{ background: '#F4F4F4' }}>
        <div className={classes.innerIntroContainer}>
          <div className={classes.innerBody}>
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
            {downloadLinks && Object.keys(downloadLinks).length > 0 && (
              <div className={classes.downloadLinks}>
                {downloadLinks.appstore && (
                  <a href={downloadLinks.appstore}>
                    <img className={classes.downloadLinksIcon} src="/appstore.png" alt="appstore" />
                  </a>
                )}
                {downloadLinks.googleplay && (
                  <a href={downloadLinks.googleplay}>
                    <img
                      className={classes.downloadLinksIcon}
                      src="/googleplay.png"
                      alt="googleplay"
                    />
                  </a>
                )}
              </div>
            )}
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
                <Box component="dl">
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
