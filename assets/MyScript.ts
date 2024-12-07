import {
    _decorator,
    Component,
} from "cc";

const { ccclass } = _decorator;
import { Appylar } from "./Appylar";

@ccclass('MyScript')
export class MyScript extends Component implements AppylarInitializationListener, AppylarBannerListener, AppylarInterstitialListener {
    configKeys: any = {
        appKeyIos: "<YOUR_IOS_APP_KEY>",
        appKeyAndroid: "<YOUR_ANDROID_APP_KEY>",
        appIdIos: "<YOUR_IOS_APP_ID>",
        appIdAndroid: "<YOUR_ANDROID_APP_ID>"
    };
    public Appylar: Appylar = null;

    onNoInterstitial(): void {
        const response = "onNoInterstitial"
        console.log("Response", response);
    }
    onInterstitialShown(): void {
        const response = "onInterstitialShown"
        console.log("Response", response);
    }
    onInterstitialClosed(): void {
        const response = "onInterstitialClosed"
        console.log("Response", response);
    }
    onNoBanner(): void {
        const response = "onNoBanner"
        console.log("Response", response);
    }
    onBannerShown(height: number): void {
        const response = "onBannerShown" + height
        console.log("Response", response);
    }

    onInitialized(): void {
        const response = "onInitialized";
        console.log("Response", response);
    }
    
    protected onLoad(): void {
        this.Appylar = new Appylar(this.node);
    }
    async initialization() {
        const adTypes = ['banner', 'interstitial']; // Add both or one of your choice here.
        try {
            await this.Appylar.init(this.configKeys, adTypes, true, this);
        } catch (e) {
            console.log(e, 'error')
        }
    }
    async showTopAd() {
        this.Appylar.showBannerAd("top", this, 'placement Text');
    }
    async showBottomAd() {
        this.Appylar.showBannerAd("bottom", this, 'placement Text');
    }
    async hideBannerAd() {
        this.Appylar.hideBanner();
    }
    async showInterstitialAd() {
        this.Appylar.showInterstitialAd(this, 'placement Text');
    }
    async setParameters() {
        const parameters: Map<string, string[]> = new Map<string, string[]>()
        parameters['banner_height'] = ["90"]
        this.Appylar.setParameters(parameters);
    }
    start() {

    }

    update(deltaTime: number) {

    }
}

