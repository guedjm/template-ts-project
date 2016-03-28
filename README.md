# Template-ts-project

Template project for creating typescript applications


## Prerequises

To use the Template-ts-project environnement, you need to install these packages globally
```
npm install -g gulp typings tsfmt
```


## Getting started

Start by installing project dependencies:
```
npm install
```

Then install typings file definitions:
```
typings install
```

## Project Structure

```
.
|── build                                           Build directory
├── config                                          Configuration directory
│   ├── default.yaml
│   └── development.yaml
├── gulpfile.js
├── gulpTask                                        Gulp tasks directory
│   ├── build.js
│   ├── bump.js
│   ├── default.js
│   ├── deploy.js
│   ├── format.js
│   ├── git.js
│   ├── test.js
│   └── tslint.js
├── package.json
├── README.md
├── src                                             Source directory
│   └── bin                                         bin directory
│       └── start.js                                Application entry point
├── test
│   └── Test.js
├── tsconfig.json                                   Transpilling configuration
├── tsfmt.json                                      Formatter configuration
├── tslint.json                                     Linter configuration
└── typings.json                                    Typings dependencies

6 directories, 19 files
```

## Main tasks

**gulp build**: Transpile typescript to javascript

**gulp clean**: Clean project

**gulp bump**: Bump current project version

**gulp version**: Display current project version

**gulp format**: Format typescript files

**gulp lint**: Lint typescript files

**gulp test**: Run project tests

**gulp push**: Push a new version of the project to git:

1. Format typescript files

2. Lint typescript files

3. Clean project

4. Build project

5. Test project

6. Bump project version

8. Commit files

9. Push to git