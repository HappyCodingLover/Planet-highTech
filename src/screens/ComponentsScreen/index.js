import React, {Component} from 'react';
import {View} from 'react-native';
import {Text} from '@components';

class ComponentsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text body1 blueColor>
          {'Components Screen'}
        </Text>
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(AuthActions, dispatch),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Loading);
export default ComponentsScreen;
