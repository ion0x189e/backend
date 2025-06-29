import { ObjectId } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

export interface Cable {
  _id: ObjectId;
  reference: string;
  section: string;
  diameter: number;
  weight: number;
  type: string;
  insulation: string;
  conductor: string;
  voltage: string;
  applications: string[];
  sheath?: string;
}
