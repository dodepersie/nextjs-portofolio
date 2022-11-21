import Head from 'next/head';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import HeroNotFound from '../components/Hero/HeroNotFound';
import { LayoutNotFound } from '../layout/LayoutNotFound';
import { Section } from '../styles/GlobalComponents';

const NotFound = () => {
    return (
        <>
            <Head>
                <title>mahadisaputra.my.id: Not Found</title>
                <meta name="author" content="I Dewa Gede Mahadi Saputra"/>
                <meta name="description" content="Mahadi Saputra's personal portfolio website" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <LayoutNotFound>
            <Section grid>
                <HeroNotFound />
                <BgAnimation />
            </Section>
            </LayoutNotFound>
        </>
    );
}

export default NotFound