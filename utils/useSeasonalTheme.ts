"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { isSeasonalWindow } from "./dates";

export function useSeasonalTheme(): boolean {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const seasonalParam = searchParams?.get("seasonal");
    if (seasonalParam && seasonalParam.toLowerCase() === "true") {
      return true;
    }
    return isSeasonalWindow();
  }, [searchParams]);
}
