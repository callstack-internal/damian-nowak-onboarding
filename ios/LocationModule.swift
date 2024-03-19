//
//  LocationModule.swift
//  WeatherApp
//
//  Created by Damian Nowak on 15/03/2024.
//

import Foundation
import React

@objc(LocationModule)
class LocationModule: NSObject, CLLocationManagerDelegate {
  
  private var locationManager: CLLocationManager
  private var resolveCallback: RCTPromiseResolveBlock? = nil
  private var rejecterCallback: RCTPromiseRejectBlock? = nil
  
  override init() {
    locationManager = CLLocationManager()
    
    super.init()
    
    locationManager.delegate = self
    locationManager.desiredAccuracy = kCLLocationAccuracyKilometer
  }
  
  @objc(getCurrentLocation:rejecter:)
  func getCurrentLocation(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
    guard CLLocationManager.locationServicesEnabled() else {
      reject("", "", LocationModuleError.locationServicesDisabled)
      return
    }
    
    resolveCallback = resolve
    rejecterCallback = reject
    
    locationManager.requestLocation()
  }
  
  func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
    
    guard let location = locations.first else {
      rejecterCallback?("", "", LocationModuleError.failedToFetchLocation)
      clearCallbacks()
      return
    }
    
    resolveCallback?([
      "latitude": location.coordinate.latitude,
      "longitude": location.coordinate.longitude,
    ])
    clearCallbacks()
  }
  
  func locationManager(_ manager: CLLocationManager, didFailWithError error: any Error) {
    rejecterCallback?("", "", LocationModuleError.failedToFetchLocation)
    clearCallbacks()
  }
  
  private func clearCallbacks() {
    resolveCallback = nil
    rejecterCallback = nil
  }
  
}

enum LocationModuleError: Error {
  case locationServicesDisabled
  case failedToFetchLocation
}
