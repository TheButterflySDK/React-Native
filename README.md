# The Butterfly SDK for React Native

[![License: Apache](https://img.shields.io/badge/License-Apache-yellow.svg)](https://github.com/TheButterflySDK/React-Native/blob/main/LICENSE)
[![Platform-Flutter](https://img.shields.io/badge/Platform-Flutter-blue.svg)](https://github.com/TheButterflySDK/Flutter)
[![Platform-iOS](https://img.shields.io/badge/Platform-iOS-lightgray.svg)](https://github.com/TheButterflySDK/iOS)
[![Platform-Android](https://img.shields.io/badge/Platform-Android-green.svg)](https://github.com/TheButterflySDK/Android)
[![Platform-React-Native](https://img.shields.io/badge/Platform-ReactNative-blue.svg)](https://github.com/TheButterflySDK/React-Native)

[The Butterfly SDK](https://github.com/TheButterflyButton/About/blob/main/README.md) helps your app to take an active part in the fight against domestic violence.

## Installation

### 🔌 & ▶️

### Install via [npm](https://www.npmjs.com/package/react-native-butterfly-button)

```
  npm i react-native-butterfly-button
  npm i react-native-webview
```

## Usage

To recognize your app in TheButterflySDK servers you'll need an application key. You can set it via code, as demonstrated here.

### Example in React-Native

```JavaScript
import ButterflyButton from 'react-native-butterfly-button';

// Wherever you wish to open our screen, simply call:
<ButterflyButton apiKey="<API_KEY>" />
```

## Integration test

#### How?

You can easily verify your application key 🔑 by simply running the plugin in **DEBUG mode** 🐞.

```JavaScript
<ButterflyButton apiKey="<API_KEY>" testMode />
```

This will cause our servers to skip the part of sending reports to real live support centers, they will only verify the API key. Eventually you'll get success / failure result.

## Additional Properties

#### buttonSize

Override the size of the button.
**(Default: 30 pixels)**

example:

```JavaScript
<ButterflyButton apiKey="<API_KEY>" buttonSize={40} />
```

#### language

Override the language of the Butterfly web page.
**(The default is the device language).**

example:

```JavaScript
<ButterflyButton apiKey="<API_KEY>" language='en' />
```

#### webViewContainerStyle

Define a style sheet for the Butterfly WebView.

example:

```JavaScript
<ButterflyButton
    apiKey="<API_KEY>"
    webViewContainerStyle={{
        backgroundColor: "blue"
    }}
/>
```

#### webviewCustomCloseButton

Override the close button of the Butterfly WebView.

example:

```JavaScript
<ButterflyButton
    apiKey="<API_KEY>"
    webviewCustomCloseButton={(closeWebView) => (
        <TouchableOpacity onPress={closeWebView}>
            <Text>Close</Text>
        </TouchableOpacity>
    )}
/>
```

### Enjoy and good luck ❤️
