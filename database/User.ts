import { prop } from "@typegoose/typegoose";
import UserType from "../types/UserTypes";

export default class User {
  @prop({ required: true, type: String })
  public name: string;

  @prop({ required: false, type: String })
  public preferredName?: string;

  @prop({ required: true, type: String })
  public email: string;

  @prop({ required: true, type: Number })
  public type: UserType;
}
