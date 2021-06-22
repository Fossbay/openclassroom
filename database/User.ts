import { prop } from "@typegoose/typegoose";
import UserType from "../types/UserTypes";

export default class User {
  @prop({ required: true, type: String })
  public name: string;

  /**
   * @description For people that don't like their second name, or have a new name.
   */
  @prop({ required: false, type: String })
  public preferredName?: string;

  @prop({ required: true, type: String })
  public email: string;

  @prop({ required: true, type: Number })
  public type: UserType;

  /**
   * @description bcrypt hash (recommended) or raw text password
   */
  @prop({ required: true, type: String })
  public password: string;
}
