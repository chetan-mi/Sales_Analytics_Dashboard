import { NextResponse } from "next/server";
import { salesData } from "@/lib/salesData";

export const GET = async () => NextResponse.json({ data: salesData });

