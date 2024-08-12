/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    compiler: {
        removeConsole: true,
    },
    swcMinify: false
}

module.exports = nextConfig