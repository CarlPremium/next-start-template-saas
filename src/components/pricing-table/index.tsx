import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

const features = [
  `Laboris nulla`,
  `Lorem pariatur nisi`,
  `Id aute amet pariatur`,
  `Do duis sint aliquip`,
  `Nostrud duis tempor`,
  `Consequat eiusmod`,
  `Reprehenderit`,
  `Adipisicing reprehenderit`,
];

const PricingTable = () => (
  <section
    className={tw(`bg-gradient-to-b from-gray-100 dark:from-gray-800 to-white dark:to-gray-900 shadow-inner pt-12`)}
  >
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-12`)}>
            Are you ready?
          </h2>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500 dark:text-gray-300`)}>
            Lorem id ullamco pariatur eiusmod labore qui deserunt incididunt deserunt nostrud. Tempor duis in
            adipisicing exercitation ipsum nostrud esse. Reprehenderit cupidatat sint est deserunt id eiusmod amet
            aliqua officia.
          </p>
          <div className={tw(`mt-8`)}>
            <div className={tw(`flex items-center`)}>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-indigo-600`,
                )}
              >
                What is included
              </h3>
              <div className={tw(`flex-1 border-t-2 border-gray-200 dark:border-gray-700`)} />
            </div>
            <ul className={tw(`mt-8 lg:grid lg:grid-cols-2`)}>
              {features.map((feature) => (
                <li className={tw(`flex items-center lg:col-span-1`)} key={feature}>
                  <div className={tw(`flex-shrink-0`)}>
                    <Check className={tw(`h-8 w-8 mr-3 mb-1`)} />
                  </div>
                  <p className={tw(`text-gray-600 dark:text-gray-300`)}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={tw(
            `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
          )}
        >
          <p className={tw(`text-lg font-medium text-gray-800 dark:text-gray-100`)}>If you order now...</p>
          <div
            className={tw(
              `my-4 flex items-center justify-center text-6xl leading-none font-bold`,
              `text-gray-800 dark:text-gray-100`,
            )}
          >
            $99/mo
          </div>
          <Button
            primary
            modifier="mt-6"
            onClick={async () => {
              const res = await fetch(`/api/checkout`, { method: `POST` });
              const data = await res.json();
              if (data.url) window.location.href = data.url;
            }}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
