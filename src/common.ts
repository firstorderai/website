import { DefaultHomeAddress, DefaultMainDomain } from './consts';

export const getMainDomain = (host: string | undefined): string | undefined => {
  if (host == null) {
    return undefined;
  } else {
    if (host.endsWith('.com.cn')) {
      const parts = host.split('.').filter(Boolean);
      if (parts.length > 3) {
        return parts.slice(-3).join('.');
      }
      return host;
    } else if (host.endsWith('.ai') || host.endsWith('.cn') || host.endsWith('.com')) {
      const parts = host.split('.').filter(Boolean);
      if (parts.length > 2) {
        return parts.slice(-2).join('.');
      }
      return host;
    } else {
      return undefined;
    }
  }
};

export const getProtocol = (context): string => {
  let protocol = 'http';
  const protocolHeader = context.req.headers['x-forwarded-proto'];
  if (Array.isArray(protocolHeader)) {
    protocol = protocolHeader[0];
  } else if (typeof protocolHeader === 'string') {
    protocol = protocolHeader;
  }
  return protocol;
};

export interface HomeAddress {
  mainDomain: string;
  homeAddress: string;
}

export const getHomeAddress = (context, host: string | undefined): HomeAddress => {
  const mainDomain = getMainDomain(host);
  if (mainDomain == null) {
    return { mainDomain: DefaultMainDomain, homeAddress: DefaultHomeAddress };
  } else {
    const protocol = getProtocol(context);
    const homeAddress = `${protocol}://${mainDomain}`;
    return { mainDomain, homeAddress };
  }
};
