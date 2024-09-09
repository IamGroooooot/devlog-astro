import Giscus from '@giscus/react';
import { useEffect, useState } from 'react';

export default function GiscusComment() {
  const [theme, setTheme] = useState<boolean | string>(false);

  useEffect(() => {
    if (window.location !== undefined) {
      const theme = document.documentElement.attributes.getNamedItem('data-theme')?.value;
      if (theme) {
        setTheme(theme);
      }
    }
  }, [theme]);
  return theme ? (
    <div className="mt-12 border-t pt-6 border-gray-200 dark:border-gray-800 w-full">
      <Giscus
        id="comments"
        repo="IamGroooooot/devlog-astro"
        repoId="R_kgDOMuwE0A"
        category="General"
        categoryId="DIC_kwDOMuwE0M4CiT3n"
        mapping="title"
        term="Welcome to groot devlog comments"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'dark' : 'light'}
        lang="ko"
        loading="lazy"
        strict="1"
      />
    </div>
  ) : (
    <></>
  );
}
