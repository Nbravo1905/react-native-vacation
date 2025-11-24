import { useRouter } from "expo-router";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const router = useRouter();

  return (
    <ImageBackground
      source={require('@/assets/images/background.jpg')}
      style={{flex:1}}
      resizeMode="cover"
    >
      <View style={{flex:1,flexDirection: 'column', alignItems:'center'}}>
        <Image 
          source={require('@/assets/images/Vacation.png')}
          style={{top:140}}
        />
        <TouchableOpacity 
          style={{
            bottom: 40,
            position: 'absolute',
            width: 300,
            height: 64,
            backgroundColor: '#5893D8',
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          activeOpacity={0.9}
          onPress={() => router.push('/home')}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 32,
              color: '#fff',
              fontFamily: 'Nunito'
            }}
          >Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
