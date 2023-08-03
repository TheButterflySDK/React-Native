import { StyleProp, ViewStyle } from 'react-native';

export interface ButterflyButtonProps {
  apiKey: string;
  language?: string;
  overrideCountry?: string;
  buttonSize?: number;
  webViewContainerStyle?: StyleProp<ViewStyle>;
  webviewCustomCloseButton?: (closeWebview: () => void) => React.JSX.Element;
  testMode?: boolean;
}
