import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Facebook from '@mui/icons-material/Facebook';
// import Instagram from '@mui/icons-material/Instagram';
// import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import { Theme, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'next-i18next';

import { FooterFieldsFragment } from './__generated/ctf-footer.generated';

import {
  getLinkDisplayText,
  getLinkHrefPrefix,
} from '@src/components/features/ctf-components/ctf-navigation/utils';
import { LanguageSelector } from '@src/components/features/language-selector';
import { Link } from '@src/components/shared/link';
import { useContentfulContext } from '@src/contentful-context';
// import Logo from '@src/icons/logo-tagline.svg';
import { CONTAINER_WIDTH } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  footerContainer: {
    backgroundColor: '#F4F4F4',
  },
  footerWrapper: {
    '@media (min-width: 600px)': {
      paddingLeft: '30px',
      paddingRight: '30px',
    },
    '@media (min-width: 1280px)': {
      paddingLeft: '75px',
      paddingRight: '75px',
    },
  },
  footer: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexWrap: 'wrap',
    maxWidth: `${CONTAINER_WIDTH / 10}rem`,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(6),
    },
  },
  menuWrapper: {
    alignItems: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      gap: '2rem',
    },
  },
  menuColumn: {
    [theme.breakpoints.up('sm')]: {
      paddingRight: '40px',
    },
  },
  menu: {
    listStyle: 'none',
    margin: theme.spacing(0, 0, 8),
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      width: '17.2rem',
    },
    marginBottom: 0,
  },
  menuItem: {
    fontSize: '2rem',
    fontWeight: 420,
    lineHeight: 1.2,
    color: '#1B273A',
    marginTop: 0,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(5),
    },
  },
  menuItemLink: {
    fontSize: '1.8rem',
    lineHeight: 1.2,
    color: '#1B273A',
    marginTop: 0,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },
  },
  submenu: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& $menuItem': {
      fontWeight: 400,
    },
  },
  submenuItem: {
    '& a': {
      borderBottom: '1px solid transparent',
      color: '#414D63',
      display: 'inline-block',
      minWidth: 0,
      transition: 'border-bottom-color 0.2s ease-in-out',
    },

    '&:hover, &:focus, &:focus-within': {
      '& > a': {
        borderBottomColor: '#7C7C7C',
      },
    },
  },
  footerEndSection: {
    marginLeft: 'auto',
  },
  footerCorporateContainer: {
    backgroundColor: '#212121',
    color: '#fff',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderStyle: 'solid',
    border: 0,
    borderTop: '1px',
    borderColor: '#F4F4F4',
  },
  footerCorporateWrapper: {
    '@media (min-width: 600px)': {
      paddingLeft: '30px',
      paddingRight: '30px',
    },
    '@media (min-width: 1280px)': {
      paddingLeft: '75px',
      paddingRight: '75px',
    },
  },
  footerCorporate: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: `${CONTAINER_WIDTH / 10}rem`,
  },
  storeLogos: {
    marginTop: theme.spacing(7),
  },
  storeLogo: {
    display: 'block',
    maxWidth: '11.5rem',
    '& + &': {
      marginTop: theme.spacing(5),
    },
    '& img': {
      display: 'block',
      maxWidth: '100%',
    },
  },
  corporateLogoMenu: {
    display: 'flex',
    alignItems: 'center',
    maxHeight: '4rem',
    maxWidth: '100%',
    gap: '8rem',
  },
  corporateLogoContainer: {
    display: 'flex',
    flexGrow: 1,
    maxWidth: '100%',
    // [theme.breakpoints.down('sm')]: {
    //   maxWidth: '50%',
    // },
  },
  corporateLogo: {
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '180px',
    },
    // path: {
    //   fill: 'black',
    // },
    // '@media (prefers-color-scheme: dark)': {
    //   path: {
    //     fill: 'white',
    //   },
    // },
  },
  copyrightAndLegal: {
    display: 'flex',
    flexGrow: 0,
    flexShrink: 0,
  },
  copyright: {
    textAlign: 'right',
    fontSize: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
  legalMenuWrapper: {},
  legalMenu: {
    listStyle: 'none',
    margin: theme.spacing(5, 0, 0),
    padding: 0,
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 0,
    },
  },
  legalMenuItem: {
    fontSize: '2rem',
    marginTop: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      width: 'auto',
    },
    '&:not(:last-child)': {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(8),
      },
    },
    '& a': {
      borderBottom: '1px solid transparent',
      color: '#fff',
      display: 'inline-block',
      transition: 'border-bottom-color 0.2s ease-in-out',
    },

    '&:hover, &:focus, &:focus-within': {
      '& > a': {
        borderBottomColor: '#000',
      },
    },
  },
  socialDisclaimer: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginTop: theme.spacing(7),
    },
  },
  socialWrapper: {
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      marginLeft: theme.spacing(100),
      // width: '38.4rem',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
  },
  socialTitle: {
    fontSize: '1.8rem',
    fontWeight: 400,
    lineHeight: 1.2,
    marginTop: theme.spacing(1),
  },
  social: {
    display: 'flex',
    flexWrap: 'wrap',
    // marginTop: theme.spacing(6),
    marginLeft: theme.spacing(6),
    '& a': {
      color: 'inherit',
      display: 'inline-block',
      lineHeight: 1.2,

      '&:not(:first-child)': {
        marginLeft: theme.spacing(6),
      },
    },
    '& .MuiSvgIcon-root': {
      fontSize: '3.2rem',
    },
  },
}));

export const CtfFooter = (props: FooterFieldsFragment) => {
  const footerContent = props.items[0];

  const { t } = useTranslation();
  const { locale } = useContentfulContext();
  const inspectorMode = useContentfulInspectorMode();

  const renderMenuGroupLinks = (menuGroup, listClassName) => {
    return menuGroup?.items?.map(menuItem => {
      const href = getLinkHrefPrefix(menuItem);
      const linkText = getLinkDisplayText(menuItem);
      return (
        <li
          key={menuItem.sys.id}
          className={listClassName}
          {...inspectorMode({
            entryId: menuItem.sys.id,
            fieldId: 'pageName',
          })}
        >
          <Link href={href} className={classes.menuItemLink}>
            {linkText}
          </Link>
        </li>
      );
    });
  };

  const classes = useStyles();
  const containerProps = footerContent?.sys?.id
    ? inspectorMode({
        entryId: footerContent.sys.id,
        fieldId: 'menuItems',
        locale,
      })
    : undefined;

  return (
    <>
      <Container {...containerProps} maxWidth={false} className={classes.footerContainer}>
        <div className={classes.footerWrapper}>
          <footer className={classes.footer}>
            {footerContent?.menuItemsCollection?.items?.length && (
              <nav role="navigation" className={classes.menuWrapper}>
                {footerContent.menuItemsCollection.items.map(
                  menuItem =>
                    menuItem && (
                      <div key={menuItem.sys.id} className={classes.menuColumn}>
                        <ul className={classes.menu}>
                          <li>
                            <p
                              className={classes.menuItem}
                              {...inspectorMode({
                                entryId: menuItem.sys.id,
                                fieldId: 'groupName',
                                locale,
                              })}
                            >
                              {menuItem.groupName}
                            </p>
                            {menuItem.featuredPagesCollection && (
                              <ul className={classes.submenu}>
                                {renderMenuGroupLinks(
                                  menuItem.featuredPagesCollection,
                                  classes.submenuItem,
                                )}
                              </ul>
                            )}
                          </li>
                        </ul>
                      </div>
                    ),
                )}
              </nav>
            )}
            <section className={classes.footerEndSection}>
              <LanguageSelector />
            </section>
          </footer>
        </div>
      </Container>
      <Container maxWidth={false} className={classes.footerCorporateContainer}>
        <div className={classes.footerCorporateWrapper}>
          <section className={classes.footerCorporate}>
            <div className={classes.corporateLogoMenu}>
              <div className={classes.corporateLogoContainer}>
                {/* <Logo className={classes.corporateLogo} /> */}
                <img src="/logo_white.svg" alt="FirstOrder.AI" className={classes.corporateLogo} />
              </div>

              <section className={classes.copyrightAndLegal}>
                <div className={classes.copyright}>
                  {t('legal.copyright', { year: new Date().getFullYear() })}
                </div>
                {footerContent?.legalLinks?.featuredPagesCollection?.items?.length && (
                  <nav role="navigation" className={classes.legalMenuWrapper}>
                    <ul className={classes.legalMenu}>
                      {renderMenuGroupLinks(
                        footerContent.legalLinks.featuredPagesCollection,
                        classes.legalMenuItem,
                      )}
                    </ul>
                  </nav>
                )}
              </section>

              {/* <div className={classes.socialWrapper}>
              <div className={classes.socialTitle}>{t('socials.findUsOn')}</div>
              <div className={classes.social}>
                {footerContent?.twitterLink && (
                  <a
                    href={footerContent.twitterLink}
                    title={t('socials.twitter')}
                    target="_blank"
                    rel="nofollow noreferrer">
                    <Twitter />
                  </a>
                )}
                {footerContent?.facebookLink && (
                  <a
                    href={footerContent.facebookLink}
                    title={t('socials.facebook')}
                    target="_blank"
                    rel="nofollow noreferrer">
                    <Facebook />
                  </a>
                )}
                {footerContent?.linkedinLink && (
                  <a
                    href={footerContent.linkedinLink}
                    title={t('socials.linkedin')}
                    target="_blank"
                    rel="nofollow noreferrer">
                    <LinkedIn />
                  </a>
                )}
                {footerContent?.instagramLink && (
                  <a
                    href={footerContent.instagramLink}
                    title={t('socials.instagram')}
                    target="_blank"
                    rel="nofollow noreferrer">
                    <Instagram />
                  </a>
                )}
              </div>
            </div> */}
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};
