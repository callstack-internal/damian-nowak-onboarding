//
//  LocationModuleBridge.m
//  WeatherApp
//
//  Created by Damian Nowak on 15/03/2024.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(LocationModule, NSObject)

RCT_EXTERN_METHOD(getCurrentLocation:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end
