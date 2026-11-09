import {View, Text, Pressable} from 'react-native'

export default function NavBar(){
    return (
      <View className="flex-row bg-white border-t border-slate-200">
        <Pressable className="flex-1 items-center py-2">
          <Text className="text-xl">🏠</Text>
          <Text className="text-sm text-emerald-500">Home</Text>
        </Pressable>

        <Pressable className="flex-1 items-center py-2">
          <Text className="text-xl">🔍</Text>
          <Text className="text-sm text-slate-500">Search</Text>
        </Pressable>

        <Pressable className="flex-1 items-center py-2">
          <Text className="text-xl">👤</Text>
          <Text className="text-sm text-slate-500">Profile</Text>
        </Pressable>

        <Pressable className="flex-1 items-center py-2">
          <Text className="text-xl">⚙️</Text>
          <Text className="text-sm text-slate-500">Settings</Text>
        </Pressable>
      </View>
    );
}