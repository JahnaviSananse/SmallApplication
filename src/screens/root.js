import React from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import Router from '../routes/router';

const Root = props => {
  return (
    <>
      {/* {console.log('kdbhlbjhbjhbjhb,bjhbchjsbchjbeshjcbshdc', props.Loading)}
      {props.loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : ( */}
      <Router />
      {/* )} */}
    </>
  );
};

// const mapStateToProps = state => ({
//   Loading: state.dataFetch.isLoading,
//   loading: state.dataPost.isLoading,
// });
// export default Root;
export default Root;
