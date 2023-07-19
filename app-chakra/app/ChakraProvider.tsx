"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

interface ClientChakraProviderProps {
  children: React.ReactNode;
}

export function ClientChakraProvider(props: ClientChakraProviderProps) {
  const { children } = props;

  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
