import {Mixpanel} from 'mixpanel-react-native';

export default class MixpanelManager {
  static sharedInstance =
    MixpanelManager.sharedInstance || new MixpanelManager();

  constructor() {
    this.configMixpanel();
  }

  configMixpanel = async () => {
    this.mixpanel = await Mixpanel.init('0a064f66c46d1d025b48c9e031b840d9');
    console.log('init');
    console.log(this.mixpanel);
    this.mixpanel.track('From HP');
    this.mixpanel.flush();
  };
}
