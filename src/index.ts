import { BuildOptions, Lambda, FileBlob } from '@vercel/build-utils';

export const version = 3;

export async function build(options: BuildOptions) {
    const lambda = new Lambda({
        runtime: 'nodejs16.x',
        handler: 'index.main',
        files: {
            'index.js': new FileBlob({ data: 'exports.main = () => { return "Test" }' }),
        },
    });

    return {
        output: lambda,
        routes: [
            // If your Runtime needs to define additional routing, define it here…
        ],
    };
}
