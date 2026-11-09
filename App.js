import "./global.css";
import React from 'react'
import { Text, Pressable, ScrollView } from "react-native";
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-slate-50">
        <TopBar />

        <ScrollView className="flex-1" contentContainerClassName="p-5">
          <Text className="text-3xl font-bold text-slate-800 text-center">
            Hello World!
          </Text>
          <Text className="text-sm text-grey text-center mt-4">
            I love my world, and my world is her YIEEEEEEEEEEEEE
          </Text>

          <Pressable className="bg-emerald-600 rounded-xl py-3 items-center mt-6 active:opacity-80">
            <Text className="text-white font-bold text-base">Get Started</Text>
          </Pressable>

          <Pressable className="border border-emerald-600 rounded-xl py-3 items-center mt-4 active:opacity-80">
            <Text className="text-emerald-600 font-bold text-base">
              Learn More
            </Text>
          </Pressable>

          <Pressable className="bg-red-500 rounded-xl py-3 items-center mt-4 active:opacity-80">
            <Text className="text-white font-bold text-base">
              Delete
            </Text>
          </Pressable>
        </ScrollView>

        <NavBar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
