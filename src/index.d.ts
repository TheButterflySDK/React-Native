export interface ButterflyButtonProps {
  apiKey: string;
  language?: string;
  overrideCountry?: string;
  buttonSize?: number;
  webViewContainerStyle?: import('react-native').StyleProp<
    import('react-native').ViewStyle
  >;
  webviewCustomCloseButton?: (closeWebview: () => void) => JSX.Element;
  testMode?: boolean;
}

type ButterflyButtonFC = React.FC<ButterflyButtonProps>;

export const ButterflyButton: ButterflyButtonFC = props;

export default ButterflyButton;
