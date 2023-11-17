import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName =
    window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const resolve = (name: string) => {
    return resolvePageComponent(
        `./pages/${name}/index.tsx`,
        import.meta.glob('./pages/**/*.tsx'),
    );
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve,
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
