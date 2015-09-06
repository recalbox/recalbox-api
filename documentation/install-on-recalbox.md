Install the API on the Recalbox
===============================


Method 1: Install script
------------------------

Execute this command line on the recalbox :

```sh
wget -q -O- https://raw.githubusercontent.com/neolao/recalbox-api/master/scripts/install.sh | sh
```

The REST API is now accessible on port `1337`.





Method 2: Manual install
------------------------

### Download

- Download the last release here : [releases](https://github.com/neolao/recalbox-api/releases)
- Copy the file into the recalbox


### Create a directory and extract the files

```sh
mkdir api
xz -c -d recalbox-api-1.0.0.tar.xz | tar -x -v -C api -f -
```


### Start the service

Execute the command line in the API directory :

```sh
./start.sh
```

The REST API is now accessible on port `1337`.


### Start the service at startup

Execute the command line in the API directory :

```sh
./scripts/install-startup.sh
```

