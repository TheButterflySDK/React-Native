import React from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { NativeModules } from 'react-native';
import { Platform } from 'react-native';
import type { ButterflyButtonProps } from 'types';

export const getDeviceLanguage = () => {
  const locale = Platform.select({
    ios: () =>
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0],
    default: () => NativeModules.I18nManager.localeIdentifier,
  })();
  return locale.replace('-', '_').split('_')[0];
};

const ButterflyButton = (props: ButterflyButtonProps) => {
  const uri = `https://butterfly-button.web.app/reporter/?language=${
    props.language || getDeviceLanguage() // default
  }&is-embedded-as-orphan=1&is-embedded-via-website=0&is-embedded-via-wix=0&web-plugin-version=${
    props.webPluginVersion || '1.0.0'
  }&api_key=${
    (props.testMode ? 'test-' : '') + props.apiKey
  }&override_country=${props.overrideCountry || '-#'}/`;

  const [showReporter, setShowReporter] = React.useState(false);

  const onButterflyButtonPress = () => {
    setShowReporter((prev) => !prev);
  };

  return (
    <>
      <View>
        {/* WebView to load the JavaScript plugin */}
        {/* Image that triggers the toggleButterflyReporter function */}
        <TouchableOpacity onPress={onButterflyButtonPress}>
          <Image
            source={{
              uri: 'https://butterfly-button.web.app/img/butterfly-logo-200.png',
            }}
            style={{
              width: typeof props.width !== 'undefined' ? props.width : 30,
              ...styles.button,
            }}
            resizeMode="contain"
            accessibilityLabel="The Butterfly Button"
          />
        </TouchableOpacity>
      </View>

      <Modal visible={showReporter}>
        <SafeAreaView
          style={[styles.webviewContainer, props.webViewContainerStyle]}
        >
          {props.webviewCustomCloseButton ? (
            props.webviewCustomCloseButton(() => setShowReporter(false))
          ) : (
            <TouchableOpacity
              style={styles.backButtonContainer}
              onPress={() => setShowReporter(false)}
            >
              <Text style={styles.backButtonText}>x</Text>
            </TouchableOpacity>
          )}
          <WebView
            source={{
              uri,
            }}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    height: undefined,
    aspectRatio: 1,
  },

  webviewContainer: {
    flex: 1,
    width: '100%',
  },

  backButtonContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
  },

  backButtonText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default ButterflyButton;
