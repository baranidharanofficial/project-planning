import { IntlProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = params;

    return (
        <html lang={locale}>
            <body>
                <ServerIntlProvider locale={locale}>
                    {children}
                </ServerIntlProvider>
            </body>
        </html>
    );
}

async function ServerIntlProvider({ locale, children }: { locale: string; children: React.ReactNode }) {
    // Ensure that locale is passed correctly as an object with a 'locale' property
    const messages = await getMessages({ locale });

    // Render content with IntlProvider during SSR
    return (
        <IntlProvider messages={messages} locale={locale}>
            {children}
        </IntlProvider>
    );
}
