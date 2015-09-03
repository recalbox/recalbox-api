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

To get a specific response format, you have to send the HTTP header `Content-Type` with a listed MIME type above.


### Endpoints

| GET | PUT | Endpoint | Description |
|:---:|:---:| -------- | ----------- |
|  ✔  |  ✔  | `/configuration` | [The main configuration](documentation/api/system/configuration.md) |
|  ✔  |  ✔  | `/hostname` | The hostname |
|  ✔  |  ✔  | `/locale` | The locale |
|  ✔  |  ✔  | `/keyboardlayout` | The keyboard layout |
|  ✔  |  ✔  | `/timezone` | The timezone |
|  ✔  |  ✔  | `/updates/enabled` | Enable/disable the updates check at startup |
|  ✔  |     | `/kodi` | Get Kodi settings |
|  ✔  |  ✔  | `/kodi/enabled` | Enable/disable Kodi |
|  ✔  |  ✔  | `/kodi/atstartup` | Start Kodi at launch |
|  ✔  |  ✔  | `/kodi/xbutton` | Set x button shortcut |
|  ✔  |     | `/wifi` | Get wifi settings |
|  ✔  |  ✔  | `/wifi/enabled` | Enable/disable wifi |
|  ✔  |  ✔  | `/wifi/ssid` | Wifi SSID |
|  ✔  |  ✔  | `/wifi/key` | Wifi key |
|  ✔  |     | `/audio` | Get audio settings |
|  ✔  |  ✔  | `/audio/device` | The audio device |
|  ✔  |  ✔  | `/audio/volume` | The volume |
|  ✔  |  ✔  | `/audio/bgmusic` | Enable/disable sounds in EmulationStation |
|  ✔  |     | `/controllers/ps3` | Get PS3 controllers settings |
|  ✔  |  ✔  | `/controllers/ps3/enabled` | Enable/disable PS3 controllers support |
|  ✔  |  ✔  | `/controllers/ps3/driver` | PS3 controllers driver |
|  ✔  |     | `/controllers/xboxdrv` | Get xboxdrv driver settings |
|  ✔  |  ✔  | `/controllers/xboxdrv/enabled` | Enable/disable xboxdrv driver |
|  ✔  |  ✔  | `/controllers/xboxdrv/nbcontrols` | The amount of controllers to use with xboxdrv |
|  ✔  |     | `/controllers/gpio` | Get GPIO settings |
|  ✔  |  ✔  | `/controllers/gpio/enabled` | Enable/disable controllers on GPIO |
|  ✔  |  ✔  | `/controllers/gpio/args` | `mk_gpio` arguments |
|  ✔  |     | `/controllers/db9` | Get DB9 driver settings |
|  ✔  |  ✔  | `/controllers/db9/enabled` | Enable/disable DB9 driver |
|  ✔  |  ✔  | `/controllers/db9/args` | DB9 driver arguments |
|  ✔  |     | `/controllers/gamecon` | Get gamecon driver settings |
|  ✔  |  ✔  | `/controllers/gamecon/enabled` | Enable/disable gamecon driver |
|  ✔  |  ✔  | `/controllers/gamecon/args` | Gamecon driver arguments |
|  ✔  |     | `/system/default` | The default game settings |
|  ✔  |  ✔  | `/system/default/videomode` | The default game resolution |
|  ✔  |  ✔  | `/system/default/shaders` | The default shaders |
|  ✔  |  ✔  | `/system/default/ratio` | The default ratio |
|  ✔  |  ✔  | `/system/default/smooth` | The default smooth value |
|  ✔  |  ✔  | `/system/default/rewind` | The default rewind value |
|  ✔  |     | `/system/:id` | The settings of the specified system |
|  ✔  |  ✔  | `/system/:id/videomode` | The game resolution of the specified system |
|  ✔  |  ✔  | `/system/:id/shaders` | The shaders of the specified system |
|  ✔  |  ✔  | `/system/:id/ratio` | The ratio of the specified system |
|  ✔  |  ✔  | `/system/:id/smooth` | Enable/disable the smooth of the specified system |
|  ✔  |  ✔  | `/system/:id/rewind` | Enable/disable the rewind of the specified system |
|  ✔  |  ✔  | `/system/:id/core` | The core of the specified system |
|  ✔  |  ✔  | `/system/:id/emulator` | The emulator of the specified system |


### Examples

```sh
curl http://192.168.0.42:1337/system/configuration
curl --header "Content-Type: application/xml" http://192.168.0.42:1337/system/configuration
```
