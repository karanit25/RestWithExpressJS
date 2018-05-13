Follow - https://www.codementor.io/wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq

C:\RestAPI>mkdir simpleapi

C:\RestAPI>cd simpleapi

C:\RestAPI\simpleapi>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (simpleapi)
version: (1.0.0)
description: RestAPI by ExpressJS
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\RestAPI\simpleapi\package.json:

{
  "name": "simpleapi",
  "version": "1.0.0",
  "description": "RestAPI by ExpressJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes)

C:\RestAPI\simpleapi>dir
 Volume in drive C is Windows
 Volume Serial Number is 2A82-BEAC

 Directory of C:\RestAPI\simpleapi

05/13/2018  08:38 PM    <DIR>          .
05/13/2018  08:38 PM    <DIR>          ..
05/13/2018  08:38 PM               225 package.json
               1 File(s)            225 bytes
               2 Dir(s)  446,197,592,064 bytes free

C:\RestAPI\simpleapi>npm install express --save
simpleapi@1.0.0 C:\RestAPI\simpleapi
`-- express@4.16.3
  +-- accepts@1.3.5
  | +-- mime-types@2.1.18
  | | `-- mime-db@1.33.0
  | `-- negotiator@0.6.1
  +-- array-flatten@1.1.1
  +-- body-parser@1.18.2
  | +-- bytes@3.0.0
  | +-- http-errors@1.6.3
  | | `-- inherits@2.0.3
  | +-- iconv-lite@0.4.19
  | `-- raw-body@2.3.2
  |   `-- http-errors@1.6.2
  |     +-- depd@1.1.1
  |     `-- setprototypeof@1.0.3
  +-- content-disposition@0.5.2
  +-- content-type@1.0.4
  +-- cookie@0.3.1
  +-- cookie-signature@1.0.6
  +-- debug@2.6.9
  | `-- ms@2.0.0
  +-- depd@1.1.2
  +-- encodeurl@1.0.2
  +-- escape-html@1.0.3
  +-- etag@1.8.1
  +-- finalhandler@1.1.1
  | `-- unpipe@1.0.0
  +-- fresh@0.5.2
  +-- merge-descriptors@1.0.1
  +-- methods@1.1.2
  +-- on-finished@2.3.0
  | `-- ee-first@1.1.1
  +-- parseurl@1.3.2
  +-- path-to-regexp@0.1.7
  +-- proxy-addr@2.0.3
  | +-- forwarded@0.1.2
  | `-- ipaddr.js@1.6.0
  +-- qs@6.5.1
  +-- range-parser@1.2.0
  +-- safe-buffer@5.1.1
  +-- send@0.16.2
  | +-- destroy@1.0.4
  | `-- mime@1.4.1
  +-- serve-static@1.13.2
  +-- setprototypeof@1.1.0
  +-- statuses@1.4.0
  +-- type-is@1.6.16
  | `-- media-typer@0.3.0
  +-- utils-merge@1.0.1
  `-- vary@1.1.2

npm WARN simpleapi@1.0.0 No repository field.

C:\RestAPI\simpleapi>npm install body-parser --save
simpleapi@1.0.0 C:\RestAPI\simpleapi
`-- body-parser@1.18.2

npm WARN simpleapi@1.0.0 No repository field.

C:\RestAPI\simpleapi>dir
 Volume in drive C is Windows
 Volume Serial Number is 2A82-BEAC

 Directory of C:\RestAPI\simpleapi

05/13/2018  08:39 PM    <DIR>          .
05/13/2018  08:39 PM    <DIR>          ..
05/13/2018  08:39 PM    <DIR>          node_modules
05/13/2018  08:39 PM               305 package.json
               1 File(s)            305 bytes
               3 Dir(s)  446,194,429,952 bytes free

C:\RestAPI\simpleapi>

To Run the server ---

C:\RestAPI\simpleapi>node app.js
app running on port. 3000