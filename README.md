Recalbox API
============

REST API for [recalbox](http://recalbox.com)


Installation
------------

- [Install the service on the Recalbox 3.3.x](documentation/install-on-recalbox.md)
- [Install the developer environment](documentation/install-dev-environment.md)



API
---

### Available formats

| Format | MIME type          |
| ------ | ------------------ |
| `text` | `text/plain`       |
| `json` | `application/json` |
| `xml`  | `application/xml`  |

To get a specific response format, you have to send the HTTP header `Accept` with a listed MIME type above.


### Pagination

On endpoints that return a collection, you can paginate the result with these queries :

| name  | Type    | Default | Description |
| ----- | ------- | ------- |------------ | 
| page  | Integer | `1`     | The page (start at `1`) |
| count | Integer | `25`    | The amount of item to return |
| range | String  | `null`  | The index range to return |

The response returns the items with 2 headers :

- `Content-Range`
- `Accept-Range`


### Endpoints

| HTTP VERB   | Endpoint | Description |
|:----------- | -------- | ----------- |
| `GET` `PUT` | `/configuration` | [The main configuration](documentation/api/system/configuration.md) |
| `GET` `PUT` | `/hostname` | The hostname |
| `GET` `PUT` | `/locale` | The locale |
| `GET` `PUT` | `/keyboardlayout` | The keyboard layout |
| `GET` `PUT` | `/timezone` | The timezone |
| `GET` `PUT` | `/updates/enabled` | Enable/disable the updates check at startup |
| `GET`       | `/kodi` | Get Kodi settings |
| `GET` `PUT` | `/kodi/enabled` | Enable/disable Kodi |
| `GET` `PUT` | `/kodi/atstartup` | Start Kodi at launch |
| `GET` `PUT` | `/kodi/xbutton` | Set x button shortcut |
| `GET`       | `/wifi` | Get wifi settings |
| `GET` `PUT` | `/wifi/enabled` | Enable/disable wifi |
| `GET` `PUT` | `/wifi/ssid` | Wifi SSID |
| `GET` `PUT` | `/wifi/key` | Wifi key |
| `GET`       | `/audio` | Get audio settings |
| `GET` `PUT` | `/audio/device` | The audio device |
| `GET` `PUT` | `/audio/volume` | The volume |
| `GET` `PUT` | `/audio/bgmusic` | Enable/disable sounds in EmulationStation |
| `GET`       | `/controllers/ps3` | Get PS3 controllers settings |
| `GET` `PUT` | `/controllers/ps3/enabled` | Enable/disable PS3 controllers support |
| `GET` `PUT` | `/controllers/ps3/driver` | PS3 controllers driver |
| `GET`       | `/controllers/xboxdrv` | Get xboxdrv driver settings |
| `GET` `PUT` | `/controllers/xboxdrv/enabled` | Enable/disable xboxdrv driver |
| `GET` `PUT` | `/controllers/xboxdrv/nbcontrols` | The amount of controllers to use with xboxdrv |
| `GET`       | `/controllers/gpio` | Get GPIO settings |
| `GET` `PUT` | `/controllers/gpio/enabled` | Enable/disable controllers on GPIO |
| `GET` `PUT` | `/controllers/gpio/args` | `mk_gpio` arguments |
| `GET`       | `/controllers/db9` | Get DB9 driver settings |
| `GET` `PUT` | `/controllers/db9/enabled` | Enable/disable DB9 driver |
| `GET` `PUT` | `/controllers/db9/args` | DB9 driver arguments |
| `GET`       | `/controllers/gamecon` | Get gamecon driver settings |
| `GET` `PUT` | `/controllers/gamecon/enabled` | Enable/disable gamecon driver |
| `GET` `PUT` | `/controllers/gamecon/args` | Gamecon driver arguments |
| `GET` `POST` | `/bios` | The bios list for all systems |
| `GET` `DELETE` | `/bios/:fileName` | The BIOS file |
| `GET`       | `/bios/metadata/:fileName` | The file information |
| `GET`       | `/systems` | The system list |
| `GET`       | `/systems/default` | The default system settings |
| `GET` `PUT` | `/systems/default/videomode` | The default resolution |
| `GET` `PUT` | `/systems/default/shaders` | The default shaders |
| `GET` `PUT` | `/systems/default/ratio` | The default ratio |
| `GET` `PUT` | `/systems/default/smooth` | The default smooth value |
| `GET` `PUT` | `/systems/default/rewind` | The default rewind value |
| `GET`       | `/systems/:id` | The settings of the specified system |
| `GET` `PUT` | `/systems/:id/videomode` | The game resolution of the specified system |
| `GET` `PUT` | `/systems/:id/shaders` | The shaders of the specified system |
| `GET` `PUT` | `/systems/:id/ratio` | The ratio of the specified system |
| `GET` `PUT` | `/systems/:id/smooth` | Enable/disable the smooth of the specified system |
| `GET` `PUT` | `/systems/:id/rewind` | Enable/disable the rewind of the specified system |
| `GET` `PUT` | `/systems/:id/core` | The core of the specified system |
| `GET` `PUT` | `/systems/:id/emulator` | The emulator of the specified system |
| `GET` `POST` | `/systems/:id/roms` | The game list of the specified system |
| `GET` `DELETE` | `/systems/:id/roms/:game` | The game file |
| `GET`       | `/systems/:id/roms/metadata/:game` | The game informations |

### Examples

```sh
curl http://192.168.0.42:1337/configuration
```

```sh
curl --header "Accept: application/xml" http://192.168.0.42:1337/configuration
```

```sh
curl -X PUT -d "1" http://192.168.0.42:1337/kodi/enabled
```

```sh
curl --header "Accept: application/json" "http://192.168.0.42:1337/bios?count=5&page=2"
```

```sh
curl --head "http://192.168.0.42:1337/bios?count=5&page=2"
```

```sh
curl "http://192.168.0.42:1337/bios?range=2-7"
```

```sh
curl -X POST -F 'file=@SCPH5502.BIN' "http://192.168.0.42:1337/bios"
```

```sh
curl -X DELETE -I "http://192.168.0.42:1337/systems/snes/roms/Zelda.sfc"
```


