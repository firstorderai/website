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
    padding: theme.spacing(5, 15, 5, 15),
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      flexDirection: 'row',
      // justifyContent: 'space-between',
    },
  },
  innerBody: {
    order: 2,
    width: '100%',
    paddingLeft: '3rem',

    [theme.breakpoints.up('md')]: {
      width: 'calc(50% + 2.5rem)',
    },
  },
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
    maxWidth: '51rem',

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
      width: 'calc(50% - 2.5rem)',
    },
  },
  imageInner: {
    maxWidth: '47rem',
  },
  innerContainer: {
    paddingTop: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '77rem',
  },
  featuresSection: {
    backgroundColor: '#FCFCFC',
    padding: theme.spacing(0, 0, 0),
  },
  featureSeparator: {
    backgroundColor: '#F4F4F4',
    height: '2px',
    '&:first-child': {
      display: 'none',
    },
  },
  featureRow: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
    },
    '&:not(:nth-child(2))': {
      marginTop: theme.spacing(5),
    },
    marginBottom: theme.spacing(5),
  },
  featureRowReverse: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
    '&:not(:nth-child(2))': {
      marginTop: theme.spacing(5),
    },
    marginBottom: theme.spacing(5),
  },
  featureRowLeft: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      flexShrink: 0,
      // marginBottom: theme.spacing(0),
      marginRight: theme.spacing(2),
      width: '10rem',
    },
  },
  featureRowLeftReverse: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      flexShrink: 0,
      // marginBottom: theme.spacing(0),
      marginLeft: theme.spacing(2),
      width: '10rem',
    },
    textAlign: 'right',
  },
  featureName: {
    // marginBottom: theme.spacing(0),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    color: '#414D63',
    fontWeight: 800,
    [theme.breakpoints.up('md')]: {
      flexGrow: 0,
      flexShrink: 0,
      // marginBottom: theme.spacing(0),
      // marginRight: theme.spacing(10),
      width: 'auto',
    },
  },
  featureValue: {
    [theme.breakpoints.up('md')]: {
      flexGrow: 0,
      flexShrink: 0,
      // width: '50rem',
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
}));

export const CtfProduct = (props: ProductFieldsFragment) => {
  const {
    name,
    featuredImage,
    description,
    featuresCollection,
    sys: { id },
  } = props;

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
                            {item.featuredImage && (
                              <Image
                                src={item.featuredImage.url as string}
                                alt={item.featuredImage.description || ''}
                                width={item.featuredImage.width as number}
                                height={item.featuredImage.height as number}
                                quality={60}
                                loader={contentfulLoader}
                                // sizes="(min-width: 355px) 355px, 98vw"
                              />
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
