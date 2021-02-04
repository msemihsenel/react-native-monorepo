import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
//import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { default as theme } from './custom-theme.json';
import { default as mapping } from './mapping.json';

//import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>HOME</Text>
    <Button>OPEN DETAILS</Button>
  </Layout>
);

export default function App() {
  return (
    <>
      {/*<IconRegistry icons={EvaIconsPack} />*/}
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...theme }}
        customMapping={mapping}
      >
        <HomeScreen />
      </ApplicationProvider>
    </>

  )
};