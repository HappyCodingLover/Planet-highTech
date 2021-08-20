import React, {useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {AuthActions} from '@actions';
import {bindActionCreators} from 'redux';
import {WaveIndicator} from 'react-native-indicators';

const LoadScreen = (props) => {
  const {navigation, auth} = props;
  useEffect(() => {
    console.log('showOnboarding', auth.showOnboardingFlow);
    if (!auth.showOnboardingFlow) {
      navigation.navigate('Walkthrough');
    } else {
      setTimeout(() => {
        navigation.navigate('NavStack');
      }, 1000);
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <WaveIndicator color="red" />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AuthActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadScreen);
// export default LoadScreen;
