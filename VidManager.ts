import { nanoid } from 'nanoid';

/** VID is an anti-CSRF attack measure. the ids are created
 * and stored. once expired, the client will notice, and refresh their id.
 * There is always a userid associated, of length 256. */
interface VID {
  /** @description A nanoid of length 128, expirable */
  id: string;
  expires: Date;
}

export default class VIDManager {
  private vids: Map<string, VID>;

  constructor() {
    this.vids = new Map<string, VID>();
  }

  createUser(): {
    vid: VID;
    user: string;
    } {
    const user = nanoid(256);
    return {
      user,
      vid: this.createVid(user),
    };
  }

  createVid(user: string): VID {
    const id = nanoid(128);
    const expires = new Date(Date.now());
    expires.setHours(expires.getHours() + 8);
    const vid = {
      id,
      expires,
    };
    this.vids.set(user, vid);
    return vid;
  }

  validate(vid: string, user: string): boolean {
    const fetched = this.vids.get(user);
    if (fetched !== undefined) {
      const now = new Date(Date.now()).getMilliseconds();
      if (now >= fetched.expires.getMilliseconds() && fetched.id === vid) {
        return true;
      }
    }
    return false;
  }
}
