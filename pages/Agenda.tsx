import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Agenda() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Agenda, Open Source Day 2023 - Florence</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
        <meta
          name="description"
          content="Open Source Day 2023 coming soon on March 2023. Stay tuned on our social"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <Header />
      <div className="container">
        <Hero
          title="Open Source Day 2023"
          subtitle="Agenda"
          date={{
            where: 'Florence',
            when: 'Coming soon',
            length: 'March 2023',
            type: 'Agenda'
          }}
          description="We are still looking for Speakers and organising the event! Want to participate? :)"
          originals={false}
        />
        <div className="image">
          <Image className="img" alt="background" fill={true} src="/bg.jpg" />
        </div>
        <section className="after_main">
          <h2>
            Head over to the CFP page or contact us directly @ <a href="mailto:osday@schrodinger-hat.it">SH</a>
          </h2>
          <h3>
            You can find all the community info on our website,{' '}
            <a href="https://www.schrodinger-hat.it/">Schrodingers Hat</a> and if you have any questions about
            inclusivity, diversity or accessibility please ask us at any time!
          </h3>
        </section>
      </div>
    </>
  );
}
