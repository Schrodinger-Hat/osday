import Main from '../components/Main';

export default function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      metas: {
        title: 'Open Source Day 2023 - Florence',
        description:
          'Open Source Day 2023 coming on the 24th of March 2023. Stay tuned on our social'
      },
      messages: (await import(`../public/locales/${locale}.json`)).default
    }
  };
}
