import { prop, Ref } from "@typegoose/typegoose";
import { WhatIsIt } from "@typegoose/typegoose/lib/internal/constants";
import User from "./User";

export default class Group {
  @prop({ ref: () => User, type: () => [User], required: true }, WhatIsIt.ARRAY)
  public users: Ref<User>[];

  @prop({ type: String, required: true })
  public name: string;
}
