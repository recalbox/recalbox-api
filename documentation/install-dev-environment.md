Install the developer environment
=================================

1 - Requirement
---------------

- NodeJS 0.12+


2 - Install dependencies
------------------------

```bash
npm install
```

3 - Start the server and the watcher
------------------------------------

```bash
npm run dev-start
```

The processes are handled by [PM2](https://github.com/Unitech/pm2).

By default, the server is running on the port 1337. To change it, create a file `config/parameters.json` based on `config/parameters.json.dist` and put your custom port.

The watcher checks the `bundle-es6` directory and auto-compile to the `bundle` directory when a file is modified.
The server is also reloaded automatically.


4 - Check the watcher
---------------------

```bash
npm run dev-logs
```

This command displays the process logs of the server and the watcher. It is usefull to check the errors.



5 - Stop the server and the watcher
-----------------------------------

```bash
npm run dev-stop
```
