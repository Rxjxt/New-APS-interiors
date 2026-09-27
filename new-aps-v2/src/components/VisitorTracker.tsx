"use client";

import { useEffect } from "react";
import { trackVisitor } from "@/services/visitor.service";

export default function VisitorTracker() {
  useEffect(() => {
    trackVisitor();
  }, []);

  return null;
}