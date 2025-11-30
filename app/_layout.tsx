import {
DarkTheme,
DefaultTheme,
ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "../hooks/use-color-scheme";
import Footer from "@/components/Footer";
import { usePathname } from "expo-router";

// 🟢 IMPORTANTE
import { CartProvider } from "@/context/CartContext"
export const unstable_settings = {
anchor: "(tabs)",
};

export default function RootLayout() {
const colorScheme = useColorScheme();
const pathname = usePathname();

const hideFooter = pathname === "/";

return ( <CartProvider>
<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
<>
<Stack
screenOptions={{
contentStyle: {
backgroundColor: "#fff",
},
}}
>
<Stack.Screen name="index" options={{ headerShown: true }} />
<Stack.Screen name="(stacks)" options={{ headerShown: true }} />


        <Stack.Screen
          name="(stacks)/Sidibar-screens"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(stacks)/Sidibar-Pizza-screens"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(stacks)/Sidebar-Hamburguer-screens"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(stacks)/Sidebar-Refeicoes-screens"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SidebarSobremesas"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(stacks)/Sidebar-Bebidas-screens"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(stacks)/perfil"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(stacks)/Dados-Conta-Screens"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(stacks)/pagamentos-screens"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(stacks)/Pagamento-Pix-Screens.tsx"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(stacks)/car-screens.tsx"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="(stacks)/produto-detalhe-screens.tsx"
          options={{ headerShown: false }}
        />

        <Stack.Screen
        name="(stacks)/checkout-screens.tsx"
        options={{ headerShown: false }}
        />

        <Stack.Screen
        name="(stacks)/pedido-detalhe-screens.tsx"
        options={{ headerShown: false }}
        />

       <Stack.Screen 
        name="selecao-cartoes" 
        options={{ headerShown: false, presentation: 'modal' }}
       />
        </Stack>

      {!hideFooter && <Footer />}

      <StatusBar style="auto" />
    </>
  </ThemeProvider>
</CartProvider>


);
}
