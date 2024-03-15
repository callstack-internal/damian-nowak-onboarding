package com.weatherapp

import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class LocationModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "LocationModule"

    @ReactMethod
    fun getCurrentLocation(promise: Promise) {
        // TODO implementation

        Log.d("LocationModule","getCurrentLocation called")

        val coordinates = Arguments.createMap()
        coordinates.putDouble("latitude", 1.1)
        coordinates.putDouble("longitude", 2.2)

        promise.resolve(coordinates)
    }
}
