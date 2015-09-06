Install the API on the Recalbox
===============================

1 - Get the last version
------------------------

### Method 1

Execute this command line on the recalbox :

```sh
curl -sS https://raw.githubusercontent.com/neolao/recalbox-api/master/scripts/install.sh | sh
```


### Method 2

1. Download the last release here : [releases](https://github.com/neolao/recalbox-api/releases)
2. Copy the file into the recalbox
3. Create a directory and extract the files

```sh
mkdir api
xz -c -d recalbox-api.tar.xz | tar -x -v -C api -f -
```




2 - Start the service
---------------------

Execute the command line in the API directory :

```sh
./start.sh
```
