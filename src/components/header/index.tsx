import { tw } from 'twind';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';

const headerStyle = tw`bg-white dark:bg-gray-900 min-h-[calc(100vh_-_6rem)]`;

const Header = () => (
  <header className={headerStyle}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1
        className={tw(
          `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug`,
          `text-gray-800 dark:text-gray-100`,
        )}
      >
        Your website, beyond expectations
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 dark:text-gray-300 text-center text-xl lg:text-3xl`)}>
          Make your website wonderful and build beyond your expectations.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Get started</Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Contact us</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600 dark:text-gray-400`)}>
          These folks get it
        </p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Aws className={tw(`m-12 mb-8`)} width={120} />
          <Netlify className={tw(`m-12`)} width={140} />
          <Nike className={tw(`m-12`)} width={140} />
          <Figma className={tw(`m-12`)} width={140} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
