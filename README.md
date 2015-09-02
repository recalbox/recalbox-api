Recalbox API
============

REST API for [recalbox](http://recalbox.com)


Installation
------------

- [Install the service on the Recalbox 3.3.x](documentation/install-on-recalbox.md)
- [Install the developer environment](documentation/install-dev-environment.md)



Documentation
-------------

Available formats:

| Format | MIME type          |
| ------ | ------------------ |
| `text` | `text/plain`       |
| `json` | `application/json` |
| `xml`  | `application/xml`  |


| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET`  | `/system/configuration` | Get the main configuration |
| `GET`  | `/system/configuration/hostname` | Get the hostname |
| `PUT`  | `/system/configuration/hostname` | Update the hostname |
| `GET`  | `/system/configuration/kodi` | Get Kodi settings |
| `GET`  | `/system/configuration/kodi/enabled` | Indicates that Kodi is enabled or not |
| `PUT`  | `/system/configuration/kodi/enabled` | Enable/Disable Kodi |
| `GET`  | `/system/configuration/locale` | Get the locale |


Examples:

```sh
curl http://192.168.0.42:8002/system/configuration
curl --header "Content-Type: application/xml" http://192.168.0.42:8002/system/configuration
```
