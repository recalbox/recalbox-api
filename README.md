Recalbox API
============

REST API for [recalbox](http://recalbox.com)


Installation
------------

TODO



Documentation
-------------

Available formats:

- `text`
- `json`
- `xml`


| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET`  | `/system/configuration` | Get the main configuration |
| `GET`  | `/system/configuration/hostname` | Get the hostname |
| `PUT`  | `/system/configuration/hostname` | Update the hostname |
| `GET`  | `/system/configuration/kodi` | Get Kodi settings |
| `GET`  | `/system/configuration/kodi/enabled` | Indicates that Kodi is enabled or not |
| `PUT`  | `/system/configuration/kodi/enabled` | Enable/Disable Kodi |
| `GET`  | `/system/configuration/locale` | Get the locale |



