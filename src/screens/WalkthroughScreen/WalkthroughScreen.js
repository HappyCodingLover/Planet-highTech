import React, {useLayoutEffect} from 'react';
import {View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import AppIntroSlider from 'react-native-app-intro-slider';

import dynamicStyles from './styles';
import {useColorScheme} from 'react-native-appearance';
// import {IMLocalized} from '../../localization/IMLocalization';

const WalkthroughScreen = (props) => {
  const {navigation, route} = props;
  const appConfig = route.params.appConfig;
  const appStyles = route.params.appStyles;
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(appStyles, colorScheme);

  const slides = appConfig.onboardingConfig.walkthroughScreens.map(
    (screenSpec, index) => {
      return {
        key: index,
        text: screenSpec.description,
        title: screenSpec.title,
        image: screenSpec.icon,
      };
    },
  );

  const _onDone = () => {
    navigation.navigate('Welcome');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const _renderItem = ({item, dimensions}) => (
    <View style={[styles.container]}>
      <Image
        style={styles.image}
        source={item.image}
        size={100}
        color="white"
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );

  const _renderNextButton = () => {
    // return <Text style={styles.button}>{IMLocalized('Next')}</Text>;
    return <Text style={styles.button}>{'Next'}</Text>;
  };

  const _renderSkipButton = () => {
    // return <Text style={styles.button}>{IMLocalized('Skip')}</Text>;
    return <Text style={styles.button}>{'Skip'}</Text>;
  };

  const _renderDoneButton = () => {
    // return <Text style={styles.button}>{IMLocalized('Done')}</Text>;
    return <Text style={styles.button}>{'Done'}</Text>;
  };

  return (
    <AppIntroSlider
      data={slides}
      slides={slides}
      onDone={_onDone}
      renderItem={_renderItem}
      //Handler for the done On last slide
      showSkipButton={true}
      onSkip={_onDone}
      renderNextButton={_renderNextButton}
      renderSkipButton={_renderSkipButton}
      renderDoneButton={_renderDoneButton}
    />
  );
};

WalkthroughScreen.propTypes = {
  navigation: PropTypes.object,
};

export default WalkthroughScreen;
