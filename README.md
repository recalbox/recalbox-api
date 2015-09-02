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
|  ✔  |  ✔  | `/system/configuration` | The main configuration |
|  ✔  |  ✔  | `/system/configuration/hostname` | The hostname |
|  ✔  |     | `/system/configuration/kodi` | Get Kodi settings |
|  ✔  |  ✔  | `/system/configuration/kodi/enabled` | Enable/disable Kodi |
|  ✔  |  ✔  | `/system/configuration/locale` | The locale |


### Examples

```sh
curl http://192.168.0.42:1337/system/configuration
curl --header "Content-Type: application/xml" http://192.168.0.42:1337/system/configuration
```
