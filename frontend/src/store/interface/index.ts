import { RouteRecordRaw } from 'vue-router';
import { DeviceType } from '@/enums/app';
export interface ThemeConfigProp {
    panelName: string;
    primary: string;
    theme: string; // dark | bright ｜ auto
    footer: boolean;
}

export interface GlobalState {
    isLoading: boolean;
    loadingText: string;
    isLogin: boolean;
    entrance: string;
    csrfToken: string;
    language: string; // zh | en
    // assemblySize: string; // small | default | large
    themeConfig: ThemeConfigProp;
    isFullScreen: boolean;
    agreeLicense: boolean;
    hasNewVersion: boolean;
    ignoreCaptcha: boolean;
    device: DeviceType;
}

export interface MenuState {
    isCollapse: boolean;
    menuList: RouteRecordRaw[];
    withoutAnimation: boolean;
}

export interface AuthState {
    authRouter: string[];
}
