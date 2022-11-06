---
sidebar_position: 3
---

# Call

The call object is a placeholder which holds all of the methods already on an espruino device.

For example.

if your device has the methods `forward()` `backward()` `left()` and `right()` the call object will be populated on device connection with these methods. To call on these methods its easy.

```javascript
let device = DeviceController();

device.Call.forward();
device.Call.backward();
device.Call.left();
device.Call.right();
```
