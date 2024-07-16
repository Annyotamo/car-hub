"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { carTypes } from "@/types";
import Button from "./Button";

export default function CarCard({ car }: { car: carTypes }) {
    return <div>{car.model}</div>;
}
