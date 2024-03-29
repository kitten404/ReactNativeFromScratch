import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta'

export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fontCarregada) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}