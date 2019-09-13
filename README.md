Testing NFC for iOS Devices

## Requirements
1. iOS 11 and above
2. Developer Account to enable NFC Capabilities (Targets -> Capabilities -> Near Field Communication Tag Reading)
3. To build with XCode 10, `react-native-nfc-manager` has to be `v1.2.2`.
4. Add the following into `ios/Info.plist` if it does not exist (App will not work properly if this is not included)
```xml
	<key>NFCReaderUsageDescription</key>
	<string>YOUR_PRIVACY_DESCRIPTION</string>
```  
5. Replace the `App.js` with the sample one provided by `react-native-nfc-manager` if you want to test the tag scanning.
