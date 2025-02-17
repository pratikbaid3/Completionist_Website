import type { Metadata } from 'next';
import './globals.css';
import StoreProvider from './store-provider';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body suppressHydrationWarning={true} className='bg-background'>
                <StoreProvider>{children}</StoreProvider>
            </body>
        </html>
    );
}
