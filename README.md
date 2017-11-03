# maildrop-alias
Converts a Maildrop alias into a real inbox and vice versa.

## Requirements
Node.js >= 6

## Usage via npx
When using ```maildrop-alias``` via ```npx``` there is no need to install.
```sh
npx maildrop-alias hello
# hello -> D-1mvdio9

npx maildrop-alias D-1mvdio9
# D-1mvdio9 -> hello
```

## Usage via npm
If you do not want or cannot use ```npx```, you may install ```maildrop-alias``` as a command instead.
### Install
```sh
npm install -g maildrop-alias
```

### Usage
```sh
maildrop-alias hello
# hello -> D-1mvdio9

maildrop-alias D-1mvdio9
# D-1mvdio9 -> hello
```
