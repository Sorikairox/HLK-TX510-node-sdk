# HLK-TX510-SDK

This is a TypeScript library for interacting with the HLK-TX510 device. It provides a simple interface for sending commands to the device and handling responses.

## Installation

You can install the library using npm or yarn:

```bash
npm install hlk-tx510-sdk
```
or
```bash
yarn add hlk-tx510-sdk
```

## Usage

First, import the `HLKTX510SDK` class from the library:

```typescript
import { HLKTX510SDK } from 'hlk-tx510-sdk';
```

Then, create a new instance of the `HLKTX510SDK` class, passing the port path to the constructor:

```typescript
const sdk = new HLKTX510SDK('/dev/tty-usbserial1');
```

The `HLKTX510SDK` class extends `EventEmitter`, so you can listen for events emitted by the class:

```typescript
sdk.on('recognition', (message) => {
  console.log('Recognition message received:', message);
});

sdk.on('registration', (message) => {
  console.log('Registration message received:', message);
});

sdk.on('user-deletion', (message) => {
  console.log('User deletion message received:', message);
});

sdk.on('user-list', (message) => {
  console.log('User list message received:', message);
});

sdk.on('unknown-message', (message) => {
  console.log('Unknown message received:', message);
});

sdk.on('error', (err) => {
  console.error('Error occurred:', err);
});
```

You can send commands to the device using the following methods:

- `recognizeFace()`: Recognizes a face.
- `registerFace()`: Registers a face.
- `turnOffBacklight()`: Turns off the backlight.
- `turnOnBacklight()`: Turns on the backlight.
- `turnOffDisplay()`: Turns off the display.
- `turnOnDisplay()`: Turns on the display.
- `deleteUser(userId: number)`: Deletes a user by their ID.
- `sendUserListCommand()`: Sends a command to get the list of users.

For example, to recognize a face:

```typescript
sdk.recognizeFace();
```

To delete a user:

```typescript
sdk.deleteUser(1234);
```

## Dependencies

This library depends on the following packages:

- `@serialport/parser-inter-byte-timeout`
- `@types/node`
- `serialport`
- `ts-node`
- `typescript`
- `vitest`

## Version

The current version of the library is `1.0.0`.