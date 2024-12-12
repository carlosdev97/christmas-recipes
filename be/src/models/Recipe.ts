import mongoose, { Schema, Document } from "mongoose";

export interface IRecipe extends Document {
  title: string;
  category: string;
  ingredients: string[];
  instructions: string;
  image?: string;
}

const RecipeSchema: Schema = new Schema({
  title: { type: String, required: true },
  category: { type: String, require: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.model<IRecipe>("Recipe", RecipeSchema);
