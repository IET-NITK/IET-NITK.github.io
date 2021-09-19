# npm audit report

browserslist  4.0.0 - 4.16.4
Severity: moderate
Regular Expression Denial of Service - https://npmjs.com/advisories/1747
fix available via `npm audit fix --force`
Will install gatsby-plugin-google-analytics@2.11.0, which is a breaking change
node_modules/react-dev-utils/node_modules/browserslist
  react-dev-utils  >=6.0.0-next.03604a46
  Depends on vulnerable versions of browserslist
  node_modules/react-dev-utils
    gatsby  >=1.10.0-alpha.1460dad9
    Depends on vulnerable versions of @pmmmwh/react-refresh-webpack-plugin
    Depends on vulnerable versions of gatsby-cli
    Depends on vulnerable versions of gatsby-plugin-utils
    Depends on vulnerable versions of react-dev-utils
    Depends on vulnerable versions of webpack-dev-server
    node_modules/gatsby
      babel-plugin-remove-graphql-queries  >=2.17.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby/node_modules/babel-plugin-remove-graphql-queries
      gatsby-plugin-google-analytics  >=2.12.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby-plugin-google-analytics
      gatsby-plugin-manifest  >=2.13.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby-plugin-manifest
      gatsby-plugin-page-creator  >=2.11.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby/node_modules/gatsby-plugin-page-creator
      gatsby-plugin-react-helmet  >=3.11.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby-plugin-react-helmet
      gatsby-plugin-sass  >=3.3.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby-plugin-sass
      gatsby-plugin-sharp  >=2.15.0-next.0
      Depends on vulnerable versions of gatsby
      Depends on vulnerable versions of gatsby-plugin-utils
      node_modules/gatsby-plugin-sharp
      gatsby-plugin-typescript  >=2.13.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby/node_modules/gatsby-plugin-typescript
      gatsby-plugin-utils  >=0.10.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby-plugin-manifest/node_modules/gatsby-plugin-utils
      node_modules/gatsby-plugin-sharp/node_modules/gatsby-plugin-utils
      node_modules/gatsby/node_modules/gatsby-plugin-utils
      gatsby-remark-copy-linked-files  >=2.11.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby-remark-copy-linked-files
      gatsby-remark-images  >=3.12.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby-remark-images
      gatsby-remark-prismjs  >=3.14.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby-remark-prismjs
      gatsby-remark-responsive-iframe  >=2.12.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby-remark-responsive-iframe
      gatsby-remark-smartypants  >=2.11.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby-remark-smartypants
      gatsby-source-filesystem  >=2.12.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby-source-filesystem
      node_modules/gatsby-source-strapi/node_modules/gatsby-source-filesystem
        gatsby-source-strapi  >=1.0.0-alpha.0
        Depends on vulnerable versions of gatsby-source-filesystem
        node_modules/gatsby-source-strapi
      gatsby-transformer-remark  *
      Depends on vulnerable versions of gatsby
      Depends on vulnerable versions of sanitize-html
      node_modules/gatsby-transformer-remark
      gatsby-transformer-sharp  >=2.13.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby-transformer-sharp
      gatsby-transformer-yaml  >=2.12.0-next.0
      Depends on vulnerable versions of gatsby
      node_modules/gatsby-transformer-yaml

glob-parent  <5.1.2
Severity: moderate
Regular expression denial of service - https://npmjs.com/advisories/1751
fix available via `npm audit fix --force`
Will install gatsby-plugin-google-analytics@2.11.0, which is a breaking change
node_modules/webpack-dev-server/node_modules/glob-parent
  chokidar  1.0.0-rc1 - 2.1.8
  Depends on vulnerable versions of glob-parent
  node_modules/webpack-dev-server/node_modules/chokidar
    webpack-dev-server  2.0.0-beta - 3.11.2
    Depends on vulnerable versions of chokidar
    node_modules/webpack-dev-server
      @pmmmwh/react-refresh-webpack-plugin  0.3.1 - 0.5.0-rc.6
      Depends on vulnerable versions of webpack-dev-server
      node_modules/@pmmmwh/react-refresh-webpack-plugin
        gatsby  >=1.10.0-alpha.1460dad9
        Depends on vulnerable versions of @pmmmwh/react-refresh-webpack-plugin
        Depends on vulnerable versions of gatsby-cli
        Depends on vulnerable versions of gatsby-plugin-utils
        Depends on vulnerable versions of react-dev-utils
        Depends on vulnerable versions of webpack-dev-server
        node_modules/gatsby
          babel-plugin-remove-graphql-queries  >=2.17.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby/node_modules/babel-plugin-remove-graphql-queries
          gatsby-plugin-google-analytics  >=2.12.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-plugin-google-analytics
          gatsby-plugin-manifest  >=2.13.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-plugin-manifest
          gatsby-plugin-page-creator  >=2.11.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby/node_modules/gatsby-plugin-page-creator
          gatsby-plugin-react-helmet  >=3.11.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-plugin-react-helmet
          gatsby-plugin-sass  >=3.3.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-plugin-sass
          gatsby-plugin-sharp  >=2.15.0-next.0
          Depends on vulnerable versions of gatsby
          Depends on vulnerable versions of gatsby-plugin-utils
          node_modules/gatsby-plugin-sharp
          gatsby-plugin-typescript  >=2.13.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby/node_modules/gatsby-plugin-typescript
          gatsby-plugin-utils  >=0.10.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-plugin-manifest/node_modules/gatsby-plugin-utils
          node_modules/gatsby-plugin-sharp/node_modules/gatsby-plugin-utils
          node_modules/gatsby/node_modules/gatsby-plugin-utils
          gatsby-remark-copy-linked-files  >=2.11.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-remark-copy-linked-files
          gatsby-remark-images  >=3.12.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-remark-images
          gatsby-remark-prismjs  >=3.14.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-remark-prismjs
          gatsby-remark-responsive-iframe  >=2.12.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-remark-responsive-iframe
          gatsby-remark-smartypants  >=2.11.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-remark-smartypants
          gatsby-source-filesystem  >=2.12.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-source-filesystem
          node_modules/gatsby-source-strapi/node_modules/gatsby-source-filesystem
            gatsby-source-strapi  >=1.0.0-alpha.0
            Depends on vulnerable versions of gatsby-source-filesystem
            node_modules/gatsby-source-strapi
          gatsby-transformer-remark  *
          Depends on vulnerable versions of gatsby
          Depends on vulnerable versions of sanitize-html
          node_modules/gatsby-transformer-remark
          gatsby-transformer-sharp  >=2.13.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-transformer-sharp
          gatsby-transformer-yaml  >=2.12.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-transformer-yaml

path-parse  <1.0.7
Severity: moderate
Regular Expression Denial of Service in path-parse - https://npmjs.com/advisories/1773
fix available via `npm audit fix`
node_modules/path-parse

sanitize-html  <=2.3.1
Severity: moderate
Improper Input Validation - https://npmjs.com/advisories/1675
Improper Input Validation - https://npmjs.com/advisories/1676
No fix available
node_modules/sanitize-html
  gatsby-transformer-remark  *
  Depends on vulnerable versions of gatsby
  Depends on vulnerable versions of sanitize-html
  node_modules/gatsby-transformer-remark

tar  <=4.4.17 || 5.0.0 - 5.0.9 || 6.0.0 - 6.1.8
Severity: high
Arbitrary File Creation/Overwrite due to insufficient absolute path sanitization - https://npmjs.com/advisories/1770
Arbitrary File Creation/Overwrite via insufficient symlink protection due to directory cache poisoning - https://npmjs.com/advisories/1771
Arbitrary File Creation/Overwrite via insufficient symlink protection due to directory cache poisoning using symbolic links - https://npmjs.com/advisories/1779
Arbitrary File Creation/Overwrite on Windows via insufficient relative path sanitization - https://npmjs.com/advisories/1781
fix available via `npm audit fix`
node_modules/tar

trim  <0.0.3
Severity: high
Regular Expression Denial of Service in trim - https://npmjs.com/advisories/1700
fix available via `npm audit fix --force`
Will install gatsby-plugin-google-analytics@2.11.0, which is a breaking change
node_modules/trim
  remark-parse  <=8.0.3
  Depends on vulnerable versions of trim
  node_modules/remark-parse
    gatsby-recipes  0.0.7-unifiedroutes.76 - 0.0.7-unifiedroutes-v2.135 || >=0.1.31
    Depends on vulnerable versions of remark-parse
    node_modules/gatsby-recipes
      gatsby-cli  2.8.20-telemetry-test.2972 - 2.8.20-telemetry-test.2976 || 2.11.10-unifiedroutes.76 - 2.11.10-unifiedroutes-v2.135 || >=2.12.37
      Depends on vulnerable versions of gatsby-recipes
      node_modules/gatsby-cli
        gatsby  >=1.10.0-alpha.1460dad9
        Depends on vulnerable versions of @pmmmwh/react-refresh-webpack-plugin
        Depends on vulnerable versions of gatsby-cli
        Depends on vulnerable versions of gatsby-plugin-utils
        Depends on vulnerable versions of react-dev-utils
        Depends on vulnerable versions of webpack-dev-server
        node_modules/gatsby
          babel-plugin-remove-graphql-queries  >=2.17.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby/node_modules/babel-plugin-remove-graphql-queries
          gatsby-plugin-google-analytics  >=2.12.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-plugin-google-analytics
          gatsby-plugin-manifest  >=2.13.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-plugin-manifest
          gatsby-plugin-page-creator  >=2.11.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby/node_modules/gatsby-plugin-page-creator
          gatsby-plugin-react-helmet  >=3.11.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-plugin-react-helmet
          gatsby-plugin-sass  >=3.3.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-plugin-sass
          gatsby-plugin-sharp  >=2.15.0-next.0
          Depends on vulnerable versions of gatsby
          Depends on vulnerable versions of gatsby-plugin-utils
          node_modules/gatsby-plugin-sharp
          gatsby-plugin-typescript  >=2.13.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby/node_modules/gatsby-plugin-typescript
          gatsby-plugin-utils  >=0.10.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-plugin-manifest/node_modules/gatsby-plugin-utils
          node_modules/gatsby-plugin-sharp/node_modules/gatsby-plugin-utils
          node_modules/gatsby/node_modules/gatsby-plugin-utils
          gatsby-remark-copy-linked-files  >=2.11.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-remark-copy-linked-files
          gatsby-remark-images  >=3.12.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-remark-images
          gatsby-remark-prismjs  >=3.14.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-remark-prismjs
          gatsby-remark-responsive-iframe  >=2.12.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-remark-responsive-iframe
          gatsby-remark-smartypants  >=2.11.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-remark-smartypants
          gatsby-source-filesystem  >=2.12.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-source-filesystem
          node_modules/gatsby-source-strapi/node_modules/gatsby-source-filesystem
            gatsby-source-strapi  >=1.0.0-alpha.0
            Depends on vulnerable versions of gatsby-source-filesystem
            node_modules/gatsby-source-strapi
          gatsby-transformer-remark  *
          Depends on vulnerable versions of gatsby
          Depends on vulnerable versions of sanitize-html
          node_modules/gatsby-transformer-remark
          gatsby-transformer-sharp  >=2.13.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-transformer-sharp
          gatsby-transformer-yaml  >=2.12.0-next.0
          Depends on vulnerable versions of gatsby
          node_modules/gatsby-transformer-yaml

trim-newlines  <3.0.1 || =4.0.0
Severity: high
Regular Expression Denial of Service - https://npmjs.com/advisories/1753
fix available via `npm audit fix --force`
Will install node-sass@6.0.1, which is a breaking change
node_modules/trim-newlines
  meow  3.4.0 - 5.0.0
  Depends on vulnerable versions of trim-newlines
  node_modules/meow
    node-sass  3.5.0-beta.1 - 6.0.0
    Depends on vulnerable versions of meow
    node_modules/node-sass

ws  5.0.0 - 5.2.2 || 6.0.0 - 6.2.1 || 7.0.0 - 7.4.5
Severity: moderate
Regular Expression Denial of Service - https://npmjs.com/advisories/1748
fix available via `npm audit fix`
node_modules/ws
  @graphql-tools/url-loader  6.4.1-alpha-0ea0f8b7.0 - 6.10.1
  Depends on vulnerable versions of ws
  node_modules/@graphql-tools/url-loader

38 vulnerabilities (29 moderate, 9 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.
