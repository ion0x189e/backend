import { ObjectId } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

export interface Cable {
  _id: ObjectId;
  reference: string;
  section: string;
  nbrconductor: number;
  diameter: number;
  weight: number;
  type: string;
  insulation: string;
  temperature_max: number;
  oilResistant: boolean;
  PricePermeter: number;
  conductor: string;
  voltage: string;
  applications: string[];
}
