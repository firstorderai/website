const url = process.env.NEXT_PUBLIC_BASE_URL;

module.exports = {
  contentful: {
    space_id: process.env.CONTENTFUL_SPACE_ID || '',
    cda_token: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    cpa_token: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
  },
  meta: {
    title: 'FirstOrder.AI',
    description: `We harness the power of artificial intelligence to drive innovation and create cutting-edge solutions that empower businesses and individuals to thrive in the digital age. Learn more
    online at ${url.replace('https://', '').replace('http://', '')}}`,
    url: 'https://firstorder.ai',
    image:
      'https://images.ctfassets.net/s9fimnml8k09/23dXPo20jgoDmZdGORckcn/acb943ca5ebde1b9b50b635f5dd2c110/logo_color_512.png',
  },
  icon: {
    light:
      'https://images.ctfassets.net/s9fimnml8k09/3f7NYnyUkEhPVzBj0V74Ii/db28d6b0890db2e6aeccf4a7a516aff6/logo_simple.svg',
    dark: 'https://images.ctfassets.net/s9fimnml8k09/3f7NYnyUkEhPVzBj0V74Ii/db28d6b0890db2e6aeccf4a7a516aff6/logo_simple.svg',
    width: 141,
    height: 155,
  },
};
