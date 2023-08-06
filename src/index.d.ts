export interface ButterflyButtonProps {
  apiKey: string;
  language?: string;
  overrideCountry?: string;
  buttonSize?: number;
  webViewContainerStyle?: import('react-native').StyleProp<
    import('react-native').ViewStyle
  >;
  webviewCustomCloseButton?: (closeWebview: () => void) => React.JSX.Element;
  testMode?: boolean;
}

export const ButterflyButton = (props: ButterflyButtonProps) =>
  React.JSX.Element;

export default ButterflyButton;
