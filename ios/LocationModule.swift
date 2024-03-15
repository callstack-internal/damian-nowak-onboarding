//
//  LocationModule.swift
//  WeatherApp
//
//  Created by Damian Nowak on 15/03/2024.
//

import Foundation
import React

@objc(LocationModule)
class LocationModule: NSObject {

 @objc(getCurrentLocation:rejecter:)
  func getCurrentLocation(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) -> Void {
      resolve([
        "latitude": 1.1,
        "longitude": 2.2,
      ])
  }
}
