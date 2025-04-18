// src/pages/auth_guides.tsx
import { GetStaticProps } from 'next';
import React from 'react';

import { Guides } from '@src/components/features/auth/guides';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';
// 可能还需要导入其他布局或 SEO 相关的组件

const AuthGuidesPage = () => {
  // 你可以在这里准备传递给 MyCustomFeature 的 props
  const customData = {
    title: 'Auth Guides',
    description: 'This is the auth guides page...',
    // ... 其他数据
  };

  return (
    <>
      {/* 可能需要添加 SEO Head 组件 */}
      <Guides {...customData} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getServerSideTranslations(locale)),
    },
  };
};

export default AuthGuidesPage;
